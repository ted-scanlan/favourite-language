const { filterEmpties } = require('../src/calculateLanguage');

let double = [ { Ruby: 6402 }, {}, {}, { Ruby: 1177, JavaScript: 937 }, {}, { Ruby: 278 } ]

test('should remove nulls from list of languages', () => {
  expect(filterEmpties(double)).toEqual(
    [ { Ruby: 6402 }, { Ruby: 1177, JavaScript: 937 }, { Ruby: 278 } ]
  )
})
