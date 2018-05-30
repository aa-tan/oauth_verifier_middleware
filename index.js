const express = require('express');
const app = express();


app.get('/', (req, res) => {
  const verifier = req.query.oauth_verifier
  if (verifier == null){
    res.send("No verifier detected in URL")
  }
  else {
    res.send("Verifier is set to:\n" + verifier);
  }
})

app.get('/:exception',(req,res) => {
  res.send("Seriously? " + req.params.exception + "? Get it together.")
})


app.listen(8080);

