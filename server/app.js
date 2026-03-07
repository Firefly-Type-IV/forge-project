import express from 'express';
import workoutRouter from '../routers/workoutRouter.js';
import userRouter from '../routers/userRouter.js';

const app = express();
app.use(express.json());
app.use(express.static('public'));
// app.use(urlencoded({ extended: true }));
app.set('view engine', 'ejs');

app.use('/user', userRouter);
app.use('/workout', workoutRouter);
// app.use('/exercise', exerciseRouter);
// app.use('/category', categoryRouter);
// app.use('/rating', ratingRouter);

app.use((err, req, res, next) => {
  console.error('LOG:', err.message);
  
  res.status(err.code || 500).json({
    status: 'error',
    message: err.message || 'Internal Server Error'
  });
});

export default app;