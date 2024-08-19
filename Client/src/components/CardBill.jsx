// Libreria para formatear la fecha 
import {format} from 'date-fns'

export const CardBill = ({bill}) => {

    const {category, date, amount} = bill;



  return (
    <div className='text-zinc-500'>
            <div className="flex flex-col gap-2">
                <div className="m-auto h-52 w-full max-w-md bg-white shadow p-2 border-t-4 border-red-600 rounded">
                    <header className="p-2 border-b flex">
                        <div className="flex flex-col">
                            <h4 className="text-xs font-semibold">Monto del gasto</h4>
                            <h1 className="text-lg font-mono text-red-600">{amount}$</h1>
                        </div>
                    </header>
                    <div className="flex flex-wrap p-2 w-full gap-4">
                        <div className="flex flex-col w-full">
                            <h4 className="text-xs">Categoria / Nombre</h4>
                            <h1 className="text-lg">{category}</h1>
                        </div>
                        <div className="flex flex-col">
                            <h4 className="text-xs">Fecha</h4>
                            <h1 className="text-md">{format(new Date(date), 'dd/MM/yyyy')}</h1>
                        </div>

                        {/* <div className="flex flex-col">
                            <h4 className="text-xs">N° Quittance</h4>
                            <h1 className="text-md font-thin">QUITTANCE-22-2022-8-7488a</h1>
                        </div> */}

                    </div>

                </div>
            </div>
        </div>
  )
}
