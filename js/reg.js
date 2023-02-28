var data = [];  // 
var selectedRow = null; /* global variable */ 
const onFormSubmit =  () => {
   let fullName = document.getElementById('fullName').value
    console.log("full name: " + fullName); //display sucess message

    let email = document.getElementById('email').value
    console.log("email: " + email); //display sucess message 

    let salary = document.getElementById('salary').value
    console.log("salary: " + salary); //display sucess message

    let city = document.getElementById('city').value
    console.log("city: " + city); //display sucess message
    //validate method // function 
    if(validate() ) { // if true 
        let formData = readFormData();
       // data.push(formData);
       if(selectedRow == null){
        insterNewRecord(formData); //)
        resetForm();
       } else updateRecord(formData);
       } else {
    console.log("form validation successful");
    } 
};

// validation of data 
const validate = () => {
    let isValid = true;
  
    if (document.getElementById("fullName").value == "") {
      isValid = false;
      document.getElementById("fullNameValidationError").classList.remove("hide");
    } else { // removes the red error message if the user reinputs values
      isValid = true;
      if (
        !document
          .getElementById("fullNameValidationError")
          .classList.contains("hide")
      ) {
        document.getElementById("fullNameValidationError").classList.add("hide");
      }
    }
  
    if (document.getElementById("email").value == "") {
      isValid = false;
      document.getElementById("emailValidationError").classList.remove("hide");
    } else {
        isValid = true;
        if (
          !document
            .getElementById("emailValidationError")
            .classList.contains("hide")
        ) {
          document.getElementById("emailValidationError").classList.add("hide");
        }
      }
  
    if (document.getElementById("salary").value == "") {
      isValid = false;
      document.getElementById("salaryValidationError").classList.remove("hide");
    } else {
        isValid = true;
        if (
          !document
            .getElementById("salaryValidationError")
            .classList.contains("hide")
        ) {
          document.getElementById("salaryValidationError").classList.add("hide");
        }
      }
  
  
    if (document.getElementById("city").value == "") {
      isValid = false;
      document.getElementById("cityValidationError").classList.remove("hide");
    } else {
        isValid = true;
        if (
          !document
            .getElementById("cityValidationError")
            .classList.contains("hide")
        ) {
          document.getElementById("cityValidationError").classList.add("hide");
        }
      }
    return isValid;
  };

  const readFormData =() => {

    // to get the data from the all input fields 

    var formData = {}; //JSON object 

    //adding elements into json object
    formData.fullName = document.getElementById("fullName").value;
    formData.email = document.getElementById("email").value;
    formData.salary = document.getElementById("salary").value;
    formData.city = document.getElementById("city").value;
    
    return formData;
  }; 

  function resetForm() {
    document.getElementById("fullName").value = ""; 
    document.getElementById("email").value = "";
    document.getElementById("salary").value = "";
    document.getElementById("city").value = "";
  };

  const insterNewRecord = (obj) => {
    data.push(obj);
    displayRecords();
  };

  //used to display the information 
  // print the array of JSON objects

  const displayRecords = () => {
    var table = document.getElementById("employeeList");
    var tableBody = table.getElementsByTagName("tbody")[0];
    var newRow = tableBody.insertRow(tableBody.length); // inseret into table row during runtime 

 // optimize 
    cell1 = newRow.insertCell(0); // insert a cell into the row creates <td></td>
    cell1.innerHTML = data[data.length - 1].fullName;
    cell2 = newRow.insertCell(1); // insert a cell into the row creates <td></td>
    cell2.innerHTML = data[data.length - 1].email;
    cell3 = newRow.insertCell(2); // insert a cell into the row creates <td></td>
    cell3.innerHTML = data[data.length - 1].salary;
    cell4 = newRow.insertCell(3); // insert a cell into the row creates <td></td>
    cell4.innerHTML = data[data.length - 1].city;
    cell5 = newRow.insertCell(4); // insert a cell into the row creates <td></td>
    cell5.innerHTML = `<a  class="btn btn-primary" onclick="onEdit(this)">Edit</a> | <a class="btn btn-primary" onclick="onDelete(this)">Delete</a>`;
    data.forEach((e) => console.log(e));
  }; 


  const onDelete= (td) => {
  
    if (confirm("Are you sure you want to delete")) {
      let row = td.parentElement.parentElement; // find the root / grandparent element 

      //remove the row from the table 
      //we need the table element ref to remove it 
      document.getElementById("employeeList").deleteRow(row.rowIndex);// rowindex the # of row // it referes to index 
      console.log("record deleted");
    } else {
      console.log("record not deleted");
    }
  };


  const onEdit = (td) => {
    selectedRow = td.parentElement.parentElement;
    document.getElementById("fullName").value = selectedRow.cells[0].innerHTML;
    document.getElementById("email").value = selectedRow.cells[1].innerHTML;
    document.getElementById("salary").value = selectedRow.cells[2].innerHTML;
    document.getElementById("city").value = selectedRow.cells[3].innerHTML;
  };

  const updateRecord = (formData) => {
    selectedRow.cells[0].innerHTML = formData.fullName;
    selectedRow.cells[1].innerHTML = formData.email;
    selectedRow.cells[2].innerHTML = formData.salary;
    selectedRow.cells[3].innerHTML = formData.city;
  };