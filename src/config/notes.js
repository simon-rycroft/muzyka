'use strict';

let notesConfig = {};

let intervals = {
    A: 1,
    As: 2,
    Bb: 2,
    B: 3,
    Cb: 3,
    C: 4,
    Bs: 4,
    Cs: 5,
    Db: 5,
    D: 6,
    Ds: 7,
    Eb: 7,
    E: 8,
    Fb: 8,
    F: 9,
    Es: 9,
    Fs: 10,
    Gb: 10,
    G: 11,
    Gs: 12,
    Ab: 12
};

let keys = [
    {
        name: 'A0',
        keyNo: 1,
        frequency: 27.5
    }
];


notesConfig.keys = keys;
notesConfig.intervals = intervals;

export default notesConfig;

