const mongoose= require('mongoose');




const MYschema= {
name:{
    type:String,
    required:true
},

size:{
    type:string
}


}

exports.Mymodel = mongoose.model('product',MYschema);