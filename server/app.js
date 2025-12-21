import express from 'express';
const app = express();
app.use(express.json());
app.use(express.static('public'));
app.use(urlencoded({ extended: true }));
app.set('view engine', 'ejs');

app.use('/user', userRouter);
app.use('/workout', workoutRouter);
app.use('/exercise', exerciseRouter);
app.use('/category', categoryRouter);
app.use('/rating', ratingRouter);

export default app;