let users = [];

function addregister(){
  var name = registerform.name.value
  var email = registerform.email.value
  var password = registerform.password.value
  var address = registerform.address.value
  var phone = registerform.phone.value
  if (name == "" || email == "" || password == "" || address == "" || phone == ""  ) {
    alert("Vui lòng nhập lại ");
    reset();
  } else {
    let temp = {
       name: name,
        email: email,
        password: password,
        address: address,
        phone: phone
      };
      console.log(temp);
      users.push(temp);
     
  }
 console.log(users)
 localStorage.setItem('users', JSON.stringify(users))
}