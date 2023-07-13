const express=require('express');
const cors=require('cors');
const dotenv=require('dotenv');
const jwt=require('jsonwebtoken');
const bcrypt=require('bcryptjs');
dotenv.config();
const {notFound,errorHandler}=require('./middleware/errorMiddleware')
const connectDB=require('./config/db');
const port = process.env.PORT || 3000;
const app = express();
connectDB();
app.use(express.static('view'));
app.use(cors());
app.use(express.json());


//route import form another file
const HomeRoutes = require('./routes/HomeRoute');
const ProductRoutes=require('./routes/ProductRoute');
const UserRoutes=require('./routes/UserRoute');

//All routes 

app.use('/', HomeRoutes);

app.use('/api/products',ProductRoutes);

app.use('/api/users',UserRoutes);


app.use(notFound);
app.use(errorHandler);

app.listen(port, () => {
  console.log(`Server running on port http://localhost:${port}/`);
});
