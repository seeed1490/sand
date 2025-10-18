import React from 'react';
import './print.css';

const PaymentPrint = ({ payment, account }) => (
  <div className="print-container payment">
    <header>
      <h2>سند صرف / Payment Voucher</h2>
      <div className="company-info">
        <strong>مؤسسة أحمد عبد الله علي العتيبي للمقاولات</strong><br />
        <span>العنوان، الهاتف، البريد الإلكتروني</span>
      </div>
    </header>

    <section className="details">
      <p><strong>رقم السند:</strong> {payment.id}</p>
      <p><strong>التاريخ:</strong> {payment.date}</p>
      <p><strong>المورد:</strong> {account.name}</p>
    </section>

    <section className="amount">
      <p><strong>المبلغ:</strong> {payment.amount}</p>
      <p><strong>طريقة الدفع:</strong> {payment.method}</p>
      <p><strong>الغرض:</strong> {payment.purpose}</p>
      <p><strong>تم الدفع إلى:</strong> {payment.paid_to}</p>
      <p><strong>تمت الموافقة بواسطة:</strong> {payment.approved_by}</p>
    </section>

    <footer>
      <p>توقيع المدير المالي: ______________</p>
    </footer>
  </div>
);

export default PaymentPrint;
