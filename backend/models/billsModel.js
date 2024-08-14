//------- Definicion del modelo de los gastos( - bills -)
import mongoose from "mongoose";

const billsSchema = new mongoose.Schema({
    amount:{
        type: Number,
        require: true
    },
    date:{
        type:Date,
        dafault:Date.now
    },
    category:{
        type:String,
        required:true
    },
    user: {
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
        required:true
    },

})

const Bills = mongoose.model("bills", billsSchema);

export default Bills;