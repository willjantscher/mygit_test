//PS C:\Users\willi\Desktop\SDI_Course\fileIOpractice> 
//location in terminal window
//CD/paste the location of the files


const fs = require('fs');
//required to use file IO, makes file IO API methods/cmnds available for this script
//fs is file system (fs module) - inside require needs to be fs as this is specific


// // WRITING TO A FILE//
let lyrics = 'Here are some song lyrics! OooOOoooOooo!';

let syncLyrics = 'Here are some other lyrics! Oooooo!'

//write to a new file named 2pac.txt async
fs.writeFile('lyrics.txt', lyrics, (err) => {   //this function takes (file to write to, what to put in, err?)
    // throws an error, you could also catch it here
    if (err) throw err;

    // success case, the file was saved
    console.log('Lyric saved!');
});

// // write to a new file sync 
// fs.writeFileSync('lyrics.txt', syncLyrics, (err) => {
//     // throws an error, you could also catch it here
//     if (err) throw err;
// });
//would prevent next thing from running until this is finished


// // ADDING TO A FILE'S CONTENTS async/// 

// fs.appendFile('lyrics.txt', '\nADDING SOME MORE STUFF HERE!', (err) => {
//     if (err) throw err;
//     console.log('The lyrics were updated!');
// });
// //


// // READING A FILE async/// 

// fs.readFile(lyrics.txt, function (err, data) {
//     if (err) {
//        return console.error(err);
//     }
//     console.log("Asynchronous read: " + data.toString());
//  });


//  // RENAME A FILE async/// 

//  fs.rename(lyrics.txt, 'newNameForFile.txt', (err) => {
//     if (err) throw err;
//     console.log('Rename complete!');
//   });



  /// DELETING A FILE //// 

//   fs.unlink('newNameForFile.txt', (err) => {
//     if (err) throw err;
//     console.log('lyrics.txt was deleted');
//   });



