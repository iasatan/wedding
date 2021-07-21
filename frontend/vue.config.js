const path = require('path');


module.exports = {
    outputDir: path.resolve(__dirname, '../public'),
    devServer: {
        proxy: {
            '/api': {
                target: 'http://localhost:8080'
            },
            '/img': {
                target: 'http://localhost:8080'
            },
            '/csv': {
                target: 'http://localhost:8080'
            }


        }
    }
}