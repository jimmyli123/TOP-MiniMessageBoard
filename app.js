const express = require('express')
const indexRouter = require('./routes/indexRouter');
const formRouter = require('./routes/formRouter');

const app = express();
const path = require('path');

app.set('views', path.join(__dirname, "views"));
app.set('view engine', 'ejs');


// app.get("/", (req, res) => {
//     res.render('index', { title: "Mini Messageboard", messages: messagesFromRouter } )
// });


app.use("/", indexRouter);
app.use('/new', formRouter);


const PORT = 3000;
app.listen(PORT, ()=> console.log(`Server is listening on port ${PORT}`));
