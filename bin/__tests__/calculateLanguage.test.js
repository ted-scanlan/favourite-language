const { filterEmpties } = require('../src/calculateLanguage');
const { sumOfLanguages } = require('../src/calculateLanguage');

let double = [ { Ruby: 6402 }, {}, {}, { Ruby: 1177, JavaScript: 937 }, {}, { Ruby: 278 } ]
let double2 = [ { Ruby: 57310, JavaScript: 11699 }, { Ruby: 58075, JavaScript: 2194 }, { Ruby: 6402 }, { Ruby: 1177, JavaScript: 937 } ]


test('should remove nulls from list of languages', () => {
  expect(filterEmpties(double)).toEqual(
    [ { Ruby: 6402 }, { Ruby: 1177, JavaScript: 937 }, { Ruby: 278 } ]
  )
})

test('should sum up languages in repo', () => {
  expect(sumOfLanguages(double2)).toEqual(
    {"JavaScript": 14830, "Ruby": 122964 }
  )

})
