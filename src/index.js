import express from "express";
import { v4 as uuidv4 } from "uuid";

const app = express();

const port = 3000;

const cars = [];

app.use(express.json());

app.post("/cars", (req, res) => {
  const { model, brand, year, color, plate } = req.body;

  let car = {
    model,
    brand,
    year,
    color,
    plate,
    id: uuidv4(),
  };

  cars.push(car);

  return res.json(car).status(201);
});

app.get("/cars", (request, response) => {
  return response.json(cars);
});

app.listen(port, () => {
  console.log(`App running on port ${port}`);
});
