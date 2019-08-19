.PHONY : all build clean fresh server

all : build-project build

build : clean
	node build.js

clean :
	rm -rf public

fresh : fresh-clean fresh-build build

fresh-clean :
	rm -rf node_modules

fresh-build :
	npm install

server :
	node server.js

publish :
	echo "Publish!"
