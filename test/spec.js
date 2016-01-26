describe("GermanHolidays", function() {
    beforeEach(module('german-holidays'));

    it("should find all holidays in 2016", inject(function (holidayCheck) {
        expect(holidayCheck(new Date(2016, 0, 1))).toBe('Neujahrstag');
        expect(holidayCheck(new Date(2016, 2, 25))).toBe('Karfreitag');
        expect(holidayCheck(new Date(2016, 2, 28))).toBe('Ostermontag');
        expect(holidayCheck(new Date(2016, 4, 1))).toBe('Tag der Arbeit');
        expect(holidayCheck(new Date(2016, 4, 5))).toBe('Christi Himmelfahrt');
        expect(holidayCheck(new Date(2016, 4, 16))).toBe('Pfingsmontag');
        expect(holidayCheck(new Date(2016, 4, 26))).toBe('Fronleichnam');
        expect(holidayCheck(new Date(2016, 9, 3))).toBe('Tag der deutschen Einheit');
        expect(holidayCheck(new Date(2016, 10, 1))).toBe('Allerheiligen');
        expect(holidayCheck(new Date(2016, 11, 25))).toBe('1. Weihnachtsfeiertag');
        expect(holidayCheck(new Date(2016, 11, 26))).toBe('2. Weihnachtsfeiertag');
    }));

    it("should not find holidays on normal days", inject(function (holidayCheck) {
        expect(holidayCheck(new Date(2016, 0, 2))).toBe(false);
        expect(holidayCheck(new Date(2016, 2, 27))).toBe(false);
        expect(holidayCheck(new Date(2016, 11, 24))).toBe(false);
        expect(holidayCheck(new Date(2016, 11, 31))).toBe(false);
    }));

    it("should find the '500. Jahrestag der Reformation' in 2017", inject(function (holidayCheck) {
        expect(holidayCheck(new Date(2016, 9, 31))).toBe(false);
        expect(holidayCheck(new Date(2017, 9, 31))).toBe('500. Jahrestag der Reformation');
        expect(holidayCheck(new Date(2018, 9, 31))).toBe(false);
    }));

    it("should find the correct number of holidays per year", inject(function (holidayCheck) {
        for (var year = 2010; year <= 2020; year++) {
            var day = new Date(year, 0, 1);
            var count = 0;
            while (day.getFullYear() == year) {
                if (holidayCheck(day)) {
                    count++;
                }
                day.setDate(day.getDate() + 1);
            }
            expect(count).toBe(year == 2017 ? 12 : 11);
        }
    }));
});
