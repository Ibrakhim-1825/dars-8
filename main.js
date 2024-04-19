const box  = document.querySelector(".box");
const list =document.querySelector(".list");

const render = (user1) => {
    box.innerHTML = user1.map((item) => (`<div class = "card">
        <h1>${item.name}</h1>
        <button data-id ="${item.id}">add</button>
    </div>`)).join("")
};

const render2 = (user2) => {
    list.innerHTML += `
      <div>
      <p>${user2.name}</p>
      </div>
    `
}



const getDAte = () => {
    fetch("https://jsonplaceholder.typicode.com/users/").then((res) => res.json()).then((data) => {
        render(data);
    })
};

getDAte();

let arr =[];
box.addEventListener("click" , (e) => {

    if(e.target.dataset.id){
        fetch(`https://jsonplaceholder.typicode.com/users/${e.target.dataset.id}`).then((res) => res.json()).then((data) => {
            arr.push(data)
            localStorage.setItem("user",JSON.stringify(arr) )
            render2(data);
        })
    }

});
