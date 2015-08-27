'use strict';

import {assert, expect} from 'chai';
import _ from 'lodash';

import Note from '../../src/note';

describe('The Note class', function () {

    let testsData = [
        {
            input: 'a0',
            expectedNote:  {
                name: 'A0',
                keyNo: 1,
                frequency: 27.5
            }
        }
    ];

    describe('allows us to create note objects', function () {
        _.each(testsData, (testData) => {
            it('creates a valid ' + testData.expectedNote.name + ' note object using ' + testData.input, function () {
                let actualNote = new Note(testData.input);
                validateNote(testData.expectedNote, actualNote);
            });
        });
    });

    function validateNote(expectedNote, actualNote) {
        expect(expectedNote.name).to.equal(actualNote.name) ;
        expect(expectedNote.keyNo).to.equal(actualNote.keyNo, 'keyNo does not match') ;
        expect(expectedNote.frequency).to.equal(actualNote.frequency) ;
    }
});

