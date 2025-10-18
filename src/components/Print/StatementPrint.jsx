import React from 'react';
import './print.css';

const StatementPrint = ({ statement, account, from, to }) => (
  <div className="print-container statement">
    <header>
      <h2>كشف حساب / Account Statement</h2>
      <div className="company-info">
        <strong>مؤسسة أحمد عبد الله علي العتيبي للمقاولات</strong><br />
        <span>العنوان، الهاتف، البريد الإلكتروني</span>
      </div>
    </header>

    <section className="details">
      <p><strong>العميل:</strong> {account.name}</p>
      <p><strong>الفترة:</strong> من {from} إلى {to}</p>
    </section>

    <table className="items">
      <thead>
        <tr><th>التاريخ</th><th>الوصف</th><th>مدين</th><th>دائن</th><th>الرصيد</th></tr>
      </thead>
      <tbody>
        {statement.map((entry, i) => (
          <tr key={i}>
            <td>{entry.date}</td>
            <td>{entry.description}</td>
            <td>{entry.debit}</td>
            <td>{entry.credit}</td>
            <td>{entry.balance}</td>
          </tr>
        ))}
      </tbody>
    </table>

    <footer>
      <p>توقيع المحاسب: ______________</p>
    </footer>
  </div>
);

export default StatementPrint;
