
//Create CRUD opertaions :-
use("CrudDB")

// console.log(db)

db.createCollection("courses");

//Insert in CRUD Opertaions :-
// db.courses.insertOne({
//      name:"Manas's freelancing site",
//      price: 150000,
//      Projects: 45,
//      Designation: "A class developer" 
// })


// db.courses.insertMany(

//      [
//   {
//     "name": "Manas's Freelancing Site",
//     "price": 150000,
//     "projects": 45,
//     "designation": "A-Class Developer"
//   },
//   {
//     "name": "TechHaven Freelancers",
//     "price": 120000,
//     "projects": 30,
//     "designation": "Elite Developer"
//   },
//   {
//     "name": "InnovateHub Freelance Network",
//     "price": 180000,
//     "projects": 60,
//     "designation": "Master Developer"
//   },
//   {
//     "name": "CoderConnect",
//     "price": 135000,
//     "projects": 40,
//     "designation": "Pro Developer"
//   },
//   {
//     "name": "DigitalCraft Freelancers",
//     "price": 160000,
//     "projects": 55,
//     "designation": "Expert Developer"
//   },
//   {
//     "name": "CodeMasters Hub",
//     "price": 200000,
//     "projects": 75,
//     "designation": "Senior Developer"
//   },
//   {
//     "name": "SkillForge Freelance Solutions",
//     "price": 140000,
//     "projects": 48,
//     "designation": "Advanced Developer"
//   },
//   {
//     "name": "SmartCode Freelancers",
//     "price": 170000,
//     "projects": 50,
//     "designation": "Guru Developer"
//   },
//   {
//     "name": "ProTech Freelance Services",
//     "price": 190000,
//     "projects": 65,
//     "designation": "Lead Developer"
//   },
//   {
//     "name": "CodeCrafters Network",
//     "price": 155000,
//     "projects": 52,
//     "designation": "Specialist Developer"
//   }
// ]

// )

//Find in CRUD Operations :-
// let a = db.courses.find({price:150000})
// console.log(a);
// console.log(a.count());

// let b = db.courses.findOne({price:150000})
// console.log(b)

//To get all the documents :-
// console.log(a.toArray());

//To Update all the CRUD Operations :-
// db.courses.updateOne({price: 150000} , {$set:{price:10}})

// db.courses.updateMany({price: 150000} , {$set:{price:0}})


//TO Delete the Operations :-
db.courses.deleteOne({price:10});

db.courses.deleteMany({price:150000, price: 180000, price: 160000})