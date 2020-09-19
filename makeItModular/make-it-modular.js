let fs = require('fs')
let path = require('path')

module.exports = function (dir, ext, callback) {

  fs.readdir(dir, function (err, data) {
    if (err)
      return callback(err)
      else
    {
      data = data.filter(function (file) {
        return path.extname(file) === '.' + ext
      })
	}
    callback(null, data)
  })
}