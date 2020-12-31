var account = JSON.parse(localStorage.getItem("account"));
if (account === null) {
  account = [];
  var account = [
    {
      id: 0,
      username: "admin",
      password: "123456",
      level: 1,
    },
    {
      id: 1,
      username: "b",
      password: "b",
      level: 0,
    },
    {
      id: 2,
      username: "a",
      password: "a",
      level: 0,
    },
  ];
  localStorage.setItem("account", JSON.stringify(account));
}

var idup = JSON.parse(localStorage.getItem("idup"));
if (idup === null) {
  idup = [];
  var idup = 3;
  localStorage.setItem("idup", JSON.stringify(idup));
}

///////////////////////////////////////////////////////////////////////////////////////////////
// var checkLogin = JSON.parse(localStorage.getItem("checkLogin"));
// if (checkLogin === null) {
//   checkLogin = [];
var checkLogin = -1;
localStorage.setItem("checkLogin", JSON.stringify(checkLogin));
// }
// if (checkLogin == -1) {
// } else if (account[checkLogin].level == 0) {
//   document.getElementById("statusLogin").innerHTML = "Đăng nhập thành công";
// document.getElementById("menu_account_login").innerHTML =
//   account[checkLogin].username;
// document.getElementById("menu_account_login").style.display = "block";
// document.getElementById("menu_login_button").style.display = "none";
// document.getElementById("hello_user").innerHTML =
//   "Xin chào " + account[checkLogin].username + " !";
// document.getElementById("menu_logout").style.display = "block";
// document.getElementById("quanlydon").style.display = "none";
// orderprinf();
// demOrder();
// } else if (account[checkLogin].level == 1) {
//   document.getElementById("statusLogin").innerHTML = "Đăng nhập thành công";
//   alert("Đăng nhập thành công");
// document.getElementById("menu_account_login").innerHTML =
//   account[checkLogin].username;
// document.getElementById("menu_account_login").style.display = "block";
// document.getElementById("menu_login_button").style.display = "none";
// document.getElementById("hello_user").innerHTML =
//   "Xin chào " + account[checkLogin].username + " !";
// document.getElementById("menu_logout").style.display = "block";
// document.getElementById("quanlydon").style.display = "block";
// orderprinf();
// demOrder();
// }

