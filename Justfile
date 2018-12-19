sass-bin = `npm get prefix` + '/bin/sass'

# Serve the site
serve:
    php -S localhost:8080

# Compile sass
sass +FLAGS='':
    {{ sass-bin }} {{FLAGS}} main.scss assets/main.css
