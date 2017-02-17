process.env.VUE_ENV = 'server'
const isProd = process.env.NODE_ENV === 'production'

const fs = require('fs')
const path = require('path')
const express = require('express')
const favicon = require('serve-favicon')
const compression = require('compression')
const serialize = require('serialize-javascript')
const resolve = file => path.resolve(__dirname, file)

const app = express()

let indexHTML // generated by html-webpack-plugin
let renderer  // created from the webpack-generated server bundle
if (isProd) {
    // in production: create server renderer and index HTML from real fs
    renderer = createRenderer(fs.readFileSync(resolve('./dist/server-bundle.js'), 'utf-8'))
    indexHTML = parseIndex(fs.readFileSync(resolve('./dist/index.html'), 'utf-8'))
} else {
    // in development: setup the dev server with watch and hot-reload,
    // and update renderer / index HTML on file change.
    require('./build/setup-dev-server')(app, {
        bundleUpdated: bundle => {
            renderer = createRenderer(bundle)
        },
        indexUpdated: index => {
            indexHTML = parseIndex(index)
        }
    })
}

function createRenderer(bundle) {
    // https://github.com/vuejs/vue/blob/next/packages/vue-server-renderer/README.md#why-use-bundlerenderer
    return require('vue-server-renderer').createBundleRenderer(bundle, {
        cache: require('lru-cache')({
            max: 1000,
            maxAge: 1000 * 60 * 15
        })
    })
}

function parseIndex(template) {
    const contentMarker = '<!-- APP -->'
    const i = template.indexOf(contentMarker)
    return {
        head: template.slice(0, i).replace("<head>","").replace("</head>",""),
        tail: template.slice(i + contentMarker.length)
    }
}

const serve = (path, cache) => express.static(resolve(path), {
    maxAge: cache && isProd ? 60 * 60 * 24 * 30 : 0
})

app.use(compression({threshold: 0}))
app.use(favicon('./public/favicon.ico'))
app.use('/service-worker.js', serve('./dist/service-worker.js'))
app.use('/manifest.json', serve('./manifest.json'))
app.use('/dist', serve('./dist'))
app.use('/public', serve('./public'))
app.use('/static', serve('./static'))

app.get('*', (req, res) => {
    if (!renderer) {
        return res.end('waiting for compilation... refresh in a moment.')
    }

    res.setHeader("Content-Type", "text/html");
    var s = Date.now()
    const context = {url: req.url}
    const renderStream = renderer.renderToStream(context)

    //之前的head
    // renderStream.once('data', () => {
    //     res.write(indexHTML.head)
    // })

    // meta
    renderStream.once('data', () => {
        const {
                title, htmlAttrs, bodyAttrs, link, style, script, noscript, meta
        } = context.meta.inject()
        res.write(`
      <!doctype html>
      <html data-vue-meta-server-rendered ${htmlAttrs.text()}>
        <head>
          ${title.text()}
          ${meta.text()}
            <meta charset="utf-8">
            <meta name="mobile-web-app-capable" content="yes">
            <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no, minimal-ui">
            <link rel="shortcut icon" sizes="48x48" href="/public/favicon.ico">
            <link rel="stylesheet" href="https://unpkg.com/element-ui/lib/theme-default/index.css">
            <link rel="manifest" href="/manifest.json">
            <script src="/static/js/jquery-3.1.1.min.js"></script>
            <link rel="stylesheet" href="/static/swiper/swiper-3.3.1.min.css">
            <script src="/static/swiper/swiper-3.3.1.min.js"></script>
            <script src="/static/range/jquery.range.js"></script>
            ${indexHTML.head}
            <script type="text/javascript" src="http://api.map.baidu.com/api?v=2.0&ak=aaNCRRcGGai6klHMOGZ8yBbP"></script>
        </head>
        <body ${bodyAttrs.text()}>
        `)
    })
    // meta

    renderStream.on('data', chunk => {
        res.write(chunk)
    })



    renderStream.on('end', () => {
        // embed initial store state
        if (context.initialState) {
            res.write(
                    `<script>window.__INITIAL_STATE__=${
                            serialize(context.initialState, {isJSON: true})
                            }</script>`
            )
        }
        res.end(indexHTML.tail)
        console.log(`whole request: ${Date.now() - s}ms`)
    })

    renderStream.on('error', err => {
        if (err && err.code === '404') {
            res.status(404).end('404 | Page Not Found')
            return
        }
        // Render Error Page or Redirect
        res.status(500).end('Internal Error 500')
        console.error(`error during render : ${req.url}`)
        console.error(err)
    })
})

const port = process.env.PORT || 8083
app.listen(port, () => {
    console.log(`server started at localhost:${port}`)
})
