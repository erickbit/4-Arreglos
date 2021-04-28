let model = require('./student')

var students = [];
var aprobados = [];

let student = {
    name: 'Erick Andres Godinez Aguilera',
    controlNumber: "16400916",
    email: "erangodinezag@ittepic.edu.mx",
    grade: 80
};

let student2 = {
    name: 'Erick Andres Godinez Aguilera',
    controlNumber: "16400916",
    email: "erangodinezag@ittepic.edu.mx",
    grade: 85
};

students = model.create(student,students);
students = model.create(student2,students);
console.log("---------------------------")

model.read(students);
students = model.erase(0, students);
console.log("---------------------")
model.read(students);

student = {
    name: 'Erick',
    controlNumber: "16400916",
    email: "erangodinezag@ittepic.edu.mx",
    grade: 90
};

//-------------------- creacion ---------------------------------//
students = model.create(student,students);

console.log("---------------------------------")
model.read(students);
students = model.update(0,{name:"nuevo alunmo", controlNumber: "99400916",email:"correo", grade:85}, students);

console.log("------ actualizado------")
model.read(students);

console.log("------# control------")
model.readNC(students,"16400916");

console.log("------borrar # de control------")
model.eraseNc("16400916",students);
model.read(students);

console.log("------Actualizar------")
students = model.updateNC("999999999",{name:"Juanito", controlNumber: "99999999",email:"correo", grade:40}, students);
model.read(students);

console.log("------Alumnos aprobados------")
model.grades(students,aprobados);










