import express from 'express';
import path from 'path';
import open from 'open';
import webpack from 'webpack';

const app = express();

app.get('/', function (req, res) {
  res.sendFile(path.resolve('./src/index.html'));
});
app.get('/dist/indexEntry.js', function (req, res) {
  res.sendFile(path.resolve('./dist/indexEntry.js'));
});


app.listen(3000, function (err) {
    if(err){
        console.error(err);
    }
    else{
        open('http://localhost:3000');
    }
})