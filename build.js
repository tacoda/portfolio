var fs = require('fs');
var sass = require('sass');
var pug = require('pug');

var dir = './public';

if(!fs.existsSync(dir)){
    fs.mkdirSync(dir);
    console.log('public directory was created');
}

fs.copyFile('favicon.ico', 'public/favicon.ico', (err) => {
  if (err) throw err;
  console.log('favicon.ico was copied to public/favicon.ico');
});

var assetsDir = './public/assets';

if(!fs.existsSync(assetsDir)){
    fs.mkdirSync(assetsDir);
    console.log('public assets directory was created');
}

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

// TODO: Iterate through templates since this is the same code

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

var compileError = pug.compileFile('templates/error.pug');

pug.render(compileError(), {}, function(error, result) {
  if(!error){
    // No errors during the compilation, write this result on the disk
    fs.writeFile('public/error.html', result, function(err){
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
    fs.writeFile('public/shotty.html', result, function(err){
      if(!err){
        //file written on disk
        console.log('file written to disk');
      } else {
        console.log(err);
      }
    });
  }
});
