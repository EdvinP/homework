document.getElementById('form').addEventListener('submit', (e)=>{
    let firstName = document.getElementById("firstName").value;
    let lastName = document.getElementById("lastName").value;
    let dateBirth = document.getElementById("dateBirth").value;
    let phoneNumber = document.getElementById("phoneNumber").value;
    let email = document.getElementById("mail").value;
    let adress = document.getElementById("adress").value;

    user = createUser(firstName,lastName, dateBirth, phoneNumber, email, adress);
    
    if (validateUser(user)) {
      users.push(user);
      appendUserToList(user);

      document.getElementById('form').reset();
    }
    
    e.preventDefault();
});

var users = [];

function createUser(firstName, lastName, dateBirth, phoneNumber, email, adress) {
  return {
        firstName: firstName,
        lastName: lastName,
        dateBirth: dateBirth,
        phoneNumber: phoneNumber,
        email: email,
        adress: adress
  }
}

function validateUser(user) {
    var isValid = true;

    if (user.firstName.length > 12) {
        isValid = false;
        alert('First name cannot exceed 12 symbols');
    }

    if (users.some(u => u.email == user.email)) {
        isValid = false;
        alert('Such email already exists.');
    }
    
    if (!user.firstName.match(/^[a-zA-Z]+$/) || !user.lastName.match(/^[a-zA-Z]+$/)) {
        isValid = false;
        alert('Can be only alphabets');
    }
    if (user.phoneNumber.length > 11) {
        isValid = false;
        alert('Incorrect phone number');

    }
    
    if (!user.email.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)) {
        isValid = false;
        alert('Incorrect email')
  // tokiu paciu principu ir kitu lauku validacija

  return isValid;
}

function appendUserToList(user) {
  // cia susigeneruok koki nori elementa (kaip ir darei ir ji appendink)
  // pavyzdys:
    
    var list = document.getElementById('user');
    var node = document.createElement("LI");
    var deleteButton = document.createElement("button")
    var editButton = document.createElement("button")
    var firstName = document.createTextNode(user.firstName);
    var lastName = document.createTextNode(user.lastName);
    var dateBirth = document.createTextNode(user.dateBirth);
    var phoneNumber = document.createTextNode(user.phoneNumber);
    var email = document.createTextNode(user.email);
    var adress = document.createTextNode(user.adress);
    node.appendChild(firstName);
    node.appendChild(lastName);
    node.appendChild(dateBirth);
    node.appendChild(phoneNumber);
    node.appendChild(email);
    node.appendChild(adress);
    deleteButton.innerHTML = "Delete";
    document.li.appendChild(deleteButton)
    deleteButton.setAttribute("id",user.email);
    editButton.innerHTML = "Edit";
    document.li.appendChild(editButton)
    editButton.setAttribute("id",user.email);
    list.appendChild(deleteButton)
    list.appendChild(editButton)
    list.appendChild(node);
    console.log(user)
}

function removeUserFromList(index) {
  // removeChild
}

function updateUserInList(index, updatedUser) {
  // replaceChild
}

function deleteUser(i){
    users.splice(i,1);
    removeUserFromList(i);
}

function updateUser(index) {
    var updateName = document.getElementById('inputname').value;
    var updateLast = document.getElementById('inputlastname').value;
    var updateDate = document.getElementById('inputbirth').value;
    var updateNum = document.getElementById('inputnumber').value;
    var updateMail = document.getElementById('inputmail').value;
    var updateAdrs = document.getElementById('inputadress').value;

    users[index].firstName = updateName;
    users[index].lastName = updateLast;
    users[index].dateBirth = updateDate;
    users[index].phoneNumber = updateNum;
    users[index].email = updateMail;
    users[index].adress = updateAdrs;

    updateUserInList(index, users[index]);
}
}