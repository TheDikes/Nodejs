//CREATE FILES

//append
var fs = require('fs');

fs.appendFile('myfile1.text', 'Hello content!', function (err) {
    if (err) throw err;
    console.log('Saved!');
});


//open
var fs = require('fs');

fs.open('myfile2.txt', 'w', function (err, file) {
  if (err) throw err;
  console.log('Saved!');
});


//writefile
var fs = require('fs');

fs.writeFile('myfile3.txt', 'Hello content!', function (err) {
  if (err) throw err;
  console.log('Saved!');
});



//UPDATE FILES

//append
var fs = require('fs');

fs.appendFile('myfile1.txt', ' This is my text.', function (err) {
  if (err) throw err;
  console.log('Updated!');
});


//writefile
var fs = require('fs');

fs.writeFile('myfile3.txt', 'This is my text', function (err) {
  if (err) throw err;
  console.log('Replaced!');
});



//DELETE FILES
//unlink
var fs = require('fs');

fs.unlink('myfile2.txt', function (err) {
  if (err) throw err;
  console.log('File deleted!');
});


//RENAME FILES
//rename 
var fs = require('fs');

fs.rename('myfile1.txt', 'myrenamedfile.txt', function (err) {
  if (err) throw err;
  console.log('File Renamed!');
});