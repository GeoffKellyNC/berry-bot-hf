import axios from 'axios';


export const started = () =>  {
    return axios.get("https://6296b12957b625860611e8c6.mockapi.io/running")
    .then(function (res) {
        console.log('Started Res: ', res.data);
        return res.data.value;
        }
    )
    .catch(err => console.error(err))
}
