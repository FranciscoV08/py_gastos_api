import bills from "../models/billsModel.js";

// Obtenemos todos los gastos
export const getBills = async (req, res) => {

    // Guardamos todos los gastos. El metodo find() Busca en
    const gastos = await bills.find({user:req.user});
    console.log(gastos)

  res.json({ 
    message: "Tus tareas",
    gastos
 });
//   console.log("Mandando las tareas");
};

export const createBill = async (req, res) => {
  const { amount, date, category } = req.body;
  console.log(amount, date, category);

  // Nueva Instacia del gasto basado el billModel
  const newBill = new bills({
    amount,
    date,
    category,
    user: req.user,
  });

  const billSave = await newBill.save();
  // console.log(req.body)

  res.json({
    message: "Exito",
    newBill,
  });
};

export const deletBill = async (req, res) => {
  // Sacamos el gasto de los params 
  const id = req.params.id;
  // Buscar y eliminar el gasto por su ID
  const gasto = await bills.findByIdAndDelete(id);

  if(!gasto){
    res.json({message: "El gasto no se encontro "})
  }

  console.log("Eliminando de la db el gasto", id)

  res.json({
    message:"Eliminando",
    gasto
  })
}