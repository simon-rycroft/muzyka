'use strict';

import {assert, expect} from 'chai';
import _ from 'lodash';

import Note from '../../src/note';

describe('The Note class', function () {

    let testsData = [
        {
            input: 'a0',
            expected:  {
                name: 'A0',
                key: 1,
                frequency: 27.5
            }
        }
    ];

    describe('allows us to create note objects', function () {
        _.each(testsData, (testData) => {
            it('creates a valid ' + testData.expected.name + ' note object using ' + testData.input, function () {
                let actualNote = new Note(testData.input);
                assert.equal(testData.expected.name, actualNote.name) ;
                assert.equal(testData.expected.key, actualNote.key) ;
                assert.equal(testData.expected.frequency, actualNote.frequency) ;
            });
        });
    });

});

