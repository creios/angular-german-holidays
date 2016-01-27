# angular-german-holidays

[![Build Status](https://api.travis-ci.org/creios/angular-german-holidays.svg?branch=master)](https://travis-ci.org/creios/angular-german-holidays)
[![Coverage Status](https://coveralls.io/repos/github/creios/angular-german-holidays/badge.svg?branch=master)](https://coveralls.io/github/creios/angular-german-holidays?branch=master)

AngularJS module to calculate German holidays

## Installation

```sh
$ bower install angular-german-holidays
```
## Usage

### Require the javascript file

```html
<script src="bower_components/angular-german-holidays/src/german-holidays.js"></script>
```

### Register the angular module

```js
angular.module('myApp', ['german-holidays']).controller('home', function (holidayCheck) {
    console.log(holidayCheck(new Date(2016, 0, 1), 'NW')); // Neujahrstag
});
```

Call the ```holidayCheck``` function and pass two arguments.
* First argument: A JavaScript Date Object.
* Second argument: The short form of a [german states](#states) as string. If undefined, 'NW' will be used.

`holidayCheck()` returns either the name of the [holiday](#holidays) or false.

## Holidays 

[Overview of german holidays](https://de.wikipedia.org/wiki/Gesetzliche_Feiertage_in_Deutschland#.C3.9Cbersicht_aller_gesetzlichen_Feiertage)

Only holidays admitted in the whole state were taken over. 

## States 

Additionally to the two-letter codes listed below, the codes defined in [ISO 3166-2:DE](https://de.wikipedia.org/wiki/ISO_3166-2:DE) (using the 'DE-' prefix) are also allowed:

| code | state                  |
| ---- | ---------------------- |
| BW   | Baden-Württemberg      |
| BY   | Bayern                 |
| BE   | Berlin                 |
| BB   | Brandenburg            |
| HB   | Bremen                 |
| HH   | Hamburg                |
| HE   | Hessen                 |
| MV   | Mecklenburg-Vorpommern |
| NI   | Niedersachsen          |
| NW   | Nordrhein-Westfalen    |
| RP   | Rheinland-Pfalz        |
| SL   | Saarland               |
| SN   | Sachsen                |
| ST   | Sachsen-Anhalt         |
| SH   | Schleswig-Holstein     |
| TH   | Thüringen              |

---

Inspired by [wtfuii/german-holiday](https://github.com/wtfuii/german-holiday)
