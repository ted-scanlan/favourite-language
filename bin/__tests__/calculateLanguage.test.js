const { filterEmpties } = require('../src/calculateLanguage');
const { sumOfLanguages } = require('../src/calculateLanguage');
const { favLang } = require('../src/calculateLanguage');


let double = [ { Ruby: 6402 }, {}, {}, { Ruby: 1177, JavaScript: 937 }, {}, { Ruby: 278 } ]
let double2 = [ { Ruby: 57310, JavaScript: 11699 }, { Ruby: 58075, JavaScript: 2194 }, { Ruby: 6402 }, { Ruby: 1177, JavaScript: 937 } ]
let values = [ 293316, 812474, 844 ]
let languages = { "JavaScript": 293316, "Ruby": 812474, "Python": 844 }

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

test('should find language with the highest number of bytes', () => {
  expect(favLang(values, languages)).toEqual("Ruby")
})
