const express=require('express')
const cors=require('cors')
const dotenv=require('dotenv')
const jwt=require('jsonwebtoken')
const bcrypt=require('bcryptjs')
const app = express();
dotenv.config()

app.use(express.static('view'));
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended:false}))




const HomeRoutes = require('./routes/HomeRoute');
app.use('/', HomeRoutes);
const ApiRoutes=require('./routes/ApiRoute')
app.use('/api',ApiRoutes)
const getAllRoutes=require('./routes/GetallRoute')
app.use('/getall',getAllRoutes)



const port = 3000;
app.listen(port, () => {
  console.log(`Server running on port http://localhost:${port}/`);
});
