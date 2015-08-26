/*
* Musyka - A Javascript Music Theory Library v0.0.0
*
* http://subcode.io/projects/musyka
* 
* Copyright 2015 Simon Rycroft <simon.rycroft@subcode.io>
* Released under the MIT license
*/

'use strict';

import Note from './note';

export default class Muzyka {

    createNote(id) {
        if (!this._note) {
            this._note = new Note(id);
        }
        return this._note;
    }

}

