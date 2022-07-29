 // example of calling: node app.js octocat followers or node app.js octocat
 // node app.js tomaszjaniszta followers
 const process = require('process');
 // reading the own modules
 const user = require('./user');   
 const repositories = require('./repositories');   
 const weather = require('./weather');   

 let followers = false;
 let userGitHub = process.argv[2];

console.log('GitHub user: ' + process.argv[2])

 // checking calling parameters
 if (
   (process.argv[2] && !process.argv[3]) ||
   (process.argv[3] == 'followers' && !process.argv[4]) 
    ) {
     if (process.argv[3]){ followers = true}
    } else {
   console.log( 'Check the input parameters and try again. Application will quit now')
   console.log( 'Example of calling: node app.js octocat followers (followers is optional to display number of user followers)');
 // canceling the rest of code because of wrong parameters
 return;
 }

let urlUserInfo = `https://api.github.com/users/${userGitHub}`;
let urlUserRepo = `https://api.github.com/users/${userGitHub}/repos`; 

user.userInfo( userGitHub, urlUserInfo, followers );
repositories.repositories( userGitHub, urlUserInfo, urlUserRepo );
weather.weather( userGitHub, urlUserInfo );
