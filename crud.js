const express = require("express");
const app = express();
const PORT = process.env.PORT || 3500;

const a = [
  {
    id: 1,
    name: "Vijay",
    designation: "developer",
    address: "Annur",
  },
  {
    id: 2,
    name: "John",
    designation: "Analyst",
    address: "coimbatore",
  },
];

app.get("/user", function (req, res) {
  res.send(a);
});

app.post("/user", function (req, res) {
  a.push({
    id: 3,
    name: "Ajay",
    designation: "Network Engineer",
    address: "Bangalore",
  });
  res.send(a);
});

app.put("/user", function (req, res) {
  a[1].name = "Anand";
  res.send(a);
});

app.delete("/user", function (req, res) {
  a.splice(1, 1);
  res.send(a);
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
