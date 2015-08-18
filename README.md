# teori
A music theory Javascript library

## Project Status
This is proof of concept stuff, not to be used for anything, by anyone, ever.

## Example Usage

```javascript
var teori = require('./teori');
```

### Chords

Discover chords from arrays of pitches:

```javascript
var chord = teori.getChordByPitches(['C4', 'E4', 'G4', 'B4']);

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
var chord = teori.getChordByName('Gm');

/*
Gives us a chord object:
{
    name: 'Gm',
    notes: ['G', 'Bb', 'D']
}
*/
```

