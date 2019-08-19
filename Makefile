build:
	node build.js

build-project:
	npm install

clean:
	rm -rf public

clean-project:
	rm -rf node_modules

server:
	node server.js

publish:
	echo "Publish!"
