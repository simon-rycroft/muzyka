test:
	@./node_modules/.bin/mocha -u tdd --reporter spec --compilers js:babel/register tests/**
lint:
	@./node_modules/.bin/gulp lint
.PHONY: test

