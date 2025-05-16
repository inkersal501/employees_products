const Employees = require("./models/employee.model"); 
const Products = require("./models/product.model");

const fetchData = async (name) => { 
    try { 
        const employees = await Employees.find({name: { $regex: name, $options: 'i' }}).populate("products", "_id product_name price"); 
        return employees;
    } catch (error) {
        return [];
    }    
};

module.exports = fetchData;