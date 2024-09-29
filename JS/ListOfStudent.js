class Student{
    constructor(firstName,lastName,roll,studentClass,number,mail){
        this.firstName = firstName;
        this.lastName = lastName;
        this.roll = roll;
        this.studentClass = studentClass;
        this.number = number;
        this.mail = mail;
    }
}

function fetchData(){
    let fetchRegistredData = localStorage.getItem('students');
    let toObJect = JSON.parse(fetchRegistredData);
 
    let tableBody = document.getElementById('tableBody');
    tableBody.innerHTML = '';

    toObJect.forEach((data,index) => {
        let student = new Student(data.firstName, data.lastName, data.roll, data.studentClass, data.number, data.mail);

        // edit student modal 
        let editModal = `
              <!-- Modal -->
                    <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div class="modal-dialog">
                        <div class="modal-content">
                            <div class="modal-header">
                            <h1 class="modal-title ms-auto fs-3 text-center fw-bolder text-primary" id="exampleModalLabel">Edit Student Details</h1>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div class="modal-body">
                            <div class="container">
                                <div class="row">
                                    <div class="col-md-12">
                                        <form id="editStudent">
                                             <div class="mb-3">
                                                <label class="form-label fw-bold" for="id">Id:</label>
                                                <input class="form-control" type="text" name="id" id="id" required>
                                            </div>
                                            <div class="mb-3">
                                                <label class="form-label fw-bold" for="firstName">First Name:</label>
                                                <input class="form-control" type="text" name="firstName" id="firstName" required>
                                            </div>
                                            <div class="last_name mb-3">
                                                <label class="form-label fw-bold" for="lastName">Last Name:</label>
                                                <input class="form-control" type="text" name="lastName" id="lastName" required>
                                            </div>
                                            <div class="mb-3">
                                                <label class="form-label fw-bold" for="roll">Roll:</label>
                                                <input class="form-control" type="number" name="roll" id="roll" required>
                                            </div>
                                            <div class="mb-3">
                                                <label class="form-label fw-bold" for="class">Class:</label>
                                                <input class="form-control" type="text" name="class" id="class" required>
                                            </div>
                                            <div class="mb-3">
                                                <label class="form-label fw-bold" for="number">Mobile Number:</label>
                                                <input class="form-control" type="tel" name="number" id="number" required>
                                            </div>
                                            <div class="mb-3">
                                                <label class="form-label fw-bold" for="mail">Email</label>
                                                <input class="form-control" type="email" name="mail" id="mail" required>
                                            </div>
                                            <div>
                                                <button type="submit" class="btn btn-primary mt-3">Save changes</button>
                                            </div>    
                                        </form>
                                    </div>
                                </div>
                            </div>
                            </div>
                        </div>
                    </div>
        `
        // modal end of student 

        // dat load on the table body 
        let tableData = `
        <tr>
            <td>${index + 1}</td>
            <td>${student["firstName"]}</td>
            <td>${student["lastName"]}</td>
            <td>${student["roll"]}</td>
            <td>${student["studentClass"]}</td>
            <td>${student["number"]}</td>
            <td>${student["mail"]}</td>
            <td>
                <button onclick="editStudent(${index})"  type="button" class="btn btn-warning" data-bs-toggle="modal" data-bs-target="#exampleModal">
                    <i class="fa-solid fa-pen-to-square"></i>
                </button>
                ${editModal}
            </td>
            <td>
                <button class="btn btn-danger" onclick="deleteStudent(${index})">
                    <i class="fa-solid fa-trash"></i>
                </button>
            </td>
        </tr>
    `
        document.getElementById('tableBody').innerHTML += tableData;
        
     });   
}
// invoket fetch function 
fetchData();






// Delete Item 
function deleteStudent(index){
 
        let fetchRegistredData = localStorage.getItem('students');
        let toObJect = JSON.parse(fetchRegistredData);
        toObJect.splice(index, 1);
        localStorage.setItem('students', JSON.stringify(toObJect));
   
    fetchData();
}


// UPDATE STUDENT DATA 
// Fiil existing Student information in modal 
function editStudent(index){
    let fetchRegistredData = localStorage.getItem('students');
    let toObJect = JSON.parse(fetchRegistredData);
    let studentDetails = toObJect[index];

    document.getElementById("id").value =index;
    document.getElementById("firstName").value = studentDetails["firstName"];
    document.getElementById("lastName").value = studentDetails["lastName"];
    document.getElementById("roll").value = studentDetails["roll"];
    document.getElementById("class").value = studentDetails["studentClass"];
    document.getElementById("number").value = studentDetails["number"];
    document.getElementById("mail").value = studentDetails["mail"];

}

 

class EditStudent{
    constructor(firstName,lastName,roll,studentClass,number,mail){
        this.firstName = firstName;
        this.lastName = lastName;
        this.roll = roll;
        this.studentClass =studentClass;
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
    
let saveStudent = document.getElementById('editStudent');
 saveStudent.addEventListener('submit', function(e){
    e.preventDefault();

    let id = document.getElementById('id').value;
    let firstName = document.getElementById('firstName').value;
    let lastName = document.getElementById('lastName').value;
    let roll = document.getElementById('roll').value;
    let classStudent = document.getElementById('class').value;
    let number = document.getElementById('number').value;
    let mail = document.getElementById('mail').value;

     let student = new EditStudent(firstName,lastName,roll,classStudent,number,mail);
     console.log(id);
    

    //  save change data 
    let studentData = JSON.parse(localStorage.getItem('student')) || [];
    // studentData[id] = student.toJSON();
    studentData.splice(id,1,student.toJSON());
    localStorage.setItem('students', JSON.stringify(studentData));
     
    
    window.location = "allStudent.html";
 })