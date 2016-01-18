angular.module('german-holidays', []).factory('holidayCheck', function () {

    function easterCalculation(y) {
        //The date of Easter is computed by an algorithm found in the book of Meeus,
        //which is valid without exceptions for all years in the Gregorian Calendar
        //(from the year 1583 on)  Input: Year
        var a = y % 19;
        var b = Math.floor(y / 100);
        var c = y % 100;
        var d = Math.floor(b / 4);
        var e = b % 4;
        var f = Math.floor((b + 8) / 25);
        var g = Math.floor((b - f + 1) / 3);
        var h = (19 * a + b - d - g + 15) % 30;
        var i = Math.floor(c / 4);
        var k = c % 4;
        var l = (32 + 2 * e + 2 * i - h - k) % 7;
        var m = Math.floor((a + 11 * h + 22 * l) / 451);
        var n = Math.floor((h + l - 7 * m + 114) / 31);
        var p = (h + l - 7 * m + 114) % 31;
        p = Math.round(p + 1);
        return new Date(y, n - 1, p);
    }

    function holidayCheck(date) {

        var easter = easterCalculation(date.getFullYear());
        var holidays = [
            {
                name: 'Neujahrstag',
                date: new Date(date.getFullYear(), 0, 1)
            },
            {
                name: 'Karfreitag',
                date: new Date(easter.valueOf()).setDate(easter.getDate() - 2)
            },
            {
                name: 'Ostermontag',
                date: new Date(easter.valueOf()).setDate(easter.getDate() + 1)
            },
            {
                name: 'Tag der Arbeit',
                date: new Date(date.getFullYear(), 4, 1)
            },
            {
                name: 'Christi Himmelfahrt',
                date: new Date(easter.valueOf()).setDate(easter.getDate() + 39)
            },
            {
                name: 'Pfingsmontag',
                date: new Date(easter.valueOf()).setDate(easter.getDate() + 50)
            },
            {
                name: 'Fronleichnam',
                date: new Date(easter.valueOf()).setDate(easter.getDate() + 60)
            },
            {
                name: 'Tag der deutschen Einheit',
                date: new Date(date.getFullYear(), 9, 3)
            },
            {
                name: 'Allerheiligen',
                date: new Date(date.getFullYear(), 10, 1)
            },
            {
                name: '1. Weihnachtstag',
                date: new Date(date.getFullYear(), 11, 25)
            },
            {
                name: '2. Weihnachtstag',
                date: new Date(date.getFullYear(), 11, 26)
            }
        ];

        for (var i = 0; i < holidays.length; i++) {
            if (holidays[i].date.valueOf() == date.valueOf()) {
                return holidays[i].name;
            }
        }

        return false;
    }

    return holidayCheck;
});
