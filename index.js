const express=require('express');
const cors=require('cors');
const dotenv=require('dotenv');
const jwt=require('jsonwebtoken');
const bcrypt=require('bcryptjs');
dotenv.config();
const connectDB=require('./config/db');
const port = process.env.PORT || 3000;
const app = express();
connectDB();
app.use(express.static('view'));
app.use(cors());
app.use(express.json());


const HomeRoutes = require('./routes/HomeRoute');
app.use('/', HomeRoutes);
const ProductRoutes=require('./routes/ProductRoute')
app.use('/api/products',ProductRoutes)




app.listen(port, () => {
  console.log(`Server running on port http://localhost:${port}/`);
});
