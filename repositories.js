// display number and names of user repositories  - function from module
const axios = require('axios');

// calllback function, displaing names of the repositories
function userRepoNames(urlUserRepo, user) {
        axios.get(urlUserRepo)
          .then(function (response) {
            let dataRepo = response
            //console.log(response)
            let repositoriesNames = [];
                for (let i = 0; i < dataRepo.data.length; i += 1) {
                  repositoriesNames.push(dataRepo.data[i].name);
                };
            console.log(`Github ${user} public repositories: ` + repositoriesNames);
            })
        .catch(function (error) {
                console.log(`Check the error connected to ${user} repositories names: `, error.message); 
        });
    };

function repositories( user, urlUserInfo, urlUserRepo ) {
    axios.get(urlUserInfo)
    .then(function (response) {
        let userRepo = response.data.public_repos
        console.log(`Github ${user} public repositories: ` + userRepo);
        //callback function
        userRepoNames(urlUserRepo, user,  );        
    })
    .catch(function (error) {
        console.log(`Check the error connected to ${user} repositories: `, error.message); 
    });
};

// function export
module.exports = {
repositories: repositories,
}
