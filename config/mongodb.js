const mongoose = require('mongoose') 
mongoose.connect('mongodb://localhost/base_stats', {useNewUrlParser: true})
    .catch(e => {
        const msg = 'MongoDB offline!'
        console.log('\x1b[41m%s\x1b[37m', msg, '\x1b[0m')
    })
    