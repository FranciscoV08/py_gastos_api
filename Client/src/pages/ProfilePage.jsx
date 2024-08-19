import { useEffect, useState } from "react"
import { useAuth } from "../context/AuthContext"
// import { getBillsAx } from "../api/bills"
import { useBills } from "../context/billsContext"
import { CardBill } from "../components/CardBill"

export const ProfilePage = () => {

  const { user, isLoading } = useAuth()
  const { bills, getBills, isLoadingBill, sumBill } = useBills()
  const [total, setTotal] = useState()


  const res = sumBill()
  console.log(res)


  useEffect(() => {
    getBills()
  }, [])

  return (
    <div className="text-white">
      <div>
        <h1 className="font-bold text-2xl text-center">Bienvenido.!! <span className="font-mono text-green-500">{user.username}</span></h1>
      </div>

      <section>
        <h1 className="font-bold text-2xl ">Tus Gastos <span className="font-mono text-green-500">{user.username}</span></h1>
        <div className="flex flex-col md:flex-row gap-5 flex-wrap">
          {
            bills ? bills.map(bill => (
              <CardBill key={bill._id} bill={bill} />
            ))
              : (<h1>No existe </h1>)
          }
        </div>
        <div>
          <h1 className="font-bold text-2xl text-center">Tus gastos Totales son: <span className="font-mono text-red-500">{res}$</span></h1>
        </div>
      </section>
      <section>
        <h1 className="font-bold text-2xl ">Tus Objetivos <span className="font-mono text-green-500">{user.username}</span></h1>
        <div>
          
        </div>
      </section>
    </div>
  )
}
