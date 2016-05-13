angular.module('german-holidays', []).factory('germanHolidays', function () {

    function easterCalculationForYear(y) {
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

    function bubeCalculationForYear(year) {
        var nov23 = new Date(year, 10, 23);
        var shift = {0: -4, 1: -5, 2: -6, 3: -7, 4: -1, 5: -2, 6: -3};
        return new Date(nov23.valueOf()).setDate(nov23.getDate() + shift[nov23.getDay()]);
    }

    function holidayDefinitionsForYear(year) {

        var easter = easterCalculationForYear(year);
        
        function easterDependentDate(offset) {
            var date = new Date(easter.valueOf());
            date.setDate(easter.getDate() + offset);
            return date;
        }
        
        return [
            {
                name: 'Neujahrstag',
                date: new Date(year, 0, 1),
                states: ['BW', 'BY', 'BE', 'BB', 'HB', 'HH', 'HE', 'MV', 'NI', 'NW', 'RP', 'SL', 'SN', 'ST', 'SH', 'TH']
            },
            {
                name: 'Heilige drei Könige',
                date: new Date(year, 0, 6),
                states: ['BW', 'BY', 'ST']
            },
            {
                name: 'Karfreitag',
                date: easterDependentDate(-2),
                states: ['BW', 'BY', 'BE', 'BB', 'HB', 'HH', 'HE', 'MV', 'NI', 'NW', 'RP', 'SL', 'SN', 'ST', 'SH', 'TH']
            },
            {
                name: 'Ostersonntag',
                date: new Date(easter.valueOf()),
                states: ['BB']
            },
            {
                name: 'Ostermontag',
                date: easterDependentDate(+1),
                states: ['BW', 'BY', 'BE', 'BB', 'HB', 'HH', 'HE', 'MV', 'NI', 'NW', 'RP', 'SL', 'SN', 'ST', 'SH', 'TH']
            },
            {
                name: 'Tag der Arbeit',
                date: new Date(year, 4, 1),
                states: ['BW', 'BY', 'BE', 'BB', 'HB', 'HH', 'HE', 'MV', 'NI', 'NW', 'RP', 'SL', 'SN', 'ST', 'SH', 'TH']
            },
            {
                name: 'Christi Himmelfahrt',
                date: easterDependentDate(+39),
                states: ['BW', 'BY', 'BE', 'BB', 'HB', 'HH', 'HE', 'MV', 'NI', 'NW', 'RP', 'SL', 'SN', 'ST', 'SH', 'TH']
            },
            {
                name: 'Pfingstsonntag',
                date: easterDependentDate(+49),
                states: ['BB']
            },
            {
                name: 'Pfingstmontag',
                date: easterDependentDate(+50),
                states: ['BW', 'BY', 'BE', 'BB', 'HB', 'HH', 'HE', 'MV', 'NI', 'NW', 'RP', 'SL', 'SN', 'ST', 'SH', 'TH']
            },
            {
                name: 'Fronleichnam',
                date: easterDependentDate(+60),
                states: ['BW', 'BY', 'HE', 'NW', 'RP', 'SL']
            },
            {
                name: 'Tag der deutschen Einheit',
                date: new Date(year, 9, 3),
                states: ['BW', 'BY', 'BE', 'BB', 'HB', 'HH', 'HE', 'MV', 'NI', 'NW', 'RP', 'SL', 'SN', 'ST', 'SH', 'TH']
            },
            {
                name: 'Reformationstag',
                date: new Date(year, 9, 31),
                states: ['BB', 'MV', 'SN', 'ST', 'TH']
            },
            {
                name: 'Allerheiligen',
                date: new Date(year, 10, 1),
                states: ['BW', 'BY', 'NW', 'RP', 'SL']
            },
            {
                name: 'Buß- und Bettag',
                date: bubeCalculationForYear(year),
                states: ['SN']
            },
            {
                name: '1. Weihnachtsfeiertag',
                date: new Date(year, 11, 25),
                states: ['BW', 'BY', 'BE', 'BB', 'HB', 'HH', 'HE', 'MV', 'NI', 'NW', 'RP', 'SL', 'SN', 'ST', 'SH', 'TH']
            },
            {
                name: '2. Weihnachtsfeiertag',
                date: new Date(year, 11, 26),
                states: ['BW', 'BY', 'BE', 'BB', 'HB', 'HH', 'HE', 'MV', 'NI', 'NW', 'RP', 'SL', 'SN', 'ST', 'SH', 'TH']
            },
            {
                name: '500. Jahrestag der Reformation',
                date: new Date(2017, 9, 31),
                states: ['HE', 'NW', 'SL']
            }
        ]
    }

    return {
        holidayNameForDateAndState: function (date, state) {
            state = state.replace('DE-', '');
            var holidayDefinitions = holidayDefinitionsForYear(date.getFullYear());

            for (var i = 0; i < holidayDefinitions.length; i++) {
                if (holidayDefinitions[i].date.valueOf() == date.valueOf() && holidayDefinitions[i].states.indexOf(state) >= 0) {
                    return holidayDefinitions[i].name;
                }
            }

            return null;
        },
        isHolidayForDateAndState: function (date, state) {
            return this.holidayNameForDateAndState(date, state) !== null;
        },
        holidaysForYearAndState: function (year, state) {
            state = state.replace('DE-', '');

            var holidayDefinitions = holidayDefinitionsForYear(year);
            var holidays = [];

            for (var i = 0; i < holidayDefinitions.length; i++) {
                if (new Date(holidayDefinitions[i].date).getFullYear() == year && holidayDefinitions[i].states.indexOf(state) >= 0) {
                    holidays.push({
                        name: holidayDefinitions[i].name,
                        date: holidayDefinitions[i].date
                    });
                }
            }
            return holidays;
        }
    };
});
