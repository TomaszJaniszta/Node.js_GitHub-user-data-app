// display the name of the user and in option number of followers - function from module
const axios = require('axios');

function userInfo( user, urlUserInfo, followers){
    axios.get(urlUserInfo)
    .then(function (response) {
        let userName = response.data.name
        console.log("Github user name: " + userName)
                if(followers === true) {
                let userFollowers = response.data.followers
                console.log(`Github ${user} followers: ` + userFollowers);
                };
        }) 
    .catch(function (error) {
        console.log(`Check the entered user = ${user}. Error: `, error.message); 
        // canceling the rest of code because of user error
        return;
    }); 
};

 // function export
 module.exports = {
 userInfo: userInfo,
 }
