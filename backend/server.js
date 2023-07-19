const express = require('express');
const app = express();



app.get('/sayHi', (req, res) => {
    console.log('hi');
    res.json({"message":"hellow motherfucker"});
});



 
const port = 4000 
app.listen(port, () => {
    console.log(`Server running on port http://localhost:${port}`)
}); 