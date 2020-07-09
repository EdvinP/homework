document.getElementById('form').addEventListener('submit', (e)=>{
    let firstName = document.getElementById("firstName").value;
    let lastName = document.getElementById("lastName").value;
    let dateBirth = document.getElementById("dateBirth").value;
    let phoneNumber = document.getElementById("phoneNumber").value;
    let email = document.getElementById("mail").value;
    let adress = document.getElementById("adress").value;
    create(firstName,lastName, dateBirth, phoneNumber, email, adress);
    e.preventDefault();
});

var users = [];

function create(firstName, lastName, dateBirth, phoneNumber, email, adress){
    var user= {
        firstName: firstName,
        lastName: lastName,
        dateBirth: dateBirth,
        phoneNumber: phoneNumber,
        email: email,
        adress: adress
        }
    
    if(isNaN(phoneNumber)) {
        alert('Phone number should be only numbers');
        }else if(!firstName.match(/^[a-zA-Z]+$/) || !lastName.match(/^[a-zA-Z]+$/)) {
            alert('Only alphabets are allowed');
                }else if (firstName.length > 12 || lastName.length > 20) {
                    alert('Name or Last name too long ');
                        }else if (phoneNumber.length > 11) {
                            alert('Incorrect phone number');
                                }else if (!email.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)) {
                                    alert('Incorrect email');
                                    }else if (adress.length > 30) {
                                        alert('Adress too long');
                                            }else{
                                                users.push(user);
                                                localStorage.setItem('user', JSON.parse(users));
                                                readUser();
                                                document.getElementById('form').reset();
                                            }
    }

function readUser() {
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
    readUser();
}

function editUser(index) {
    var userhtml = document.getElementById('user');
    userhtml.innerHTML='';
    for(var i=0; i<users.length; i++) {
        if(i==index){
            userhtml.innerHTML+= `<div class = "red">
            Name: <input id="inputname" required type="text" placeholder="${users[i].firstName}"><br>
            Last name: <input id="inputlastname" required type="text" placeholder="${users[i].lastName}"><br>
            Birthday: <input id="inputbirth" required type="date" placeholder="${users[i].dateBirth}"><br>
            Phone number: <input id="inputnumber" required type="tel" placeholder="${users[i].phoneNumber}"><br>
            Email: <input id="inputmail" required type="email" placeholder="${users[i].email}"><br>
            Adress: <input id="inputadress" optional type="text" placeholder="${users[i].adress}"><br>
            <button onClick="updateUser('${i}')">Update</button><button onClick="readUser()">Cancel</button>`
        
            
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
    if(isNaN(updateNum)) {
        alert('Phone number should be only numbers');
        }else if(!updateName.match(/^[a-zA-Z]+$/) || !updateLast.match(/^[a-zA-Z]+$/)) {
            alert('Only alphabets are allowed');
            }else if (updateName.length > 12 || updateLast.length > 20) {
                alert('Too many words');
                }else if (updateNum.length > 11) {
                    alert('Incorrect phone number');
                    }else if (!updateMail.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)) {
                        alert('Incorrect email')
                        }else if (updateAdrs.length > 30) {
                            alert('Adress too long');
                            }else{
        users[index].firstName = updateName;
        users[index].lastName = updateLast;
        users[index].dateBirth = updateDate;
        users[index].phoneNumber = updateNum;
        users[index].email = updateMail;
        users[index].adress = updateAdrs;
        readUser();
    }
}
