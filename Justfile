serve:
    @echo "Starting server on localhost:8080..."
    php -S localhost:8080

sass +FLAGS:
    sass {{FLAGS}} main.scss assets/main.css
