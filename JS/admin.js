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
function displayAdjustments(){
    Object.keys(Vinyl).forEach((album)=> {
        document.querySelector('.Albums').innerHTML +=
        `<tr>
        <th scope="row">${Vinyl[album].id}</th>
        <td><img class="addpic" src="${Vinyl[album].VinylImage}" class="card-img-top" alt="..."></td>
        <td>${Vinyl[album].VinylsTitle} <br>${Vinyl[album].VInylName}</br></td>
        <td>R ${Vinyl[album].VinylPrice}</td>
        <td><button type="button" class="butt btn-light">Edit</button><button type="button" onclick = "Erase(${Vinyl[album].id})" class="del btn-light">Delete</button></td>
        
      </tr>`
})
}
displayAdjustments();
localStorage.setItem('Albums', JSON.stringify(Vinyl));

// delete button 
function Erase(id) {
localStorage.setItem('Albums', JSON.stringify(Vinyl));
document.querySelector('#del');
Vinyl.splice(id-1, 1)
localStorage.setItem('Albums', JSON.stringify(Vinyl))
location.reload()
}



// Add button 
let confirm= document.querySelector('.confirm') 
confirm.addEventListener('click',(e)=>{
e.preventDefault();

let id = document.querySelector('#Vinylid').value;
let VinylImage = document.querySelector('#VinylCover').value;
let VinylsTitle = document.querySelector('#VinylTitle').value;
let VInylName = document.querySelector('#Artists').value;
let VinylPrice = document.querySelector('#Pricing').value;


// Push an Object into an array 
Vinyl.push(
    {
        id,
        VinylImage,
        VinylsTitle,
        VInylName,
        VinylPrice
    }
)
localStorage.setItem('Albums', JSON.stringify(Vinyl));
console.table(JSON.parse(localStorage.Albums))
location.reload()
});
localStorage.setItem('Albums', JSON.stringify(Vinyl));

// edit btn
