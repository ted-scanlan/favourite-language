

const fetchUser = async (username, token) => {

  try {
    let res = await axios.get(`http://api.github.com/users/${username}/repos`, {
      headers: {
        Authorization: 'Bearer ' + token
      }
    })
    return res.data
  }
  catch (err) {
    console.error(err);
  }
}
module.exports = {
     fetchUser
   };
