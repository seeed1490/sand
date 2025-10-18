-- إنشاء قاعدة البيانات
CREATE DATABASE IF NOT EXISTS accounting_system CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
USE accounting_system;

-- جدول الفروع
CREATE TABLE IF NOT EXISTS branches (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  location TEXT
);

-- جدول الحسابات
CREATE TABLE IF NOT EXISTS accounts (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  type ENUM('customer', 'supplier') NOT NULL,
  branch_id INT,
  balance DECIMAL(12,2) DEFAULT 0,
  FOREIGN KEY (branch_id) REFERENCES branches(id)
);

-- جدول الفواتير
CREATE TABLE IF NOT EXISTS invoices (
  id INT AUTO_INCREMENT PRIMARY KEY,
  account_id INT NOT NULL,
  issue_date DATE,
  description TEXT,
  total DECIMAL(12,2),
  tax DECIMAL(12,2),
  discount DECIMAL(12,2),
  net_amount DECIMAL(12,2),
  branch_id INT,
  FOREIGN KEY (account_id) REFERENCES accounts(id),
  FOREIGN KEY (branch_id) REFERENCES branches(id)
);

-- جدول سندات القبض
CREATE TABLE IF NOT EXISTS receipt_vouchers (
  id INT AUTO_INCREMENT PRIMARY KEY,
  account_id INT NOT NULL,
  date DATE,
  amount DECIMAL(12,2),
  method ENUM('cash', 'cheque', 'bank_transfer'),
  reference TEXT,
  received_by VARCHAR(255),
  branch_id INT,
  FOREIGN KEY (account_id) REFERENCES accounts(id),
  FOREIGN KEY (branch_id) REFERENCES branches(id)
);

-- جدول سندات الصرف
CREATE TABLE IF NOT EXISTS payment_vouchers (
  id INT AUTO_INCREMENT PRIMARY KEY,
  account_id INT NOT NULL,
  date DATE,
  amount DECIMAL(12,2),
  method ENUM('cash', 'cheque', 'bank_transfer'),
  purpose TEXT,
  approved_by VARCHAR(255),
  paid_to VARCHAR(255),
  branch_id INT,
  FOREIGN KEY (account_id) REFERENCES accounts(id),
  FOREIGN KEY (branch_id) REFERENCES branches(id)
);

-- جدول المستخدمين
CREATE TABLE IF NOT EXISTS users (
  id INT AUTO_INCREMENT PRIMARY KEY,
  username VARCHAR(255) NOT NULL,
  password_hash TEXT NOT NULL,
  role ENUM('admin', 'accountant', 'viewer') DEFAULT 'viewer',
  branch_id INT,
  FOREIGN KEY (branch_id) REFERENCES branches(id)
);
