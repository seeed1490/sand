const db = require('../config/db.config');

exports.createInvoice = async (req, res) => {
  const { account_id, issue_date, description, total, tax, discount, net_amount } = req.body;
  await db.execute(
    'INSERT INTO invoices (account_id, issue_date, description, total, tax, discount, net_amount) VALUES (?, ?, ?, ?, ?, ?, ?)',
    [account_id, issue_date, description, total, tax, discount, net_amount]
  );
  res.status(201).json({ message: 'Invoice created' });
};

exports.getInvoices = async (req, res) => {
  const [rows] = await db.execute('SELECT * FROM invoices');
  res.json(rows);
};
