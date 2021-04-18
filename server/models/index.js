const mongoose = require("mongoose")

mongoose.connect("mongodb://localhost:27017/car",{
	useNewUrlParser: true,
	useUnifiedTopology: true
})
.then(()=>console.log("connected to DB..!"))
.catch( err=> console.log(err.message))



//Mongoose Model Config
const carSchema = new mongoose.Schema({
	image: String,
	manufacturer: String,
	name: String,
	type: String,
	color: String
})

const Car = mongoose.model("Car", carSchema)

module.exports = Car