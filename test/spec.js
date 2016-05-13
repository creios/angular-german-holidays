describe("GermanHolidays", function () {
    beforeEach(module('german-holidays'));

    it("should find all holidays in 2016 in NW", inject(function (germanHolidays) {
        expect(germanHolidays.holidayNameForDateAndState(new Date(2016, 0, 1), 'NW')).toBe('Neujahrstag');
        expect(germanHolidays.holidayNameForDateAndState(new Date(2016, 2, 25), 'NW')).toBe('Karfreitag');
        expect(germanHolidays.holidayNameForDateAndState(new Date(2016, 2, 28), 'NW')).toBe('Ostermontag');
        expect(germanHolidays.holidayNameForDateAndState(new Date(2016, 4, 1), 'NW')).toBe('Tag der Arbeit');
        expect(germanHolidays.holidayNameForDateAndState(new Date(2016, 4, 5), 'NW')).toBe('Christi Himmelfahrt');
        expect(germanHolidays.holidayNameForDateAndState(new Date(2016, 4, 16), 'NW')).toBe('Pfingstmontag');
        expect(germanHolidays.holidayNameForDateAndState(new Date(2016, 4, 26), 'NW')).toBe('Fronleichnam');
        expect(germanHolidays.holidayNameForDateAndState(new Date(2016, 9, 3), 'NW')).toBe('Tag der deutschen Einheit');
        expect(germanHolidays.holidayNameForDateAndState(new Date(2016, 10, 1), 'NW')).toBe('Allerheiligen');
        expect(germanHolidays.holidayNameForDateAndState(new Date(2016, 11, 25), 'NW')).toBe('1. Weihnachtsfeiertag');
        expect(germanHolidays.holidayNameForDateAndState(new Date(2016, 11, 26), 'NW')).toBe('2. Weihnachtsfeiertag');
    }));

    it("should find all holidays in 2016 in NW using ISO 3166:DE state codes", inject(function (germanHolidays) {
        expect(germanHolidays.holidayNameForDateAndState(new Date(2016, 0, 1), 'DE-NW')).toBe('Neujahrstag');
        expect(germanHolidays.holidayNameForDateAndState(new Date(2016, 2, 25), 'DE-NW')).toBe('Karfreitag');
        expect(germanHolidays.holidayNameForDateAndState(new Date(2016, 2, 28), 'DE-NW')).toBe('Ostermontag');
        expect(germanHolidays.holidayNameForDateAndState(new Date(2016, 4, 1), 'DE-NW')).toBe('Tag der Arbeit');
        expect(germanHolidays.holidayNameForDateAndState(new Date(2016, 4, 5), 'DE-NW')).toBe('Christi Himmelfahrt');
        expect(germanHolidays.holidayNameForDateAndState(new Date(2016, 4, 16), 'DE-NW')).toBe('Pfingstmontag');
        expect(germanHolidays.holidayNameForDateAndState(new Date(2016, 4, 26), 'DE-NW')).toBe('Fronleichnam');
        expect(germanHolidays.holidayNameForDateAndState(new Date(2016, 9, 3), 'DE-NW')).toBe('Tag der deutschen Einheit');
        expect(germanHolidays.holidayNameForDateAndState(new Date(2016, 10, 1), 'DE-NW')).toBe('Allerheiligen');
        expect(germanHolidays.holidayNameForDateAndState(new Date(2016, 11, 25), 'DE-NW')).toBe('1. Weihnachtsfeiertag');
        expect(germanHolidays.holidayNameForDateAndState(new Date(2016, 11, 26), 'DE-NW')).toBe('2. Weihnachtsfeiertag');
    }));

    it("complete round of 'Buß- und Bettag' in SN", inject(function (germanHolidays) {
        expect(germanHolidays.holidayNameForDateAndState(new Date(2016, 10, 16), 'SN')).toBe('Buß- und Bettag');
        expect(germanHolidays.holidayNameForDateAndState(new Date(2017, 10, 22), 'SN')).toBe('Buß- und Bettag');
        expect(germanHolidays.holidayNameForDateAndState(new Date(2018, 10, 21), 'SN')).toBe('Buß- und Bettag');
        expect(germanHolidays.holidayNameForDateAndState(new Date(2019, 10, 20), 'SN')).toBe('Buß- und Bettag');
        expect(germanHolidays.holidayNameForDateAndState(new Date(2020, 10, 18), 'SN')).toBe('Buß- und Bettag');
        expect(germanHolidays.holidayNameForDateAndState(new Date(2021, 10, 17), 'SN')).toBe('Buß- und Bettag');
        expect(germanHolidays.holidayNameForDateAndState(new Date(2025, 10, 19), 'SN')).toBe('Buß- und Bettag');
        expect(germanHolidays.holidayNameForDateAndState(new Date(2025, 10, 19), 'NW')).toBe(null);
    }));

    it("should not find holidays on normal days", inject(function (germanHolidays) {
        expect(germanHolidays.holidayNameForDateAndState(new Date(2016, 0, 2), 'NW')).toBe(null);
        expect(germanHolidays.holidayNameForDateAndState(new Date(2016, 11, 24), 'NW')).toBe(null);
        expect(germanHolidays.holidayNameForDateAndState(new Date(2016, 11, 31), 'NW')).toBe(null);
    }));

    it("should find the '500. Jahrestag der Reformation' in 2017", inject(function (germanHolidays) {
        expect(germanHolidays.holidayNameForDateAndState(new Date(2016, 9, 31), 'NW')).toBe(null);
        expect(germanHolidays.holidayNameForDateAndState(new Date(2017, 9, 31), 'NW')).toBe('500. Jahrestag der Reformation');
        expect(germanHolidays.holidayNameForDateAndState(new Date(2018, 9, 31), 'NW')).toBe(null);
    }));

    it("should find the correct number of holidays per year", inject(function (germanHolidays) {
        for (var year = 2010; year <= 2020; year++) {
            var day = new Date(year, 0, 1);
            var count = 0;
            while (day.getFullYear() == year) {
                if (germanHolidays.isHolidayForDateAndState(day, 'NW')) {
                    count++;
                }
                day.setDate(day.getDate() + 1);
            }
            expect(count).toBe(year == 2017 ? 12 : 11);
        }
    }));

    it("should get the array of all holidays in 2016", inject(function (germanHolidays) {
        expect(JSON.stringify(germanHolidays.holidaysForYearAndState(2016, 'NW'))).toBe(JSON.stringify([
            {'name': 'Neujahrstag', 'date': new Date(2016, 0, 1)},
            {'name': 'Karfreitag', 'date': new Date(2016, 2, 25)},
            {'name': 'Ostermontag', 'date': new Date(2016, 2, 28)},
            {'name': 'Tag der Arbeit', 'date': new Date(2016, 4, 1)},
            {'name': 'Christi Himmelfahrt', 'date': new Date(2016, 4, 5)},
            {'name': 'Pfingstmontag', 'date': new Date(2016, 4, 16)},
            {'name': 'Fronleichnam', 'date': new Date(2016, 4, 26)},
            {'name': 'Tag der deutschen Einheit', 'date': new Date(2016, 9, 3)},
            {'name': 'Allerheiligen', 'date': new Date(2016, 10, 1)},
            {'name': '1. Weihnachtsfeiertag', 'date': new Date(2016, 11, 25)},
            {'name': '2. Weihnachtsfeiertag', 'date': new Date(2016, 11, 26)}
        ]));
    }));
});
