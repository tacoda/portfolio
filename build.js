var fs = require('fs');
var sass = require('sass');
var pug = require('pug');

sass.render({file: 'style.scss'}, function(error, result) {
  if(!error){
    // No errors during the compilation, write this result on the disk
    fs.writeFile('public/assets/style.css', result.css, function(err){
      if(!err){
        //file written on disk
        console.log('file written to disk');
      } else {
        console.log(err);
      }
    });
  }
});

var compile = pug.compileFile('templates/index.pug');

pug.render(compile(), {}, function(error, result) {
  if(!error){
    // No errors during the compilation, write this result on the disk
    fs.writeFile('public/index.html', result, function(err){
      if(!err){
        //file written on disk
        console.log('file written to disk');
      } else {
        console.log(err);
      }
    });
  }
})
