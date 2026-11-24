import express from 'express';
import vehiculesRoutes from './routes/vehicules.js';
import journal from './middlewares/journal.js';

const app = express();
const PORT = 7777;

app.use(express.json());
app.use(journal);

app.use('/vehicules', vehiculesRoutes);

app.use((req, res) => {
  res.status(404).json({ error: 'Route non trouvee' });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});