// write your code here

let ramenMenu = document.querySelector("#ramen-menu");
getAllRamen();

function getAllRamen(){
    fetch("http://localhost:3000/ramens")
    .then(response => response.json())
    .then(data => ramenItems(data))
}


function ramenItems(data){
    data.forEach(ramen => {
        renderImage(ramen);
        console.log(ramen);
    });
}

function renderImage(ramen){
    let img = document.createElement("img")
    img.src = ramen.image 
    img.alt = ramen.name 
    img.dataset.id = ramen.id 
    ramenMenu.append(img)

    img.addEventListener("click", function(event){
                getRamen(event.target.dataset.id);
    })
}



function getRamen(ramenId){
    fetch(`http://localhost:3000/ramens/${ramenId}`)
    .then(response => response.json())
    .then(ramen => {
        renderDetails(ramen)
    })
}