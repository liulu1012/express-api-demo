let express = require('express')
let app = express()

app.get('192.168.0.138',(req,res)=>{
  res.json({comment:'hello world'})
})

app.listen(5000,(req,res)=>{
  console.log('running on port 5000')
})
