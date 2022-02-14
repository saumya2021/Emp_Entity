const axios = require('axios')

function GetResignationDetails() {
    axios.get('http://localhost:8080/cg/resignation/1002')
    .then(response => console.log(response.data))
    .catch(error => console.log(error));
 }

module.exports = (GetResignationDetails)
