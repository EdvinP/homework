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
        localStorage.setItem(email, JSON.stringify(users));
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
    if (users.some(u => u.phoneNumber == user.phoneNumber)) {
        isValid = false;
        alert('Such phone number already exists');
    }
    
    if (!user.firstName.match(/^[a-zA-Z]+$/) || !user.lastName.match(/^[a-zA-Z]+$/)) {
        isValid = false;
        alert('Name or Last name can be only alphabets');
    }
    if (user.phoneNumber.length > 11) {
        isValid = false;
        alert('Incorrect phone number');

    }
    if(!user.phoneNumber.match(/^\d+/)) {
        isValid = false;
        alert('Phone number should be only numbers');
    }

    
    if (!user.email.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)) {
        isValid = false;
        alert('Incorrect email')

    }
  return isValid;
}

function appendUserToList(user) {
    var list = document.getElementById('user');
    list.innerHTML= '';
    var userhtml = document.getElementById('user');
    userhtml.innerHTML='';
    for (var i=0; i<users.length;i++){
        userhtml.innerHTML+= `<div class="new"><p>Name: ${users[i].firstName}</p>
        <p>Lastname: ${users[i].lastName}</p>
        <p>Birthday: ${users[i].dateBirth}</p>
        <p>Phone number: ${users[i].phoneNumber}</p>
        <p>Email: ${users[i].email}</p>
        <p>Adress: ${users[i].adress}</p>
        <button onClick="editUser('${i}')">Edit</button><button onClick="deleteUser('${i}')">DELETE</button>`
        
    }
}

function deleteUser(i){
    users.splice(i,1);
    appendUserToList(user);
}
function editUser(index) {
    var userhtml = document.getElementById('user');
    userhtml.innerHTML='';
    for(var i=0; i<users.length; i++) {
        if(i==index){
            userhtml.innerHTML+= `<div class = "red">
            Name: <input id="inputname" required maxlength="20" type="text" placeholder="${users[i].firstName}"><br>
            Last name: <input id="inputlastname" required maxlength="30" type="text" placeholder="${users[i].lastName}"><br>
            Birthday: <input id="inputbirth" required type="date" placeholder="${users[i].dateBirth}"><br>
            Phone number: <input id="inputnumber" maxlength="15" required type="tel" placeholder="${users[i].phoneNumber}"><br>
            Email: <input id="inputmail" required maxlength="40" type="email" placeholder="${users[i].email}"><br>
            Adress: <input id="inputadress" optional maxlength="40" type="text" placeholder="${users[i].adress}"><br>
            <button onClick="updateUser('${i}')">Update</button><button onClick="appendUserToList(user)">Cancel</button>`
        
            
        }else {
            userhtml.innerHTML+= `<div class="black"><p>Name: ${users[i].firstName}</p>
            <p>Lastname: ${users[i].lastName}</p>
            <p>Birthday: ${users[i].dateBirth}</p>
            <p>Phone number: ${users[i].phoneNumber}</p>
            <p>Email: ${users[i].email}</p>
            <p>Adress: ${users[i].adress}</p>
            <button disabled onClick="editUser('${i}')">Edit</button><button disabled onClick="deleteUser('${i}')">DELETE</button>`
        }
    }
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
        appendUserToList(user);
}
