import express from 'express'

const app = express();

app.use(express.json());

app.get('/', (req, res) => {
    res.send('Backend works');
});

app.listen(3000, ()=>{
    console.log(`Server is live on http://localhost:3000`)
});