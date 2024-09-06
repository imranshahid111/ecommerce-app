import express from 'express'
import colors from'colors'
import dotenv from 'dotenv'
import connectDB from './config/db.js';
import morgan from 'morgan';
import authRoutes from './routes/authRoute.js'

dotenv.config();

connectDB(); 


const app = express()

app.use(express.json())
app.use(morgan('dev'))
app.use('/api/v1/auth',authRoutes);


app.get('/', (req , res)=>{
    res.send("<h1>Wellcome To Ecommerce App</h1>")
})

const PORT = process.env.PORT || 8080;

app.listen(PORT,()=>{
    console.log(`Server Running on ${PORT}`.bgCyan.white);
});