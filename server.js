const express = require('express');
const cors = require('cors');
const fs = require('fs').promises;
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;
const JSON_FILE = path.join(__dirname, 'shortcuts.json');

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.static(__dirname));

// GET endpoint to fetch shortcuts
app.get('/api/shortcuts', async (req, res) => {
  try {
    const data = await fs.readFile(JSON_FILE, 'utf8');
    res.json(JSON.parse(data));
  } catch (error) {
    console.error('Error reading shortcuts:', error);
    res.status(500).json({ error: 'Failed to read shortcuts' });
  }
});

// POST endpoint to save shortcuts
app.post('/api/shortcuts', async (req, res) => {
  try {
    const shortcutsData = req.body;
    
    // Validate JSON structure
    if (!shortcutsData.categories || !Array.isArray(shortcutsData.categories)) {
      return res.status(400).json({ error: 'Invalid JSON structure' });
    }

    // Write to file
    await fs.writeFile(JSON_FILE, JSON.stringify(shortcutsData, null, 2), 'utf8');
    
    res.json({ success: true, message: 'Shortcuts saved successfully' });
  } catch (error) {
    console.error('Error saving shortcuts:', error);
    res.status(500).json({ error: 'Failed to save shortcuts' });
  }
});

// Serve index.html for root route
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(PORT, () => {
  console.log(`🚀 Blender Shortcuts server running on http://localhost:${PORT}`);
  console.log(`📁 Serving shortcuts from: ${JSON_FILE}`);
});

