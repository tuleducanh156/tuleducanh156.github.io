function CloseWatch() {
    document.getElementById("input_watch2").style.display = "none";
    document.getElementById("scroll_height2").style.height = "450px";
  }
  
  function showAdd_watch() {
    document.getElementById("scroll_height2").style.height = "280px";
    document.getElementById("addwatch2").style.display = "block";
    document.getElementById("updatewatch2").style.display = "none";
    document.getElementById("input_watch2").style.display = "block";
    document.getElementById("watchAddNameInput").value = "";
    document.getElementById("watchAddNoteInput").value = "";
    document.getElementById("watchAddPriceInput").value = "";
    document.getElementById("watchAddImageInput").value = "";
  }
  
  var watch = JSON.parse(localStorage.getItem("watch"));
  document.getElementById("dem_watch").innerHTML = watch.length;
  
  var account = JSON.parse(localStorage.getItem("account"));
  document.getElementById("dem_cus").innerHTML = account.length;
  var paymentWatch = JSON.parse(localStorage.getItem("paymentWatch"));
  document.getElementById("dem_payment").innerHTML = paymentWatch.length - 1;
  
  var commentCustomer = JSON.parse(localStorage.getItem("commentCustomer"));
  document.getElementById("dem_comment").innerHTML = commentCustomer.length - 1;
  
  // var paymentWatch=[];
  
  var paymentWatch = JSON.parse(localStorage.getItem("paymentWatch"));
  if (paymentWatch === null) {
    paymentWatch = [];
    var paymentWatch = [{}];
    localStorage.setItem("paymentWatch", JSON.stringify(paymentWatch));
  }
  var idupWatch = JSON.parse(localStorage.getItem("idupWatch"));
  if (idupWatch === null) {
    idupWatch = [];
    var idupWatch = 8;
    localStorage.setItem("idupWatch", JSON.stringify(idupWatch));
  }
  
  function AddWatch() {
    var id = idupWatch;
    var name = document.getElementById("watchAddNameInput").value;
    var note = document.getElementById("watchAddNoteInput").value;
    var price = document.getElementById("watchAddPriceInput").value;
    var image2 = document.getElementById("watchAddImageInput").value;
    var image = "img/" + image2.split("\\")[2];
    if (name != "" && price != "" && note != "" && image2 != "") {
      var pushWatch = {
        id,
        name,
        price,
        note,
        image,
      };
      watch.push(pushWatch);
      localStorage.setItem("watch", JSON.stringify(watch));
      idupWatch++;
      localStorage.setItem("idupWatch", JSON.stringify(idupWatch));
      ManagementWatch();
      console.log(watch);
  
      var name = (document.getElementById("watchAddNameInput").value = "");
      var note = (document.getElementById("watchAddNoteInput").value = "");
      var price = (document.getElementById("watchAddPriceInput").value = "");
      var image = (document.getElementById("watchAddImageInput").value = "");
    } else {
      alert("Vui lòng nhập đầy đủ thông tin");
    }
  }
  
  function DeleteWatch(id) {
    for (var i = 0; i < watch.length; i++) {
      if (id == watch[i].id) {
        watch.splice(i, 1);
  
        localStorage.setItem("watch", JSON.stringify(watch));
        ManagementWatch();
      }
    }
  }
  
  function UpdateWatch(id) {
    for (var i = 0; i < watch.length; i++) {
      if (id == watch[i].id) {
        document.getElementById("input_watch2").style.display = "block";
        document.getElementById("addwatch2").style.display = "none";
        document.getElementById("updatewatch2").style.display = "block";
        document.getElementById("txtId").value = watch[i].id;
        document.getElementById("watchAddNameInput").value = watch[i].name;
        document.getElementById("watchAddNoteInput").value = watch[i].note;
        document.getElementById("watchAddPriceInput").value = watch[i].price;
        document.getElementById("watchAddImageInput").value = watch[i].image;
        break;
      }
    }
  }
  
  function SaveUpdateWatch() {
    var idchange = document.getElementById("txtId").value;
  
    for (var i = 0; i < watch.length; i++) {
      if (idchange == watch[i].id) {
        watch[i].name = document.getElementById("watchAddNameInput").value;
        watch[i].price = document.getElementById("watchAddPriceInput").value;
        watch[i].note = document.getElementById("watchAddNoteInput").value;
        var imageChange = document.getElementById("watchAddImageInput").value;
        localStorage.setItem("watch", JSON.stringify(watch));
        if (imageChange == "") {
        } else {
          var image1 = imageChange.split("\\")[2];
          watch[i].image = image1;
        }
  
        if (watch[i].type == 0 && imageChange != "") {
          watch.splice(i, 1);
          localStorage.setItem("watch", JSON.stringify(watch));
          AddWatch();
          ManagementWatch();
        }
        ManagementWatch();
        break;
      }
    }
  
    document.getElementById("watchAddNameInput").value = "";
    document.getElementById("watchAddNoteInput").value = "";
    document.getElementById("watchAddPriceInput").value = "";
    document.getElementById("watchAddImageInput").value = "";
    document.getElementById("addwatch").style.display = "block";
    document.getElementById("updatewatch").style.display = "none";
  }
  
  function ManagementWatch() {
    document.getElementById("prinfManagementWatch").innerHTML = "";
    var watch = JSON.parse(localStorage.getItem("watch"));
    for (let i = 0; i < watch.length; i++) {
      var prinfManage =
        `<tr>
  <td><div>
    <div class="cart_img_box float-left bg-warning" style="width: 30%;height: 80px;">
      <img src="` +
        watch[i].image +
        `" width="100%" height="100%">
    </div>
    <div class="cart_info_box float-left pl-3" style="width: 70%;height: 80px;">
      <p class="mb-1 font-weight-bold" style="font-size: 115%;">` +
        watch[i].name +
        `</p>
      <p style="font-size: 85%">` +
        watch[i].note +
        `</p>
    </div>
  </div> </td>
  
  <td class="text-center"><p class="mt-2" style="padding:5px;">` +
        watch[i].price +
        `</p> </td>
  <td class="text-center">'<div class="btn btn-danger text-white ml-2" onclick="DeleteWatch(` +
        watch[i].id +
        `)" style="width: 16%;border-radius: 10px;"><i class="fa fa-trash" aria-hidden="true"></i></div>
  <div class="btn btn-warning  text-white mr-2" onclick="UpdateWatch(` +
        watch[i].id +
        `)" style="width: 16%;border-radius: 10px;"><i class="fa fa-pencil-square-o" aria-hidden="true"></i></div> </td>
  </tr>`;
      document.getElementById("prinfManagementWatch").innerHTML += prinfManage;
    }
  }
  
  function paymentPrinf() {
    document.getElementById("prinfPayment").innerHTML = "";
  
    var paymentWatch = JSON.parse(localStorage.getItem("paymentWatch"));
    for (let i = 1; i < paymentWatch.length; i++) {
      var prinf_payment_cart =
        `<tr style="border-bottom:1px solid #ccc;">
  <td>
  <p>Tên người nhận: ` +
        paymentWatch[i].name_customer +
        `</p>
  <p>Địa chỉ: ` +
        paymentWatch[i].address_customer +
        `</p>
  <p>Số điện thoại: ` +
        paymentWatch[i].phone_customer +
        `</p>
   <p>Ngân Hàng: ` +
        paymentWatch[i].bank +
        `</p>
  </td>
  
  <td>` +
        paymentWatch[i].showDetailOrder +
        `<p id="commentPrinfPayment` +
        paymentWatch[i].id_payment +
        `"></p></td>
  <td class="text-center">` +
        paymentWatch[i].priceTotal +
        `</td>
  <td class="text-center"><button id="status_prinf` +
        paymentWatch[i].id_payment +
        `" onclick="verify_payment(` +
        paymentWatch[i].id_payment +
        `)" class="btn btn-warning text-white">` +
        paymentWatch[i].status +
        `</button></td>
  </tr>
  `;
      document.getElementById("prinfPayment").innerHTML += prinf_payment_cart;
    }
  }
  
  function paymentPrinfDash() {
    document.getElementById("prinfPaymentDash").innerHTML = "";
  
    var paymentWatch = JSON.parse(localStorage.getItem("paymentWatch"));
    for (let i = 1; i < paymentWatch.length; i++) {
      var prinf_payment_cart =
        `<tr style="border-bottom:1px solid #ccc;">
  
  <td>` +
        paymentWatch[i].showDetailOrder +
        `</td>
  
  </tr>
  `;
      document.getElementById("prinfPaymentDash").innerHTML += prinf_payment_cart;
    }
  }
  
  function verify_payment(id) {
    for (let i = 0; i < paymentWatch.length; i++) {
      if (id == paymentWatch[i].id_payment) {
        paymentWatch[i].status = "Đang giao hàng";
        localStorage.setItem("paymentWatch", JSON.stringify(paymentWatch));
        document.getElementById("status_prinf" + id).innerHTML =
          paymentWatch[i].status;
      }
    }
  }
  
  function commentPrinf() {
    document.getElementById("commentPrinf").innerHTML = "";
  
    var commentCustomer = JSON.parse(localStorage.getItem("commentCustomer"));
    var account = JSON.parse(localStorage.getItem("account"));
    for (let i = 1; i < commentCustomer.length; i++) {
      var prinf_comment =
        `<td>` +
        commentCustomer[i].idPayment +
        `</td>
  <td>` +
        account[commentCustomer[i].idUser].username +
        `</td>
  <td>` +
        commentCustomer[i].content_comment +
        `</td>
  `;
      document.getElementById(
        "commentPrinfPayment" + commentCustomer[i].idPayment
      ).innerHTML = "Phản hồi từ khách: " + commentCustomer[i].content_comment;
      document.getElementById("commentPrinf").innerHTML += prinf_comment;
    }
  }
  
  function CloseUser() {
    document.getElementById("input_user").style.display = "none";
    document.getElementById("scroll_height").style.height = "450px";
  }
  
  function showAddUser() {
    document.getElementById("scroll_height").style.height = "280px";
    document.getElementById("addUser").style.display = "block";
    document.getElementById("updateUser").style.display = "none";
    document.getElementById("input_user").style.display = "block";
    document.getElementById("input_change_user").style.display = "none";
    document.getElementById("watchAddNameInput").value = "";
    document.getElementById("watchAddNoteInput").value = "";
    document.getElementById("watchAddPriceInput").value = "";
    document.getElementById("watchAddImageInput").value = "";
  }
  
  var account_info = [];
  // var account_info =JSON.parse(localStorage.getItem('account_info'));
  if (account_info === null) {
    account_info = [];
  }
  
  var account = [];
  var account = JSON.parse(localStorage.getItem("account"));
  if (account === null) {
    account = [];
  }
  
  var idChangeUser = 0;
  
  function editUserAdmin(id) {
    var account_info = JSON.parse(localStorage.getItem("account_info"));
    document.getElementById("input_user").style.display = "none";
    document.getElementById("input_change_user").style.display = "block";
  
    for (var i = 1; i < account_info.length; i++) {
      if (id == account_info[i].accountPayment) {
        idChangeUser = account_info[i].accountPayment;
        document.getElementById("txtId").value = i;
        document.getElementById("userNameChangeInput").value =
          account_info[i].name_customer;
        document.getElementById("addressChangeInput").value =
          account_info[i].address_customer;
        document.getElementById("phoneChangeInput").value =
          account_info[i].phone_customer;
        document.getElementById("bankChangeInput").value = account_info[i].bank;
  
        break;
      }
    }
  }
  
  function SaveUserAdmin() {
    var account_info = JSON.parse(localStorage.getItem("account_info"));
    for (var i = 0; i < account_info.length; i++) {
      if (idChangeUser == account_info[i].accountPayment) {
        account_info[i].name_customer = document.getElementById(
          "userNameChangeInput"
        ).value;
        account_info[i].address_customer = document.getElementById(
          "addressChangeInput"
        ).value;
        account_info[i].phone_customer = document.getElementById(
          "phoneChangeInput"
        ).value;
        account_info[i].bank = document.getElementById("bankChangeInput").value;
        localStorage.setItem("account_info", JSON.stringify(account_info));
  
        ManagementUser();
  
        break;
      }
    }
  
    document.getElementById("userNameChangeInput").value = "";
    document.getElementById("addressChangeInput").value = "";
    document.getElementById("phoneChangeInput").value = "";
    document.getElementById("bankChangeInput").value = "";
  }
  
  var idup = JSON.parse(localStorage.getItem("idup"));
  
  function AddUser() {
    var checkUsername = 0;
    var id = idup;
    var username = document.getElementById("userNameAddInput").value;
    var password = document.getElementById("passwordAddInput").value;
    var repassword = document.getElementById("rePasswordAddInput").value;
    var level = 0;
    if (
      username != "" &&
      password != "" &&
      repassword != "" &&
      password == repassword
    ) {
      for (let i = 0; i < account.length; i++) {
        if (account[i].username == username) {
          alert("tên tài khoản đã tồn tại");
  
          checkUsername = 1;
          break;
        }
      }
      if (checkUsername == 0) {
        accountSignupAdmin = {
          id,
          username,
          password,
          level,
        };
        account.push(accountSignupAdmin);
        localStorage.setItem("account", JSON.stringify(account));
        idup++;
        localStorage.setItem("idup", JSON.stringify(idup));
        console.log(account);
        alert("đăng ký tài khoản thành công");
        ManagementUser();
      }
    } else {
      alert("Đăng ký chưa thành công");
    }
  }
  
  function deleteUserAdmin(id) {
    var account = JSON.parse(localStorage.getItem("account"));
    for (var i = 0; i < account.length; i++) {
      if (id == account[i].id) {
        account.splice(i, 1);
        localStorage.setItem("account", JSON.stringify(account));
        ManagementUser();
        break;
      }
    }
  }
  
  function ManagementUser() {
    document.getElementById("prinfManagementUser").innerHTML = "";
    var account = JSON.parse(localStorage.getItem("account"));
    for (let i = 0; i < account.length; i++) {
      var prinfManage =
        `<div class="col-4" style="height: 100px;padding:10px; padding-right:50px;">
  <div class="user_info_admin float-left" style="width: 60%">
    <p class="font-weight-bold" style="font-size: 120%">` +
        account[i].username +
        `</p>
    <p>Đơn hàng - 3</p>
  </div>
  <div class="user_function_admin float-right" style="width: 40%;display: flex;">
  <div class="btn btn-warning mr-1 text-white" onclick="editUserAdmin(` +
        account[i].id +
        `)" style="width: 40%;border-radius: 10px;"><i class="fa fa-pencil-square-o" aria-hidden="true"></i></div>
    <div class="btn btn-danger text-white" onclick="deleteUserAdmin(` +
        account[i].id +
        `)" style="width: 40%;border-radius: 10px;"><i class="fa fa-trash" aria-hidden="true"></i></div>
  
  
  </div></div>`;
      document.getElementById("prinfManagementUser").innerHTML += prinfManage;
    }
  }
  
  function onloadAll1() {
    paymentPrinf();
    ManagementWatch();
    paymentPrinfDash();
    ManagementWatch2();
    commentPrinf();
    ManagementUser();
  }
  
  $(document).ready(function () {
    $("#add_watch3").click(function () {
      $("#management_watch").css("font-weight", "bold");
      $("#dashboard_text").css("font-weight", "400");
      $("#management_order").css("font-weight", "400");
      $("#management_user").css("font-weight", "400");
  
      $("#management_watch_box").css("display", "block");
      $("#dashboard_box").css("display", "none");
      $("#management_watch_order").css("display", "none");
      $("#management_user_box").css("display", "none");
    });
  });
  
  $(document).ready(function () {
    $("#management_watch").click(function () {
      $("#management_watch").css("font-weight", "bold");
      $("#dashboard_text").css("font-weight", "400");
      $("#management_order").css("font-weight", "400");
      $("#management_user").css("font-weight", "400");
  
      $("#management_watch_box").css("display", "block");
      $("#dashboard_box").css("display", "none");
      $("#management_watch_order").css("display", "none");
      $("#management_user_box").css("display", "none");
    });
  });
  $(document).ready(function () {
    $("#dashboard_text").click(function () {
      $("#dashboard_text").css("font-weight", "bold");
      $("#management_order").css("font-weight", "400");
      $("#management_user").css("font-weight", "400");
      $("#management_watch").css("font-weight", "400");
  
      $("#management_watch_box").css("display", "none");
      $("#dashboard_box").css("display", "block");
      $("#management_watch_order").css("display", "none");
      $("#management_user_box").css("display", "none");
    });
  });
  $(document).ready(function () {
    $("#management_order").click(function () {
      $("#management_order").css("font-weight", "bold");
      $("#management_user").css("font-weight", "400");
      $("#management_watch").css("font-weight", "400");
      $("#dashboard_text").css("font-weight", "400");
  
      $("#management_watch_box").css("display", "none");
      $("#dashboard_box").css("display", "none");
      $("#management_watch_order").css("display", "block");
      $("#management_user_box").css("display", "none");
    });
  });
  $(document).ready(function () {
    $("#management_user").click(function () {
      $("#management_user").css("font-weight", "bold");
      $("#management_watch").css("font-weight", "400");
      $("#dashboard_text").css("font-weight", "400");
      $("#management_order").css("font-weight", "400");
  
      $("#management_watch_box").css("display", "none");
      $("#dashboard_box").css("display", "none");
      $("#management_watch_order").css("display", "none");
      $("#management_user_box").css("display", "block");
    });
  });
  