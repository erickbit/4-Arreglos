function create(student, students) {
    students.push(student);
    return students;
}

function read(students) {
    students.forEach(s => {
        console.log("Nombre: "+s.name);
        console.log("# Control: "+s.controlNumber);
    });
}

function readNC(students,nc) {
    let e = students.find(student => student.controlNumber === nc);
    console.log(e);
}

function eraseNC(nc,students) {
    let i = students.indexOf(students.find(student => student.controlNumber === nc));
    students.splice(i,1);
}

function erase(pos, students) {
    students.splice(pos,1);
    return students;
}

function updateNC(nc, newelement, students) {
    let i = students.indexOf(students.find(student => student.controlNumber === nc));
    students[i]= newelement;
    return students;
}

function update(pos, newelement, students) {
    students[pos]= newelement;
    return students;
}

function grades(students,aprobados) {
    aprobados = students.find(student => student.grade >= 70);
    console.log(aprobados);
}
module.exports.create = create;
module.exports.read = read;
module.exports.readNC = readNC;
module.exports.erase = erase;
module.exports.eraseNC = eraseNC;
module.exports.update = update;
module.exports.updateNC = updateNC;
module.exports.grades = grades;