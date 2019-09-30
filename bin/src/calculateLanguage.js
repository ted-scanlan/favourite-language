

function filterEmpties(array) {
  // console.log(array);
let filterNull = array.filter(value => Object.keys(value).length !== 0)
return filterNull
}

function sumOfLanguages(array) {

  let sum = {}

  array.forEach(function (lang) {
    Object.keys(lang).forEach(function (key) {
      if (sum[key]) {
        sum[key] += lang[key];
      } else {
        sum[key] = lang[key];
      }
    })

  })
  return sum
}


module.exports = {
 filterEmpties,
 sumOfLanguages

};
