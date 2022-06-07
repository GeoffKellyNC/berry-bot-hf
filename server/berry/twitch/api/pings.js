const axios = require('axios');


const getPings = () =>  {
    axios.get(PINGS_URL)
    .then(res => {
        pings = res.data;
        return pings.length;
    })
    .catch(err => console.error(err) )
}

const addPing = (userName) => {
return axios.post(PINGS_URL, {
    user: userName
})
.then(res => {
    const pings = res.data;
    return pings;
}
)
.catch(err => console.error(err) )
}


module.exports = {
    getPings,
    addPing
}