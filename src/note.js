'use strict';

import notesConfig from './config/notes';

export default class Note {

    constructor(notation) {

        let keyNo = this.getKeyNoFromNotation_(notation);
        let noteConfig = this.getNoteConfigFromKeyNo_(keyNo);
        
        if(noteConfig) {
            this._name = noteConfig.name;
            this._key = noteConfig.key;
            this._frequency = noteConfig.frequency;
        }
    }

    get name() {
        return this._name;
    }

    get key() {
        return this._key;
    }

    get frequency() {
        return this._frequency;
    }

    getKeyNoFromNotation_(notation) {
        let chars = notation.split('');
        let note = chars[0].toUpperCase();
        let octave = chars[1];
        let keyNo = (octave * 12) + notesConfig.intervals[note];
        return keyNo;
    }

    getNoteConfigFromKeyNo_(keyNo) {
        let index = keyNo-1;
        if (notesConfig.keys[index]) {
            return notesConfig.keys[index];
        }
    }

}

