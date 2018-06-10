let lotion = require('lotion');

let app = lotion({
  initialState: {
    count: 0
  }
})

let stateFunction = (state, tx) => {
  if (state.count === tx.nonce)
  {
    state.count++
  }
}

app.use(stateFunction); // State Function is deterministic to allow consensus
app.listen(3000); // Allows the user to query the state of the blockchain on port 3000
