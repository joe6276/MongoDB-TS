import express from 'express'
import dotenv from 'dotenv'
import routes from './Routes/product'
import connectDb from './config/config'
dotenv.config( )
connectDb()
const app= express()

app.use(express.json())
app.use('/books', routes)
app.listen(process.env.PORT, ()=>{
    console.log(`Listening to :${process.env.PORT} `);
    
})

