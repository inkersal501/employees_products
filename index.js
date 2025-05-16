const express = require('express');
const cors = require('cors');
const mongoose = require("mongoose");
const dotenv = require('dotenv'); 

dotenv.config();
const DB_URI = process.env.DB_URI;
const PORT = process.env.PORT;

const app = express(); 
app.use(cors()); 
app.use(express.json());

const fetchData = require("./fetchData");

mongoose
  .connect(DB_URI)
  .then(() => console.log("DB Connected"))
  .catch((error) => console.log("Error connecting to DB:", error));

  app.use((req, res, next) => { 
        console.log(`${req.method} ${req.originalUrl}`); 
        next();
    });
app.get('/', (req, res) => {
  res.send('Hello World!')
});


app.get("/search/:name", async (req, res) => {
  const {name} = req.params;
  if(name!="") { 
  const employeeProducts = await fetchData(name);
    if(employeeProducts.length>0)
      res.status(200).send(employeeProducts);
    else
      res.status(500).send({message: "No employee found."});
  }else{
    res.status(500).send({message: "send the employee name."});
  }
  
});

app.listen(PORT, () => {
  console.log(`Employees Products app listening on port ${PORT}`)
}); 