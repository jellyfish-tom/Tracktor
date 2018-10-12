import app from './App'

const port = process.env.PORT || 3000

app.listen(port, (err:  any) => {
  if (err) {
    return console.log(err)
  }

  return console.log(`Node server is listening on ${port}`)
})