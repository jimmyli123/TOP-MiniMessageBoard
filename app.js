const express = require('express')
const indexRouter = require('./routes/indexRouter');


const app = express();
const path = require('path');

app.set('views', path.join(__dirname, "views"));
app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }));


// app.get("/", (req, res) => {
//     res.render('index', { title: "Mini Messageboard", messages: messagesFromRouter } )
// });


app.use("/", indexRouter);



const PORT = 3000;
app.listen(PORT, ()=> console.log(`Server is listening on port ${PORT}`));
