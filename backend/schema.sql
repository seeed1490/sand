CREATE TABLE accounts (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(255),
  type ENUM('customer', 'supplier'),
  balance DECIMAL(12,2) DEFAULT 0
);

CREATE TABLE invoices (
  id INT AUTO_INCREMENT PRIMARY KEY,
  account_id INT,
  issue_date DATE,
  description TEXT,
  total DECIMAL(12,2),
  tax DECIMAL(12,2),
  discount DECIMAL(12,2),
  net_amount DECIMAL(12,2),
  FOREIGN KEY (account_id) REFERENCES accounts(id)
);

CREATE TABLE receipt_vouchers (
  id INT AUTO_INCREMENT PRIMARY KEY,
  account_id INT,
  date DATE,
  amount DECIMAL(12,2),
  method ENUM('cash', 'cheque', 'bank_transfer'),
  reference TEXT,
  received_by VARCHAR(255),
  FOREIGN KEY (account_id) REFERENCES accounts(id)
);

CREATE TABLE payment_vouchers (
  id INT AUTO_INCREMENT PRIMARY KEY,
  account_id INT,
  date DATE,
  amount DECIMAL(12,2),
  method ENUM('cash', 'cheque', 'bank_transfer'),
  purpose TEXT,
  approved_by VARCHAR(255),
  paid_to VARCHAR(255),
  FOREIGN KEY (account_id) REFERENCES accounts(id)
);
