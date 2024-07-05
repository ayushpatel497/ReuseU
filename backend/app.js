const express= require('express');
const app = express();
const cors = require('cors');
const errorMiddleware = require('./middleware/error');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const fileUpload=require('express-fileupload')
app.use(express.json());
app.use(cookieParser());
app.use(fileUpload());
app.use(express.json({ limit: "5000mb" })); 
app.use(express.urlencoded({ limit: "5000mb", extended: true }));
app.use(cors({
    origin: 'http://localhost:3000'
  }));
// Routes imports ................
const user=require('./routes/userRoute')
const product=require("./routes/productRoute");
const itemRoute = require('./routes/lostnfound')
app.use("/api/v1",product);
app.use("/api/v1",user);
app.use("/api/v1",itemRoute);

// middleware for error 
app.use(errorMiddleware);
module.exports=app;