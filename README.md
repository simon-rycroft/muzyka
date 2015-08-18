# teori
A music theory Javascript library

## Project Status
This is proof of concept stuff, not to be used for anything, by anyone, ever.

## Example Usage

```javascript
var teori = require('./teori');
```

### Chords

Discover chords from arrays of notes (the first note is assumed to be the root so ordering is important):

```javascript
var chord = teori.getChordByNotes(['C', 'E', 'G', 'B']);

/*
Gives us a chord object:
{
    name: 'Cmaj7',
    notes: ['C', 'E', 'G', 'B']
}
*/
```

Discover chords from arrays of pitches (order is not important):

```javascript
var chord = teori.getChordByPitches(['E4', 'G4', 'C4' 'B4']);

/*
Gives us a chord object:
{
    name: 'Cmaj7',
    notes: ['C', 'E', 'G', 'B']
}
*/
```

Get chords by name:

```javascript
var chord = teori.getChordByName('Cmaj7');

/*
Gives us a chord object:
{
    name: 'Cmaj7',
    notes: ['C', 'E', 'G', 'B']
}
*/
```

