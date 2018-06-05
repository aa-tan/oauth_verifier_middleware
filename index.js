const express = require('express');
const fs = require('fs');
const app = express();

app.get('/', (req, res) => {
  const verifier = req.query.oauth_verifier
  if (verifier == null){
    res.send("No verifier detected in URL")
  }
  else {
    fs.writeFile("./verifier", verifier, function (err){
      if (err){
	return console.log(err)	
      }
    })
    res.send("Verifier is set to:\n" + verifier);
  }
})

app.get('/:exception',(req,res) => {
  res.send("Seriously? " + req.params.exception + "? Get it together.")
})


app.listen(8080);

