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

    constructor() {
        this._note = new Note();
    }

    get note() {
        return this._note;
    }

}


