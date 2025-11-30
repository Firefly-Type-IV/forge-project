import express from 'express';
const app = express();
app.use(express.json());
app.use(express.static('public'));
app.use(urlencoded({ extended: true }));
app.set('view engine', 'ejs');

export default app;