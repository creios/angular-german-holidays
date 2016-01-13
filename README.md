# angular-german-holidays

AngularJS module to calculate german holidays

Ported from [wtfuii/german-holiday](https://github.com/wtfuii/german-holiday)

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
}
```

### State identifier

Identifier  | State
----------- | -----------------------
BW          | Baden-Württemberg
BY          | Bayern
BE          | Berlin
BB          | Brandenburg
HB          | Bremen
HH          | Hamburg
HE          | Hessen
MV          | Mecklenburg-Vorpommern
NI          | Niedersachsen
NW          | Nordrhein-Westfalen
RP          | Rheinland-Pfalz
SL          | Saarland
SN          | Sachsen
ST          | Sachsen-Anhalt
SH          | Schleswig-Holstein
TH          | Thüringen

### Return value

`holidayCheck()` returns either the name of the holiday or false.
