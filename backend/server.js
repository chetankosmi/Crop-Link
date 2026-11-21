import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Base Route
app.get('/', (req, res) => {
  res.json({
    message: 'Welcome to CropLink Ultra Pro API',
    status: 'Ready for full-stack integration',
    version: '1.0.0'
  });
});

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', timestamp: new Date().toISOString() });
});

// Future API routes placeholder
// app.use('/api/auth', authRoutes);
// app.use('/api/schemes', schemeRoutes);
// app.use('/api/services', serviceRoutes);
// app.use('/api/contact', contactRoutes);

app.listen(PORT, () => {
  console.log(`[CropLink Backend] Server running on port ${PORT}`);
});
