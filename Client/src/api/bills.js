import axios from './axios'

export const getBillsAx = () => axios.get("/bills");
export const updateBillAx = (bill) => axios.post("/bills", bill)