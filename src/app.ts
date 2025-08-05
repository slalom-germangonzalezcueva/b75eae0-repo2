import express from 'express';
import healthcheckRouter from './routes/healthcheck';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use('/healthcheck', healthcheckRouter);

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});