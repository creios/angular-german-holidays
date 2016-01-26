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

    function bubeCaluclation (date) {
        // calculates the "Buß- und Bettag"
        var nov23 = new Date(date.getFullYear(), 10, 23);
        nov23.setDate(nov23.getDate() - 1);
        while (true) {
            if (nov23.getDay() == 3) {
                return nov23
            } else {
                nov23.setDate(nov23.getDate() - 1)
            }
        }
    }

    function holidayCheck(date) {

        var easter = easterCalculation(date.getFullYear());
        var holidays = [
            {
                name: 'Neujahrstag',
                date: new Date(date.getFullYear(), 0, 1),
                states: ['BW', 'BY', 'BE', 'BB', 'HB', 'HH', 'HE', 'MV', 'NI', 'NW', 'RP', 'SL', 'SN', 'ST', 'SH', 'TH']
            },
            {
                name: 'Heilige drei Könige',
                date: new Date(date.getFullYear(), 0, 6),
                states: ['BW', 'BY', 'ST']
            },
            {
                name: 'Karfreitag',
                date: new Date(easter.valueOf()).setDate(easter.getDate() - 2),
                states: ['BW', 'BY', 'BE', 'BB', 'HB', 'HH', 'HE', 'MV', 'NI', 'NW', 'RP', 'SL', 'SN', 'ST', 'SH', 'TH']
            },
            {
                name: 'Ostersonntag',
                date: new Date(easter.valueOf()),
                states: ['BB']
            },
            {
                name: 'Ostermontag',
                date: new Date(easter.valueOf()).setDate(easter.getDate() + 1),
                states: ['BW', 'BY', 'BE', 'BB', 'HB', 'HH', 'HE', 'MV', 'NI', 'NW', 'RP', 'SL', 'SN', 'ST', 'SH', 'TH']
            },
            {
                name: 'Tag der Arbeit',
                date: new Date(date.getFullYear(), 4, 1),
                states: ['BW', 'BY', 'BE', 'BB', 'HB', 'HH', 'HE', 'MV', 'NI', 'NW', 'RP', 'SL', 'SN', 'ST', 'SH', 'TH']
            },
            {
                name: 'Christi Himmelfahrt',
                date: new Date(easter.valueOf()).setDate(easter.getDate() + 39),
                states: ['BW', 'BY', 'BE', 'BB', 'HB', 'HH', 'HE', 'MV', 'NI', 'NW', 'RP', 'SL', 'SN', 'ST', 'SH', 'TH']
            },
            {
                name: 'Pfingstsonntag',
                date: new Date(easter.valueOf()).setDate(easter.getDate() + 50),
                states: ['BB']
            },
            {
                name: 'Pfingstmontag',
                date: new Date(easter.valueOf()).setDate(easter.getDate() + 50),
                states: ['BW', 'BY', 'BE', 'BB', 'HB', 'HH', 'HE', 'MV', 'NI', 'NW', 'RP', 'SL', 'SN', 'ST', 'SH', 'TH']
            },
            {
                name: 'Fronleichnam',
                date: new Date(easter.valueOf()).setDate(easter.getDate() + 60),
                states: ['BW', 'BY', 'HE', 'NW', 'RP', 'SL']
            },
            {
                name: 'Tag der deutschen Einheit',
                date: new Date(date.getFullYear(), 9, 3),
                states: ['BW', 'BY', 'BE', 'BB', 'HB', 'HH', 'HE', 'MV', 'NI', 'NW', 'RP', 'SL', 'SN', 'ST', 'SH', 'TH']
            },
            {
                name: 'Reformationstag',
                date: new Date(date.getFullYear(), 9, 31),
                states: ['BB', 'MV', 'SN', 'ST', 'TH']
            },
            {
                name: 'Allerheiligen',
                date: new Date(date.getFullYear(), 10, 1),
                states: ['BW', 'BY', 'NW', 'RP', 'SL']
            },
            {
                name: 'Buß- und Bettag',
                date: bubeCaluclation(date),
                states: ['SN']
            },
            {
                name: '1. Weihnachtsfeiertag',
                date: new Date(date.getFullYear(), 11, 25),
                states: ['BW', 'BY', 'BE', 'BB', 'HB', 'HH', 'HE', 'MV', 'NI', 'NW', 'RP', 'SL', 'SN', 'ST', 'SH', 'TH']
            },
            {
                name: '2. Weihnachtsfeiertag',
                date: new Date(date.getFullYear(), 11, 26),
                states: ['BW', 'BY', 'BE', 'BB', 'HB', 'HH', 'HE', 'MV', 'NI', 'NW', 'RP', 'SL', 'SN', 'ST', 'SH', 'TH']
            },
            {
                name: '500. Jahrestag der Reformation',
                date: new Date(2017, 9, 31),
                states: ['HE', 'NW', 'SL']
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
