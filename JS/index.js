 class Student{
    constructor(firstName,lastName,roll,studentClass,number,mail){
        this.firstName = firstName;
        this.lastName = lastName;
        this.roll = roll;
        this.studentClass = studentClass;
        this.number = number;
        this.mail = mail;
    }

    toJSON(){
        return {
            firstName: this.firstName,
            lastName: this.lastName,
            roll: this.roll,
            studentClass: this.studentClass,
            number: this.number,
            mail: this.mail
        }
    }
 }
 
 document.getElementById('studentForm').addEventListener('submit', function(e){
    e.preventDefault();

    // data access from form 
    let firstName = document.getElementById("firstName").value;
    let lastName = document.getElementById("lastName").value;
    let roll = document.getElementById("roll").value;
    let studentClass = document.getElementById("class").value;
    let number = document.getElementById("number").value;
    let mail = document.getElementById("mail").value;

    let student = new Student(firstName, lastName, roll, studentClass, number, mail);
    
    let studentData = JSON.parse(localStorage.getItem('students')) || [];
    studentData.push(student.toJSON());
    localStorage.setItem('students', JSON.stringify(studentData));


    // reset form data after submit 
    document.getElementById('studentForm').reset();
    alert("Student Registration Successfull!");
    if(true){
        window.location = "allStudent.html"
    }
 });






 
 