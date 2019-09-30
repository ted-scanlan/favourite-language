

function filterEmpties(array) {
  // console.log(array);
let filterNull = array.filter(value => Object.keys(value).length !== 0)
return filterNull
}




module.exports = {
 filterEmpties

};
