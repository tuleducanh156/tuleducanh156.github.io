$(document).ready(function(){
    $("a.add-to-cart").click(function(){
         var getId = $(this).closest(".single-products").attr('id');
          var h2 = $(this).closest(".overlay-content").find("h2").text();
          var p = $(this).closest(".overlay-content").find("p").text();
         var img = $(this).closest(".single-products").find("img").attr("src");
         var flag = true;
         var objcha = {};
         var objcon = {};
         if(localStorage.getItem('demo')){
             objcha = JSON.parse(localStorage.getItem('demo'));
        
            Object.keys(objcha).map((key,value)=>{ 
                if(getId==key){ 
                    objcha[key]['qty']= objcha[key]['qty'] +1 
                    flag = false;
                    console.log(objcha[key]['qty'])
                }
            })
        }
         if (flag) {
            objcon = {
             'title': p,
             'price': h2,
             'image': img,
             'qty' : 1,
             'total':h2
         }
         objcha[getId] = objcon;
         }
         localStorage.setItem('demo', JSON.stringify(objcha))
         var sosp = localStorage.length('demo');
        $('.fa-shopping-cart').text(sosp)
         console.log(sosp)
         console.log(objcha);
         return false;
    })

});