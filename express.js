
//external module
const express = require('express');

const app = express();

//middleware
app.use("/",(req,res,next) => {
    console.log("came in first middleware",req.url,req.method);
   // res.send("<h1>Welcome to Express</h1>"); 
    next();//cannot call next() after res.send() because it ends the response, so next() will not be called. If you want to call next(), you should not send a response in this middleware.
});
app.use("/submit-details", (req,res,next) => {
    console.log("came in second middleware",req.url,req.method);
    res.send("<h1>Welcome to Express js submit details page</h1>");
});




    const PORT = 3008;


app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});