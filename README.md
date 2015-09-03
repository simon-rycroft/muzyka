# muzyka
A music theory Javascript library

[![Build Status](https://travis-ci.org/simonrycroft/muzyka.svg?branch=master)](https://travis-ci.org/simonrycroft/muzyka)

## Project Status
This is proof of concept stuff, not to be used for anything, by anyone, ever.

## Example Usage

```javascript
import Muzyka from './path/to/src/muzyka';
let muzyka = new Muzyka();

// Create note objects
var c4 = muzyka.createNote('c4');
```

## Running Tests

```
// Run tests once
gulp test

// Run tests every time a file changes
gulp watch-test
```

