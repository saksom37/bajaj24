const express = require('express')
const app = express()
const PORT= 4032
const router = require('./routes/routes')
app.listen(PORT,()=>{
    console.log('Server Started at ',PORT);
})

app.use(express.json())
app.use(router)