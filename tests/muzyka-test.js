'use strict';

import {assert, expect} from 'chai';

import Muzyka from '../src/Muzyka';

describe('Hello world', function () {
    it('should greet us', function () {
        let muzyka = new Muzyka();
        assert.equal('Hello ES6!', muzyka.getGreeting());
    });
});

