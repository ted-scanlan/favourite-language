const boxen = require("boxen");


function sortLanguages(array, user) {
  let filterNull = array.filter(value => (Object.keys(value).length !== 0) || Object.keys(value) )

  let hash = createLangHash(filterNull)
  let values = delete1(hash)

  const boxenOptions = {
   padding: 1,
   margin: 1,
   borderStyle: "round",
   borderColor: "green",
   backgroundColor: "#555555"
 };
  
  let favLanguage = Object.keys(hash).find(key => hash[key] === Math.max(...values))

   const msgBox = boxen( `${user}'s favourite language is: ${favLanguage}`, boxenOptions );
   console.log(msgBox);


}

function createLangHash(filteredArray) {
  let sum = {}

  filteredArray.forEach(function (lang) {
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

module.exports = {
 sortLanguages
};
