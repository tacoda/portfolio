var fs = require('fs');
var sass = require('sass');
var pug = require('pug');

var dir = './public';

if(!fs.existsSync(dir)) {
    fs.mkdirSync(dir);
    console.log('Created: public/');
}

fs.copyFile('favicon.ico', 'public/favicon.ico', (err) => {
  if (err) throw err;
  console.log('Created: public/favicon.ico');
});

fs.copyFile('cv.pdf', 'public/cv.pdf', (err) => {
  if (err) throw err;
  console.log('Created: public/cv.pdf');
});

var assetsDir = './public/assets';

if(!fs.existsSync(assetsDir)) {
    fs.mkdirSync(assetsDir);
    console.log('Created: public/assets/');
}

sass.render({file: 'style.scss'}, function(error, result) {
  if(!error){
    // No errors during the compilation, write this result on the disk
    fs.writeFile('public/assets/style.css', result.css, function(err){
      if(!err){
        //file written on disk
        console.log('Created: public/assets/style.css');
      } else {
        console.log(err);
      }
    });
  }
});

var templates = './templates';

fs.readdirSync(templates).forEach(file => {
  isDirectory = fs.stat(templates + '/' + file, (err, stats) => {
    if(!err) {
      // return stats.isDirectory();
      // console.log(stats.isDirectory());
      if(!stats.isDirectory()) {
        // console.log(templates + '/' + file);

        var compiled = pug.compileFile(templates + '/' + file);

        pug.render(compiled(), {}, function(error, result) {
          if(!error){
            // No errors during the compilation, write this result on the disk
            fs.writeFile('public/' + file.split('.')[0] + '.html', result, function(err){
              if(!err){
                //file written on disk
                console.log('Created: public/' + file.split('.')[0] + '.html');
              } else {
                console.log(err);
              }
            });
          }
        });
      }
    } else {
      console.log(err);
    }
  });
  // console.log(isDirectory);
})
