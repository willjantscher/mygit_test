// Use fetch to call the API at https://jsonplaceholder.typicode.com/.
// GET a list of posts for the user with a userId of 2
// Send a POST to each of the posts that were returned for that user and update the title of those posts as Archived

const fetch = require('node-fetch');  
const async = require('async') 
const await = require('await')  

var usersChosen = []//we will store the users with our desired ids here

async function fetchAsync () 
    {    
        //pull the data from the site
        let data = await (await fetch('https://jsonplaceholder.typicode.com/todos')).json(); //take in data as .json

        //create array of desired users
        var desiredUsers = (data.filter(x => x.userId === 2));  //select only user with ID = 2

        //update the users title to 'Archived'
        desiredUsers.forEach(element => {
            element.title = 'Archived';
        });
        //console.log(desiredUsers);
        //update the users at the site using 
        fetch('https://jsonplaceholder.typicode.com/todos',
        {
            method: 'PATCH',    //update resources
            headers: {
                'Content-Type': 'application/json'  //data type
            },
            body: JSON.stringify(desiredUsers),  //convert JSON to 
        }
        )
        //pass out the updated array of desired users
        //console.log(desiredUsers);
        return desiredUsers;
        //return data;
    } 

fetchAsync()
    .then(data => console.log(data))  
    .catch(reason => console.log(reason.message)); 






//another way

//     var fetch = require('node-fetch')
// fetch('https://jsonplaceholder.typicode.com/users/2/posts')
// .then(m=>m.json())
// .then(m=>{
//   //console.log(m)
//   m.forEach(p=>{
//     p.title="(Archived)"+p.title;
//     fetch('https://jsonplaceholder.typicode.com/posts/'+p.id, {
//           method: 'POST',
//           headers: {
//             'Content-Type': 'application/json',
//           },
//           body: JSON.stringify(p),
//     }).then(v=>v.text()).then(v=>console.log(`updated post ${p.id}: ${v}`))
//       .catch(e=>console.log(`post error: ${e}`))
//   })
// })

