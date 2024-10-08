import {useForm} from 'react-hook-form'
import { updateBillAx } from '../api/bills';

export const SalaryForm = () => {

  const {register, handleSubmit} = useForm()

  const onSubmit = async (data) => {
    const gasto = await updateBillAx(data)
    console.log(gasto)
  }

// amount, date, category
  return (
    <div className="bg-zinc-800 max-w-md w-full p-10 rounded-md m-auto ">
      <h1 className="font-bold text-xl text-center">Nuevo Gasto</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          type="number"
          placeholder="amount"
          {...register("amount")}
          className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2"
          autoFocus
        />
        <input
          {...register("category")}
          className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2"
          type="text"
        />
        <input
          {...register("date")}
          className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2"
          type="date"
        />
        <button className="p-2 rounded-md bg-blue-600">Guardar</button>
      </form>
    </div>
  );
};
