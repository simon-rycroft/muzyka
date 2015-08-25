'use strict';
/*
* Musyka - A Javascript Music Theory Library v0.0.0
*
* http://subcode.io/projects/musyka
* 
* Copyright 2015 Simon Rycroft <simon.rycroft@subcode.io>
* Released under the MIT license
*/

import Note from './Note';

export default class Muzyka {

    note(id) {
        if (!this._note) {
            this._note = new Note(id);
        }
        return this._note;
    }

}

