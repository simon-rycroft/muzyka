'use strict';

import * as constants from './constants';

export default class Note {

    constructor(notation) {

        let keyNo = this.getKeyNoFromNotation_(notation);
        let noteData = this.getNoteDataByKeyNo_(keyNo);
        
        if(noteData) {
            this._name = noteData.name;
            this._keyNo = noteData.keyNo;
            this._frequency = noteData.frequency;
        }
    }

    get name() {
        return this._name;
    }

    get keyNo() {
        return this._keyNo;
    }

    get frequency() {
        return this._frequency;
    }

    getKeyNoFromNotation_(notation) {
        let chars = notation.split('');
        let note = chars[0].toUpperCase();
        let octave = chars[1];
        let keyNo = (octave * 12) + constants.INTERVALS[note];
        return keyNo;
    }

    getNoteDataByKeyNo_(keyNo) {
        let index = keyNo-1;
        if (constants.KEYS[index]) {
            return constants.KEYS[index];
        }
    }

}

