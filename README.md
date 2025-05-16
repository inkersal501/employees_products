## Task:
create two databases and an API that fetches data from both and returns a combined response. 
The setup will include:
1. Two Databases:
a) employees_db: Stores employee details.
b) products_db: Stores product details.
## Node.js application to Fetch Employee with product details by employee name via REST API

## REST API:
## https://employees-products.onrender.com/search/employeeName

Example names to tru: Inkersal, Nisha, Giri

## Sample Request :
https://employees-products.onrender.com/search/inker
```json
{
  _id: "6826cf0848e6b62b85ee6139",
  name: "Inkersal",
  mobile: "9876543210",
  email: "inkersal501@gmail.com",
  products: [
    {
      _id: "6826cf8948e6b62b85ee613f",
      product_name: "Mobile",
      price: "15000"
    }
  ]
}


