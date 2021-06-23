let http = require('http')
let PORT = 3002
let count = 1
let fs = require('fs')

let server = http.createServer((req, res) => {
    fs.readFile('index.html', 'utf8', (err, data) => {
        if (err)
            console.log(err)
        if (data) {

            // console.log(data)
            // let url = req.url
            let page_name = req.url.slice(1)
            page_name = page_name || 'Home'
            data = data.replace('{{count}}', count)
            data = data.replace('{{page_name}}', page_name.toUpperCase())
            count++
            res.write(data)
            res.end()
            // console.log(url)
        }
    })
})


server.listen(PORT, 'localhost', () => {
    console.log('Server is listening on ', PORT)
})