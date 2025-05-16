const mongoose = require("mongoose");

const employeesSchema = mongoose.Schema({
    name: String,
    mobile: String,
    email: String,
    products: [{ type: mongoose.Schema.Types.ObjectId, ref: "Products" }]
});

const Employees = mongoose.model("Employees", employeesSchema, 'employees');
module.exports = Employees;