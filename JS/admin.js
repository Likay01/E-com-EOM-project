let admin = JSON.parse(localStorage.getItem('content')) ?
JSON.parse(localStorage.getItem('content')) : [
    {
        id: 1,
        VinylImage:"https://i.postimg.cc/d13G5Bnp/1999-by-Joey-Bada.jpg",
        VinylsTitle:"1999",
        VInylName:"Joey Bada$$",
        VinylPrice: 180,
    },
    {
        id: 2,
        VinylImage:"https://i.postimg.cc/v8r9fsCg/Graduation-by-Kanye-West.jpg",
        VinylsTitle:"Graduation",
        VInylName:"Kanye West",
        VinylPrice: 200,
    },
    {
        id: 3,
        VinylImage:"https://i.postimg.cc/wMCrssvr/Kendrick-Lamar-s-To-Pimp-A-Butterfly-is-finally-getting-a-vinyl-release-The-Vinyl-Factory.jpg",
        VinylsTitle:"To pimp a butterfly",
        VInylName:"Kendrick lamar",
        VinylPrice: 200,
    },
    {
        id: 4,
        VinylImage:"https://i.postimg.cc/W3cFqq4F/Sonder-Son-by-Brent-Faiyaz.jpg",
        VinylsTitle:"Sonder Son",
        VInylName:"Brent Faiyaz",
        VinylPrice: 180,
    },
    {
        id: 5,
        VinylImage:"https://i.postimg.cc/05w6dfS6/More-Life.jpg",
        VinylsTitle:"More life",
        VInylName:"Drake",
        VinylPrice: 220,
    },
    {
        id: 6,
        VinylImage:"https://i.postimg.cc/pXJ9hdNy/PRBLMS-6-LACK.jpg",
        VinylsTitle:"PRBLMS",
        VInylName:"6lack",
        VinylPrice: 170,
    },
    {
        id: 7,
        VinylImage:"https://i.postimg.cc/pTmGr7pX/J-Cole-2014-Forest-Hills-Drive.jpg",
        VinylsTitle:"2014 Forest Hills Drive",
        VInylName:"J cole",
        VinylPrice: 230,
    },
    {
        id: 8,
        VinylImage:"https://i.postimg.cc/yx6MLnNM/100-Album-Covers-From-2016-That-Will-Leave-You-Speechless.jpg",
        VinylsTitle:"Coloring book",
        VInylName:"Chance the rapper",
        VinylPrice: 170,
    },
];
function displayAdjustments(){
    Object.keys(admin).forEach((album)=> {
        document.querySelector('.content').innerHTML +=
        `<tr>
        <th scope="row">${admin[album].id}</th>
        <td><img class="addpic" src="${admin[album].VinylImage}" class="card-img-top" alt="..."></td>
        <td>${admin[album].VinylsTitle} <br>${admin[album].VInylName}</br></td>
        <td>R ${admin[album].VinylPrice}</td>
        <td><button type="button" class="butt btn-light">Edit</button><button type="button" onclick = "Erase()" class="del btn-light">Delete</button></td>
        <td></td>
      </tr>`
})
}
displayAdjustments();
localStorage.setItem('content', JSON.stringify(admin));

// delete button 
function Erase(){
    document.querySelector(".content").deleteRow(0);
}
