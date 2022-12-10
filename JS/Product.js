let Vinyl = JSON.parse(localStorage.getItem('Albums')) ?
JSON.parse(localStorage.getItem('Albums')) : [
    {
        id: 1,
        VinylImage:"https://i.postimg.cc/d13G5Bnp/1999-by-Joey-Bada.jpg",
        VinylsTitle:"1999",
        VInylName:"Joey Bada$$",
        VinylPrice: 380,
    },
    {
        id: 2,
        VinylImage:"https://i.postimg.cc/v8r9fsCg/Graduation-by-Kanye-West.jpg",
        VinylsTitle:"Graduation",
        VInylName:"Kanye West",
        VinylPrice: 400,
    },
    {
        id: 3,
        VinylImage:"https://i.postimg.cc/wMCrssvr/Kendrick-Lamar-s-To-Pimp-A-Butterfly-is-finally-getting-a-vinyl-release-The-Vinyl-Factory.jpg",
        VinylsTitle:"To pimp a butterfly",
        VInylName:"Kendrick lamar",
        VinylPrice: 400,
    },
    {
        id: 4,
        VinylImage:"https://i.postimg.cc/W3cFqq4F/Sonder-Son-by-Brent-Faiyaz.jpg",
        VinylsTitle:"Sonder Son",
        VInylName:"Brent Faiyaz",
        VinylPrice: 380,
    },
    {
        id: 5,
        VinylImage:"https://i.postimg.cc/05w6dfS6/More-Life.jpg",
        VinylsTitle:"More life",
        VInylName:"Drake",
        VinylPrice: 380,
    },
    {
        id: 6,
        VinylImage:"https://i.postimg.cc/pXJ9hdNy/PRBLMS-6-LACK.jpg",
        VinylsTitle:"PRBLMS",
        VInylName:"6lack",
        VinylPrice: 290,
    },
    {
        id: 7,
        VinylImage:"https://i.postimg.cc/pTmGr7pX/J-Cole-2014-Forest-Hills-Drive.jpg",
        VinylsTitle:"2014 Forest Hills Drive",
        VInylName:"J cole",
        VinylPrice: 420,
    },
    {
        id: 8,
        VinylImage:"https://i.postimg.cc/yx6MLnNM/100-Album-Covers-From-2016-That-Will-Leave-You-Speechless.jpg",
        VinylsTitle:"Coloring book",
        VInylName:"Chance the rapper",
        VinylPrice: 300,
    },
];
function display(){
    Vinyl.forEach((album)=> {
        document.querySelector('.Albums').innerHTML +=
        `<div class="card" style="width: 18rem;">
        <img src="${album.VinylImage}" class="card-img-top" alt="...">
        <div class="card-body">
          <h3 class="card-title">${album.VinylsTitle}</h3>
          <h5 class="card-name">${album.VInylName}</h5>
          <p class="card-text">Price: R ${album.VinylPrice}</p>
          <a id="Rec" class="btn">Purchase</a>
        </div>
      </div>`
    })
}
display();

localStorage.setItem('Albums', JSON.stringify(Vinyl));

let  PurchaseBtn = [];
localStorage.setItem('checkoutProd', JSON.stringify(PurchaseBtn))

let Rec = [...document.querySelectorAll('#Rec')];

Object.keys(Rec).forEach((Spin)=> {
    Rec[Spin].addEventListener('click',(e)=>{
        e.preventDefault();
    PurchaseBtn.push(Vinyl[Spin]);
    localStorage.setItem('checkoutProd', JSON.stringify(PurchaseBtn))
  })
})