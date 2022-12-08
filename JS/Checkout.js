let checking = JSON.parse(localStorage.getItem('done')) ?
JSON.parse(localStorage.getItem('done')) : [
    {
        id: 1,
        VinylImage:"",
        VinylsTitle:"",
        VInylName:"",
        VinylPrice:"",
    },
    {
        id: 2,
        VinylImage:"",
        VinylsTitle:"",
        VInylName:"",
        VinylPrice:"",
    },
    {
        id: 3,
        VinylImage:"",
        VinylsTitle:"",
        VInylName:"",
        VinylPrice:"",
    },
    {
        id: 4,
        VinylImage:"",
        VinylsTitle:"",
        VInylName:"",
        VinylPrice:"",
    },
];
// function displayAdjustments(){
//     Object.keys(admin).forEach((album)=> {
//         document.querySelector('.content').innerHTML +=
//         `<tr>
//         <th scope="row">${admin[album].id}</th>
//         <td><img class="addpic" src="${admin[album].VinylImage}" class="card-img-top" alt="..."></td>
//         <td>${admin[album].VinylsTitle}</br></td>
//         <td>R ${admin[album].VinylPrice}</td>
//       </tr>`
// })
// }
// displayAdjustments();
checking.addEventListener('btn',(e)=>{
    e.preventDefault();
 // Push an Object into an array 
 checking.push(
        {
            id,
            VinylImage,
            VinylsTitle,
            VInylName,
            VinylPrice
        }
    )
    localStorage.setItem('done', JSON.stringify(checking));
    })