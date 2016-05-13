describe("GermanHolidays", function () {
    beforeEach(module('german-holidays'));

    it("should find all holidays in 2016 in NW", inject(function (holidayCheck) {
        expect(holidayCheck(new Date(2016, 0, 1), 'NW')).toBe('Neujahrstag');
        expect(holidayCheck(new Date(2016, 2, 25), 'NW')).toBe('Karfreitag');
        expect(holidayCheck(new Date(2016, 2, 28), 'NW')).toBe('Ostermontag');
        expect(holidayCheck(new Date(2016, 4, 1), 'NW')).toBe('Tag der Arbeit');
        expect(holidayCheck(new Date(2016, 4, 5), 'NW')).toBe('Christi Himmelfahrt');
        expect(holidayCheck(new Date(2016, 4, 16), 'NW')).toBe('Pfingstmontag');
        expect(holidayCheck(new Date(2016, 4, 26), 'NW')).toBe('Fronleichnam');
        expect(holidayCheck(new Date(2016, 9, 3), 'NW')).toBe('Tag der deutschen Einheit');
        expect(holidayCheck(new Date(2016, 10, 1), 'NW')).toBe('Allerheiligen');
        expect(holidayCheck(new Date(2016, 11, 25), 'NW')).toBe('1. Weihnachtsfeiertag');
        expect(holidayCheck(new Date(2016, 11, 26), 'NW')).toBe('2. Weihnachtsfeiertag');
    }));

    it("should find all holidays in 2016 in NW using ISO 3166:DE state codes", inject(function (holidayCheck) {
        expect(holidayCheck(new Date(2016, 0, 1), 'DE-NW')).toBe('Neujahrstag');
        expect(holidayCheck(new Date(2016, 2, 25), 'DE-NW')).toBe('Karfreitag');
        expect(holidayCheck(new Date(2016, 2, 28), 'DE-NW')).toBe('Ostermontag');
        expect(holidayCheck(new Date(2016, 4, 1), 'DE-NW')).toBe('Tag der Arbeit');
        expect(holidayCheck(new Date(2016, 4, 5), 'DE-NW')).toBe('Christi Himmelfahrt');
        expect(holidayCheck(new Date(2016, 4, 16), 'DE-NW')).toBe('Pfingstmontag');
        expect(holidayCheck(new Date(2016, 4, 26), 'DE-NW')).toBe('Fronleichnam');
        expect(holidayCheck(new Date(2016, 9, 3), 'DE-NW')).toBe('Tag der deutschen Einheit');
        expect(holidayCheck(new Date(2016, 10, 1), 'DE-NW')).toBe('Allerheiligen');
        expect(holidayCheck(new Date(2016, 11, 25), 'DE-NW')).toBe('1. Weihnachtsfeiertag');
        expect(holidayCheck(new Date(2016, 11, 26), 'DE-NW')).toBe('2. Weihnachtsfeiertag');
    }));

    it("complete round of 'Buß- und Bettag' in SN", inject(function (holidayCheck) {
        expect(holidayCheck(new Date(2016, 10, 16), 'SN')).toBe('Buß- und Bettag');
        expect(holidayCheck(new Date(2017, 10, 22), 'SN')).toBe('Buß- und Bettag');
        expect(holidayCheck(new Date(2018, 10, 21), 'SN')).toBe('Buß- und Bettag');
        expect(holidayCheck(new Date(2019, 10, 20), 'SN')).toBe('Buß- und Bettag');
        expect(holidayCheck(new Date(2020, 10, 18), 'SN')).toBe('Buß- und Bettag');
        expect(holidayCheck(new Date(2021, 10, 17), 'SN')).toBe('Buß- und Bettag');
        expect(holidayCheck(new Date(2025, 10, 19), 'SN')).toBe('Buß- und Bettag');
        expect(holidayCheck(new Date(2025, 10, 19))).toBe(false);
    }));

    it("should not find holidays on normal days", inject(function (holidayCheck) {
        expect(holidayCheck(new Date(2016, 0, 2), 'NW')).toBe(false);
        expect(holidayCheck(new Date(2016, 11, 24), 'NW')).toBe(false);
        expect(holidayCheck(new Date(2016, 11, 31), 'NW')).toBe(false);
    }));

    it("should find the '500. Jahrestag der Reformation' in 2017", inject(function (holidayCheck) {
        expect(holidayCheck(new Date(2016, 9, 31), 'NW')).toBe(false);
        expect(holidayCheck(new Date(2017, 9, 31), 'NW')).toBe('500. Jahrestag der Reformation');
        expect(holidayCheck(new Date(2018, 9, 31), 'NW')).toBe(false);
    }));

    it("should find the correct number of holidays per year", inject(function (holidayCheck) {
        for (var year = 2010; year <= 2020; year++) {
            var day = new Date(year, 0, 1);
            var count = 0;
            while (day.getFullYear() == year) {
                if (holidayCheck(day, 'NW')) {
                    count++;
                }
                day.setDate(day.getDate() + 1);
            }
            expect(count).toBe(year == 2017 ? 12 : 11);
        }
    }));
    
    it("should get holidays array", inject(function (getHolidays) {
        var holidays=getHolidays(2016, 'NW');
        expect(holidays.length).toBe(11);
        holidays=getHolidays(2017, 'NW');
        expect(holidays.length).toBe(12);
        holidays=getHolidays(2015, 'NW');
        expect(holidays.length).toBe(11);
        
    }));

});
