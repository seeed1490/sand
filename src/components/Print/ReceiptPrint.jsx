import React from 'react';
import './print.css';

const ReceiptPrint = ({ receipt, account }) => (
  <div className="print-container receipt">
    <header>
      <h2>سند قبض / Receipt Voucher</h2>
      <div className="company-info">
        <strong>مؤسسة أحمد عبد الله علي العتيبي للمقاولات</strong><br />
        <span>العنوان، الهاتف، البريد الإلكتروني</span>
      </div>
    </header>

    <section className="details">
      <p><strong>رقم السند:</strong> {receipt.id}</p>
      <p><strong>التاريخ:</strong> {receipt.date}</p>
      <p><strong>العميل:</strong> {account.name}</p>
    </section>

    <section className="amount">
      <p><strong>المبلغ:</strong> {receipt.amount}</p>
      <p><strong>طريقة الدفع:</strong> {receipt.method}</p>
      <p><strong>المرجع:</strong> {receipt.reference}</p>
      <p><strong>تم الاستلام بواسطة:</strong> {receipt.received_by}</p>
    </section>

    <footer>
      <p>توقيع الموظف: ______________</p>
    </footer>
  </div>
);

export default ReceiptPrint;
