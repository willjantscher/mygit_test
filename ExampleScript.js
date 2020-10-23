//to run this in VS Code, open new terminal, 
    //ensure the terminal location is the folder the file is saved in
        //if you need to change, CD/location        ex. C:\Users\willi\Desktop\SDI_Course
//type node <file name to run>

//may need to run 'npm install' to initialize


//console.log('can you see me?')
//return 'hello there'


//need node and node extensions and node functions loaded to run this!!!
const fetch = require('node-fetch');    //require this extension


//can look at modules loaded using ls node_modules
    //ls = list

fetch('https://api.github.com')
    .then(response => response.json())
    .then(data => console.log(data));   //this is like a promise!



//how to know which library, etc?
const async = require('async')  //need to require these functions/methods
const await = require('await')  //await is the name of the repository

async function fetchAsync () {    //async and await work together, async (need to download) before the function is declaring this function as asynchronous 
    let data = await (await fetch('https://api.github.com')).json();  //await (wait for the fetch), then wait to convert to .json before declaring variable
    return data;
}   //await pauses the entire async function when called - only need one await here then
    
//should use a try catch though
    //try await...await fetch...... catch()



fetchAsync()
    .then(data => console.log(data))
    .catch(reason => console.log(reason.message));   //.message reduces error to just the message part

//~/desktop/fetch
