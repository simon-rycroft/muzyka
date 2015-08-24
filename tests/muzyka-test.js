'use strict';

import {assert, expect} from 'chai';

import Muzyka from '../src/Muzyka';

describe('Muzyka', function () {

    it('should give us access to a note object', function () {
        let muzyka = new Muzyka();
        assert.isObject(muzyka.note);
    });

    describe('the note object', function () {

        it('should not be able to be modified directly', function () {
            let muzyka = new Muzyka();
            var err = new TypeError('Cannot set property note of [object Object] which has only a getter');
            let set = function() {
                muzyka.note = 'new value';
            }
            expect(set).to.throw(TypeError);
        });

    });

});

