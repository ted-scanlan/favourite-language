

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

function delete1(languages) {

  let values = []

  Object.keys(languages).forEach(function (key) {
    if(key === 'HTML' || key === 'CSS') {
      delete languages[key]
    }
    else {
      values.push(languages[key])
    }

  })
  return values
  
}

function favLang(values, languages) {

  result = Object.keys(languages).find(key => languages[key] === Math.max(...values));
  return result


}


module.exports = {
  filterEmpties,
  sumOfLanguages,
  delete1,
  favLang

};
