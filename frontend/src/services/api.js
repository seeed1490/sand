import axios from 'axios';
const API = axios.create({ baseURL: process.env.REACT_APP_API_URL });

export const fetchInvoices = () => API.get('/invoices');
export const createInvoice = (data) => API.post('/invoices', data);
export const fetchReceipts = () => API.get('/receipts');
export const createReceipt = (data) => API.post('/receipts', data);
export const fetchPayments = () => API.get('/payments');
export const createPayment = (data) => API.post('/payments', data);
export const fetchStatement = (id, from, to) =>
  API.get(`/accounts/${id}/statement?from=${from}&to=${to}`);
