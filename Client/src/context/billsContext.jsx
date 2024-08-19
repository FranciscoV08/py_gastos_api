// Nuevo contexto para los gastos
import { createContext, useContext, useEffect, useState } from "react";
import { getBillsAx } from "../api/bills";

//Inicializamos el context
const BillsContext = createContext();

// Esto facilita el uso del contexto en los componentes
// Esto custom hoock nos ayuda a utilizar el context
export const useBills = () => {
  const context = useContext(BillsContext);

  // Verificamos si el contexto existe, si no, lanzamos un error
  if (!context) {
    throw new Error("useBills debe ser usado dentro de un AuthProvider");
  }
  return context;
};

// Creamos la funcion provider
export const BillsProvider = ({ children }) => {
  // Nuestros gastos
  const [bills, Setbills] = useState()
  const [isLoadingBill, setIsLoadingBill] = useState(true)

  const [plusBill, setPlusBill] = useState()

  const getBills = async () => {
    const res = await getBillsAx();
    Setbills(res.data.gastos)
    setIsLoadingBill(false)
    // console.log(bills)
  }
  const sumBill = () => {
    if(bills){
      const total = bills.map(bill => bill.amount)
      const tototal = Object.values(total).reduce((acc, monto) => acc + monto, 0);
      return(tototal)
    }
  }

  return <BillsContext.Provider value={{
    bills,
    getBills,
    isLoadingBill,
    sumBill
  }}>
    {children}</BillsContext.Provider>;
};
