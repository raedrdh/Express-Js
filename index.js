const  express = require('express')
const app = express()

// middelware import and use
const close = require("./Middelware/timer.js");
app.use(close)


// the css in including the files.html 

// get navbar.html in the path '/'
app.get("/", (req, res) => {
    res.sendFile(__dirname+'/pages/NavBar.html');
});
// get home.html in the path '/Home'
app.get("/Home", (req, res) => {
    res.sendFile(__dirname+'/pages/HomePage.html')}
);
// get cotact.html in the path '/'
app.get("/Contact", (req, res) => {
   res.sendFile(__dirname+'/pages/ContactUs.html');
});
// get service.html in the path '/'
app.get("/Services", (req, res) => {
    res.sendFile(__dirname+'/pages/OurServices.html');
});



app.listen(5000, () => console.log("Listening on port 5000"))