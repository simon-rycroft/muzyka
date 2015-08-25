'use strict';

import notesConfig from './config/notes';

export default class Note {

    constructor (id) {
        let noteId = id.toUpperCase();
        if (notesConfig[noteId]) {
            let noteConfig = notesConfig[noteId];
            this._name = noteConfig.name;
            this._key = noteConfig.key;
            this._frequency = noteConfig.frequency;
        }
    }

    get name () {
        return this._name;
    }

    get key () {
        return this._key;
    }

    get frequency () {
        return this._frequency;
    }
}

