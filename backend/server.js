const express = require('express');
const http = require('http');
const socketIo = require('socket.io');
const bodyParser = require('body-parser');
const cors = require('cors'); // Import cors

const app = express();
const server = http.createServer(app);

// Enable CORS for all routes (or you can limit to a specific origin)
app.use(cors({
  origin: 'http://localhost:3001'  // Allow only your frontend's origin
}));

app.use(bodyParser.json());

// Configure Socket.IO to accept connections from your frontend's origin
const io = socketIo(server, {
  cors: {
    origin: "http://localhost:3001",
    methods: ["GET", "POST"]
  }
});

// In-memory inventory data
let inventory = [
  { id: 1, name: 'Tomatoes', quantity: 100 },
  { id: 2, name: 'Carrots', quantity: 50 },
  { id: 3, name: 'Lettuce', quantity: 30 }
];

app.get('/', (req, res) => {
  res.send('Welcome to Local Harvest API!');
});

// Endpoint to get the current inventory
app.get('/api/inventory', (req, res) => {
    res.json(inventory); // inventory should be an array or valid JSON
  });
  

// Endpoint to update inventory (e.g., a farmer updating produce)
app.post('/api/inventory/update', (req, res) => {
  const { id, quantity } = req.body;
  const item = inventory.find(i => i.id === id);
  if (item) {
    item.quantity = quantity;
    io.emit('inventoryUpdate', item);
    res.json({ success: true, item });
  } else {
    res.status(404).json({ success: false, message: 'Item not found' });
  }
});

// Endpoint for surplus food redistribution
app.post('/api/surplus', (req, res) => {
  const { id, surplusQuantity } = req.body;
  const item = inventory.find(i => i.id === id);
  if (item && item.quantity >= surplusQuantity) {
    item.quantity -= surplusQuantity;
    io.emit('inventoryUpdate', item);
    res.json({ success: true, message: 'Surplus redistributed', item });
  } else {
    res.status(400).json({ success: false, message: 'Insufficient quantity' });
  }
});

// Socket.IO connection handling
io.on('connection', (socket) => {
  console.log('New client connected');
  socket.emit('inventoryUpdate', inventory);
  
  socket.on('disconnect', () => {
    console.log('Client disconnected');
  });
});

// Start the server
const PORT = process.env.PORT || 3000;
server.listen(PORT, () => console.log(`Server running on port ${PORT}`));
