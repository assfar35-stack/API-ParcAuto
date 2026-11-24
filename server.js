// import express from 'express';
import express from 'express';
// import the vehicules routes and the journal middleware
import vehiculesRoutes from './routes/vehicules.js';
// import the journal middleware
import journal from './middleware/journal.js';

// create an express application    
const app = express();
const PORT = 7777;

app.use(express.json());
// use the journal middleware for all routes
app.use(journal);

app.use('/vehicules', vehiculesRoutes);

app.use((req, res) => {
  res.status(404).json({ error: 'Route non trouvee' });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});