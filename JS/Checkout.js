let tab2 = document.querySelector(".done");
let CheckoutPg = JSON.parse(localStorage.getItem("checkoutProd"));
Object.keys(CheckoutPg).forEach((Spin)=> {
   document.querySelector('.done').innerHTML +=
    `  <div class="overflow-auto">
    <tr>
    <td><img class="addpic" src="${CheckoutPg[Spin].VinylImage}" class="card-img-top" alt="..."></td>
    <td>${CheckoutPg[Spin].VinylsTitle} <br>${CheckoutPg[Spin].VInylName}</br></td>
    <td>R ${CheckoutPg[Spin].VinylPrice}</td>
    <td></td> 
  </tr>
  </div>`
});
