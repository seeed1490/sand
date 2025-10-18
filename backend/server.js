const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

const invoiceRoutes = require('./routes/invoiceRoutes');
const receiptRoutes = require('./routes/receiptRoutes');
const paymentRoutes = require('./routes/paymentRoutes');
const accountRoutes = require('./routes/accountRoutes');

app.use('/api/invoices', invoiceRoutes);
app.use('/api/receipts', receiptRoutes);
app.use('/api/payments', paymentRoutes);
app.use('/api/accounts', accountRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
