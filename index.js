require ('dotenv').config()
const express =require('express');
const app = express();
const port = 3000
app.get('/', (req, res) => {
    res.send("Home Page");
})

app.get('/x', (req, res) => {
    res.send("Twiter page");
})
app.get('/login', (req, res) => {
    res.send("Login page");
})

app.listen(process.env.PORT,()=>{
console.log(`Server is Working ${port}`);
});