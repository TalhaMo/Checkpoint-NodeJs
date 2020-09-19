let moduleExp = require('./make-it-modular.js')
let folder = process.argv[2]
let ext = process.argv[3]

moduleExp(folder, ext, function (err, data) {
  if (err)
    return console.error('Error:', err)
  else
  {
   data.forEach(function (file) {
     console.log(file)
   })
  }
})