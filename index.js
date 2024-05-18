cake = {
  id: "0001",
  type: "donut",
  name: "Cake",
  ppu: 0.55,
  batters: {
    batter: [
      { id: "1001", type: "Regular" },
      { id: "1002", type: "Chocolate" },
      { id: "1003", type: "Blueberry" },
      { id: "1004", type: "Devil's Food" },
    ],
  },
  topping: [
    { id: "5001", type: "None" },
    { id: "5002", type: "Glazed" },
    { id: "5005", type: "Sugar" },
    { id: "5007", type: "Powdered Sugar" },
    { id: "5006", type: "Chocolate with Sprinkles" },
    { id: "5003", type: "Chocolate" },
    { id: "5004", type: "Maple" },
  ],
};

//Task 1: Find total number of Ids.

// // Id of Cake
// const cakeId = cake.id;

// //No of Ids in batter
// const IdsinBatter = cake.batters.batter.map((batter) => {
//   return batter.id;
// });
// console.log(IdsinBatter);

// //No of Ids in toppings
// const idsInTopping = cake.topping.map((toppings) => {
//   return toppings.id;
// });
// console.log(idsInTopping);

// // A new arrays where all ids are kept.
// let totalNumOfIds = [];
// totalNumOfIds.push(cakeId, ...IdsinBatter, ...idsInTopping);
// console.log(totalNumOfIds);
// //Finding the length of totalNumOfIds array
// console.log(totalNumOfIds.length);

//Task 2: Find the no of Ids which have type chocolate

// const batters = cake.batters.batter.find((batterType) => {
//   if (batterType.type === "Chocolate") {
//     return batterType.id;
//   }
// });
// console.log(batters);

// const toppings = cake.topping.find((chocolateTopping) => {
//   if (chocolateTopping.type === "Chocolate") {
//     return chocolateTopping.id;
//   }
// });
// console.log(toppings);

// const totalIds = [batters.id, toppings.id];
// console.log(totalIds);

//Task 3: Find the dish name which includes "1003", "5006"
//Flow -> if 1003: then its dish name is BlueBerry Cake.

// const cakeName = cake.name;
// // let typeName = cake.batters.batter.find((TypeOF) => {
// //   if (TypeOF.id === "1003") {
// //     return TypeOF.type;
// //   }
// // }); //Find humesha pura object hi return karega

// let foundBatter = cake.batters.batter.find((TypeOF) => TypeOF.id === "1003");
// // let typeName = foundBatter ? foundBatter.type : undefined; //Using Ternary operator
// let typeNameofBatter;
// for (let TypeOF of cake.batters.batter) {
//   if (TypeOF.id === "1003") {
//     typeNameofBatter = TypeOF.type;
//     break;
//   }
// }

// console.log(typeNameofBatter);

// let foundTopping = cake.topping.find(
//   (typeOfTopping) => typeOfTopping.id === "5006"
// );

// let typeNameofTopping;
// for (let k of cake.topping) {
//   if (k.id === "5006") {
//     typeNameofTopping = k.type;
//   }
// }
// console.log(typeNameofTopping);

// let dishName = typeNameofBatter + ", " + typeNameofTopping + " " + cakeName;
// console.log(dishName);
