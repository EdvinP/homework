document.getElementById('form').addEventListener('submit', (e)=>{
    let name = document.getElementById("txtName").value;
    let lastName = document.getElementById("txtLast").value;
    let dateBirth = document.getElementById("dateBirth").value;
    let phNum = document.getElementById("phNum").value;
    let email = document.getElementById("mail").value;
    let adrs = document.getElementById("adrs").value;
    localStorage.setItem('name', name);
    localStorage.setItem('lastname', lastName);
    localStorage.setItem('dateBirth', dateBirth);
    localStorage.setItem('phone', phNum);
    localStorage.setItem('mail', email);
    localStorage.setItem('adress', adrs);
    create(name,lastName, dateBirth, phNum, email, adrs);
    e.preventDefault();
});

var users = [];

function create(name, lastName, dateBirth, phNum, email, adrs){
    var user= {
        name: name,
        lastName: lastName,
        dateBirth: dateBirth,
        phNum: phNum,
        email: email,
        adrs: adrs
    }
    users.push(user);
    console.log(users);
    readUser();
    document.getElementById('form').reset();
}
function readUser() {
    var userhtml = document.getElementById('user');
    userhtml.innerHTML='';
    for (var i=0; i<users.length;i++){
        userhtml.innerHTML+= `<div class="new"><p>Name: ${users[i].name}</p>
    <p>Lastname: ${users[i].lastName}</p>
    <p>Birthday: ${users[i].dateBirth}</p>
    <p>Phone number: ${users[i].phNum}</p>
    <p>Email: ${users[i].email}</p>
    <p>Adress: ${users[i].adrs}</p>
    <button onClick="editUser('${i}')">Edit</button><button onClick="deleteUser('${i}')">DELETE</button>`
        
    }
}

function deleteUser(i){
    users.splice(i,1);
    localStorage.removeItem('name', users.name);
    localStorage.removeItem('lastname', users.lastName);
    localStorage.removeItem('dateBirth', users.dateBirth);
    localStorage.removeItem('phone', users.phNum);
    localStorage.removeItem('mail', users.email);
    localStorage.removeItem('adress', users.adrs);
    readUser();
}

function editUser(index) {
    var userhtml = document.getElementById('user');
    userhtml.innerHTML='';
    for(var i=0; i<users.length; i++) {
        if(i==index){
            userhtml.innerHTML+= `<div class = "red">
            Name: <input id="inputname" required type="text" placeholder="${users[i].name}"><br>
            Last name: <input id="inputlastname" required type="text" placeholder="${users[i].lastName}"><br>
            Birthday: <input id="inputbirth" required type="date" placeholder="${users[i].dateBirth}"><br>
            Phone number: <input id="inputnumber" required type="tel" placeholder="${users[i].phNum}"><br>
            Email: <input id="inputmail" required type="email" placeholder="${users[i].email}"><br>
            Adress: <input id="inputadress" optional type="text" placeholder="${users[i].adrs}"><br>
            <button onClick="updateUser('${i}')">Update</button><button onClick="readUser()">Cancel</button>`
        
            
        }else {
     userhtml.innerHTML+= `<div class="black"><p>Name: ${users[i].name}</p>
    <p>Lastname: ${users[i].lastName}</p>
    <p>Birthday: ${users[i].dateBirth}</p>
    <p>Phone number: ${users[i].phNum}</p>
    <p>Email: ${users[i].email}</p>
    <p>Adress: ${users[i].adrs}</p>
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
    if (updateName == '' || updateLast == '') {
        alert('wrong');
    }else if (isNaN(updateNum)) {
        alert(' Phone number: Should be only numbers');
    }else  {
        users[index].name = updateName;
        users[index].lastName = updateLast;
        users[index].dateBirth = updateDate;
        users[index].phNum = updateNum;
        users[index].email = updateMail;
        users[index].adrs = updateAdrs;
        localStorage.setItem('name', updateName);
        localStorage.setItem('lastname', updateLast);
        localStorage.setItem('dateBirth', updateDate);
        localStorage.setItem('phone', updateNum);
        localStorage.setItem('mail', updateMail);
        localStorage.setItem('adress', updateAdrs);
        readUser();
    }
}




