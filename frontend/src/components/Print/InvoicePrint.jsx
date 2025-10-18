import React from 'react';
import './print.css';

const InvoicePrint = ({ invoice, customer }) => (
  <div className="print-container invoice">
    <header>
      <h2>فاتورة / Invoice</h2>
      <div className="company-info">
        <strong>مؤسسة أحمد عبد الله علي العتيبي للمقاولات</strong><br />
        <span>العنوان، الهاتف، البريد الإلكتروني</span>
      </div>
    </header>

    <section className="invoice-details">
      <p><strong>رقم الفاتورة:</strong> {invoice.id}</p>
      <p><strong>تاريخ الإصدار:</strong> {invoice.date}</p>
      <p><strong>العميل:</strong> {customer.name}</p>
    </section>

    <table className="items">
      <thead>
        <tr><th>الوصف</th><th>الكمية</th><th>السعر</th><th>الإجمالي</th></tr>
      </thead>
      <tbody>
        {invoice.items.map((item, i) => (
          <tr key={i}>
            <td>{item.description}</td>
            <td>{item.quantity}</td>
            <td>{item.price}</td>
            <td>{item.total}</td>
          </tr>
        ))}
      </tbody>
    </table>

    <section className="totals">
      <p><strong>الضريبة:</strong> {invoice.tax}</p>
      <p><strong>الخصم:</strong> {invoice.discount}</p>
      <p><strong>الإجمالي المستحق:</strong> {invoice.net_amount}</p>
    </section>

    <footer>
      <p>توقيع الموظف: ______________</p>
    </footer>
  </div>
);

export default InvoicePrint;
