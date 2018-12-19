# Serve the site
serve:
    php -S localhost:8080

# Compile sass
sass +FLAGS:
    sass {{FLAGS}} main.scss assets/main.css
