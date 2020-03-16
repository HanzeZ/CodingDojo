const express = require("express");
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true}));
// req is short for request
// res is short for response
app.get("/api", (req, res) => {
  res.send("2222  express api server is now sending this over to the browser");
});

const server = app.listen(8000, () =>
  console.log(`Server is locked and loaded on port ${server.address().port}!`)
);

app.get("/api/users",(req,res) =>{
  const users =[
    {firstName:"Henry", lastName:"Baker",email:"hBaker@somewhere.com"},
    {firstName:"Mike", lastName:"Song", email:"Whatever@gmail.com"}
  ];
  return res.json({allDaUsers: users});
})

app.post("/api/users/new",(req,res) =>{
  console.log(req.body);
  const newUser = req.body;
  return res.status(201).json({ newuser: newUser })
})

app.get("/api/users/:whateverIwanted",(req,res) =>{
  console.log(req.params.whateverIWanted);
  const { whateverIWanted } = req.params;
  console.log(whateverIWanted)
})

app.put("/api/users/update/:id", (req,res) =>{
  console.log(req.params.id);
  console.log(req.body);
})

app.delete("/api/users/delete/:id", (req,res)=>{
  console.log(req.params.id);
})