///////////////////////////////////////////////////////////////////////////////////////////////
function Signup() {
  var checkUsername = 0;
  var id = idup;
  var level = 0;
  var username = document.getElementById("usernameSignup").value;
  var password = document.getElementById("passwordSignup").value;
  var Repassword = document.getElementById("RepasswordSignup").value;
  if (
    username != "" &&
    password != "" &&
    Repassword != "" &&
    password == Repassword
  ) {
    for (let i = 0; i < account.length; i++) {
      if (account[i].username == username) {
        checkUsername = 1;
        break;
      }
    }
    if (checkUsername == 0) {
      accountSignup = {
        id,
        username,
        password,
        level,
      };
      account.push(accountSignup);

      localStorage.setItem("account", JSON.stringify(account));

      checkLogin = id;
      localStorage.setItem("checkLogin", JSON.stringify(checkLogin));

      var id = idup++;
      localStorage.setItem("idup", JSON.stringify(idup));
      console.log(account);
      document.getElementById("statusSignup").innerHTML = "Đăng ký thành công";
      alert("Đăng ký thành công");
      // document.getElementById("menu_account_login").innerHTML = username;
      // document.getElementById("menu_account_login").style.display = "block";
      // document.getElementById("menu_login_button").style.display = "none";
      // document.getElementById("hello_user").innerHTML =
      //   "Xin chào " + username + " !";
      // document.getElementById("menu_logout").style.display = "block";
      // location.reload();
    } else {
      document.getElementById("statusSignup").innerHTML =
        "Tên tài khoản đã tồn tại";
      alert("Tên tài khoản đã tồn tại");
    }
  } else {
    document.getElementById("statusSignup").innerHTML =
      "Vui lòng nhập đầy đủ thông tin";
  }
}
var id_user="";
///////////////////////////////////////////////////////////////////////////////////////////////
function Login() {
  for (i = 0; i < account.length; i++) {
    if (
      document.getElementById("usernameLogin").value == account[i].username &&
      document.getElementById("passwordLogin").value == account[i].password
    ) {
      checkLogin = account[i].id;
      localStorage.setItem("checkLogin", JSON.stringify(checkLogin));
      id_user =checkLogin;
      if (account[i].level == 0) {
        document.getElementById("statusLogin").innerHTML =
          "Đăng nhập thành công thường";
        location.href = "index.html";
        // alert("ok");
        // console.log(document.getElementsByClassName("login"));
        // .addEventListener("click", function () {
        // window.location = "https://www.google.com/";
        // });
        // document.getElementById("menu_account_login").innerHTML =
        //   account[i].username;
        // document.getElementById("menu_account_login").style.display = "block";
        // document.getElementById("menu_login_button").style.display = "none";
        // document.getElementById("hello_user").innerHTML =
        //   "Xin chào " + account[i].username + " !";
        // document.getElementById("menu_logout").style.display = "block";
        // document.getElementById("quanlydon").style.display = "none";
        // orderprinf();
        // demOrder();

        // location.reload();
      } else if (account[i].level == 1) {
        document.getElementById("statusLogin").innerHTML =
          "Đăng nhập thành công admin";
        location.href = "admin.html";
        // document.getElementById("menu_account_login").innerHTML =
        //   account[i].username;
        // document.getElementById("menu_account_login").style.display = "block";
        // document.getElementById("menu_login_button").style.display = "none";
        // document.getElementById("hello_user").innerHTML =
        //   "Xin chào " + account[i].username + " !";
        // document.getElementById("menu_logout").style.display = "block";
        // document.getElementById("quanlydon").style.display = "block";
        // orderprinf();
        // demOrder();
        // location.reload();
      }
    }
  }
  if (checkLogin == -1) {
    document.getElementById("statusLogin").innerHTML =
      "Sai mật khẩu hoặc tài khoản";
  }
}
$(document).ready(function(){
  var account = JSON.parse(localStorage.getItem('account')) ;
      var html = '';
      Object.keys(account).map((key, value) => {
          
          html+= "<form action='#' method='POST'>"+
          "<input type='text' name='name' placeholder='Name' value="+account[key]['username']+"/>"+
          
          "<input type='email' name ='email' placeholder='Email' value="+account[key]['password']+"/>"+
          
         " <input type='number' name ='password' placeholder='Password' />	"+
                    
          <button type="submit" name ="update" class="btn btn-default">Update</button>
        
          
        +"</form>"  
      })
    })
// var buttonAdd = document.getElementById("button-add");
// buttonAdd.onclick = function(e) {
//   e.preventDefault();

//   var name = document.getElementById("name").value;
//   var price = document.getElementById("price").value;
//   var image = URL.createObjectURL(form.image.files[0]);

//   if(localStorage.getItem("listProducts") == null) {
//     var products = [];
//   } else {
//     var products = JSON.parse(localStorage.getItem("listProducts"));
//   }

//   products.push({
//     id: products.length + 1,
//     name: name,
//     price: price,
//     image: image
//   });

//   localStorage.setItem("listProducts", JSON.stringify(products));

//   products = JSON.parse(localStorage.getItem("listProducts"));  
//   var showProducts = formatArray(products);
//   document.getElementById("product-item").innerHTML = showProducts.join("");
// }

// function listProducts() {
//   if(localStorage.getItem("listProducts") != null) {
//     products = JSON.parse(localStorage.getItem("listProducts"));  
//     var showProducts = formatArray(products);
//     document.getElementById("product-item").innerHTML = showProducts.join("");
//   }
// }

// function formatArray(products) {
//   var renderProducts = products.map((element, index) => {
//     return `
//       <div class="col l-2-4">
//         <a href="" class="product__item">
//           <div class="product__item-img"
//             style="background-image: url(${element.image})">
//           </div>
//           <h4 class="product__item-label">${element.name}</h4>
//           <span class="product__item-price">${element.price} đ</span>
//           <button type="button" class="product__item-buy">
//             <i class="fas fa-cart-plus"></i>Đặt Mua
//           </button>
//         </a>
//       </div>
//     `;
//   });
//   return renderProducts;
// }