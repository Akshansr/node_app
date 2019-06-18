const express = require('express')
const bodyParser = require('body-parser')
const morgan = require('morgan')
const session = require('express-session')
const dbConnection = require('./database')
const MongoStore = require('connect-mongo')(session)
const passport = require('./passport');
const home = require("./routes/home")
const productView = require('./routes/productView')
const app = express()
const port = process.env.PORT || 8080
// Route requires
const user = require('./routes/user')
var cors = require('cors');
var corsOptions = {
	origin: '*',
	optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204 
  }
app.use(cors(corsOptions));

// MIDDLEWARE
app.use(morgan('dev'))
app.use(
	bodyParser.urlencoded({
		extended: false
	})
)
app.use(bodyParser.json())

// Sessions
app.use(
	session({
		secret: 'fraggle-rock', //pick a random string to make the hash that is generated secure
		store: new MongoStore({ mongooseConnection: dbConnection }),
		resave: false, //required
		saveUninitialized: false //required
	})
)

// Passport
app.use(passport.initialize())
app.use(passport.session()) // calls the deserializeUser


// Routes
app.use('/', user)
app.use('/home', home)
app.use('/productView', productView)


// Starting Server 
app.listen(port, () => {
	console.log(`App listening on PORT: ${port}`)
})
