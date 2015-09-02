test:
	@./node_modules/.bin/mocha -u tdd --reporter spec --compilers js:babel/register tests/**

.PHONY: test

