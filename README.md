# angular-german-holidays

[![Build Status](https://api.travis-ci.org/creios/angular-german-holidays.svg?branch=master)](https://travis-ci.org/creios/angular-german-holidays)

AngularJS module to calculate German holidays in North Rhine-Westphalia

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
    console.log(holidayCheck(new Date(2016, 0, 1))); // Neujahrstag
}
```

### Return value

`holidayCheck()` returns either the name of the holiday or false.

---

Inspired by [wtfuii/german-holiday](https://github.com/wtfuii/german-holiday)
