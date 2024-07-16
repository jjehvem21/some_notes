const axios = require('axios')

const fetchData = async () => {
  try {
    const res = await axios.get('http://localhost:3000/api/hello')
    console.log(res.data)
    return res.data
  } catch (e) {}
}

module.exports = fetchData;
