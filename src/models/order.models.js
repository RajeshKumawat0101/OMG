import mongoose, {Schema} from "mongoose"

const orderSchema = new Schema({
    patientName : {
        type : String,
        required : true,
        trim : true,
    },
    doctorName : {
        type : String,
        required : true,
        trim : true,
    },
    medicines : [
       {
        medicineName : {
            type : String,
            required : true,
        },
        quantity : {
            type : Number,
            required : true,
            default : 0,
        },
        rate : {
            type : Number,
            required : true,
            default : 0,
        }
       }
    ],
    totalAmount : {
        type : Number,
        required : true,
        default : 0
    }
},
{timestamps : true}
)

orderSchema.pre('save',function (next){
    this.totalAmount = this.medicines.reduce((sum, medicine)=>{
        return sum + medicine.quantity * medicine.rate
    },0)
    next();
})

export const Order = mongoose.model("Order",orderSchema);
