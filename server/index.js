const express = require('express')
const app = express()
const bodyParser = require("body-parser")
const db = require('./models/index')
const cors = require('cors')


app.set("view engine", "ejs")
app.use(bodyParser.urlencoded({extended:true}))
app.use(express.static("public"))
const PORT =  process.env.PORT || 8081;
app.use(cors());
app.use(bodyParser.json())

//Get all the cars list 
app.get('/', async (req,res) => {
	try{
		let cars = await db.find({})
		res.json(cars)
		res.send('coonected to node')
	} catch(err){
		console.log(err.message)
	}
})

//Post the cars 
app.post('/', async function(req,res) {
	try{
		let car = await db.create({
			manufacturer: req.body.manufacturer,
			name: req.body.name,
			color: req.body.color,
			size: req.body.size
		})
		res.json(car)
	} catch(err){
		console.log(err.message)
	}
	res.send('success posted')
	
})

app.listen(PORT,()=>{
	console.log(`Server is running on PORT`, PORT)
})