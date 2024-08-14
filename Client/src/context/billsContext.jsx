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
    throw new Error("useAuth debe ser usado dentro de un AuthProvider");
  }
  return context;
};

// Creamos la funcion provider
export const billsProvider = ({ children }) => {
    const [bills, Setbills] = useState([])

    const getBills = async () => {
        const res = await getBillsAx();
    
        console.log(res)
      }

  return <BillsContext.Provider value={{}}>{children}</BillsContext.Provider>;
};
