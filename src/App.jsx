import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import InvoiceForm from './pages/InvoiceForm';
import ReceiptForm from './pages/ReceiptForm';
import PaymentForm from './pages/PaymentForm';
import StatementView from './pages/StatementView';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/invoice" element={<InvoiceForm />} />
        <Route path="/receipt" element={<ReceiptForm />} />
        <Route path="/payment" element={<PaymentForm />} />
        <Route path="/statement" element={<StatementView />} />
      </Routes>
    </Router>
  );
}

export default App;
