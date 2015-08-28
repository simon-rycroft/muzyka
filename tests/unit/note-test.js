'use strict';

import {assert, expect} from 'chai';
import _ from 'lodash';

import Note from '../../src/note';

describe('The Note class', function () {

    let testsData = [
        {
            inputs: [
                {
                    type: 'scientific',
                    value: 'a0'
                }
            ],
            expectedNote:  {
                name: 'A0',
                keyNo: 1,
                frequency: 27.5
            }
        }
    ];

    _.each(testsData, (testData) => {
        describe('creates a valid ' + testData.expectedNote.name + ' note object ', function () {
            _.each(testData.inputs, (input) => {
                it('using the ' + input.type + ' notation "' + input.value + '"', function(){
                    let actualNote = new Note(input.value);
                    validateNote(testData.expectedNote, actualNote);
                });
            });
        });
    });

    function validateNote(expectedNote, actualNote) {
        expect(expectedNote.name).to.equal(actualNote.name, 'name does not match') ;
        expect(expectedNote.keyNo).to.equal(actualNote.keyNo, 'keyNo does not match') ;
        expect(expectedNote.frequency).to.equal(actualNote.frequency, 'frequency does not match') ;
    }
});

