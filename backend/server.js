const express = require('express');
const app = express();
const bodyParser = require('body-parser');
app.use(bodyParser.json());




// app.get('/sayHi', (req, res) => {
//     console.log('hi');
//     res.json({"message":"hello motherfucker"});
// });


app.get("/homePage", (req, res) => {
    res.json({"message":"home page from server"});
});


app.get("/loginPage", (req, res) => {
    res.json({"message":"login from server"});
});

app.get("/signupPage", (req, res) => {
    res.json({"message":"signup from server"});
});

app.post("/doLogin", (req, res) => {
    try {
        const {email, password} = req.body;
        console.log(email, password);
    } catch (error) {
        console.log(error);
    }
    
});

 
const port = 4000 
app.listen(port, () => {
    console.log(`Server running on port http://localhost:${port}`)
}); 