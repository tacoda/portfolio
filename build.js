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

var compileIndex = pug.compileFile('templates/index.pug');

pug.render(compileIndex(), {}, function(error, result) {
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
});

var compileShotty = pug.compileFile('templates/shotty.pug');

pug.render(compileShotty(), {}, function(error, result) {
  if(!error){
    // No errors during the compilation, write this result on the disk
    fs.writeFile('public/projects/shotty.html', result, function(err){
      if(!err){
        //file written on disk
        console.log('file written to disk');
      } else {
        console.log(err);
      }
    });
  }
});
