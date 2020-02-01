console.log("-index.js-");

//---------------------------------
// using DOM API
//---------------------------------


var box = document.querySelector('.alert')
var nextBtn = document.querySelector('.btn-dark')
var hideBtn = document.querySelector('.btn-danger')

nextBtn.addEventListener('click', e => {
    box.innerHTML = "Learn Angular"
    box.style.backgroundColor = "#DEF"
})
hideBtn.addEventListener('click',e=>{
    box.style.display="none"
})

//---------------------------------
// using DOM API + XHR/FETCH Api
//---------------------------------

var todosBtn = document.getElementById("todos-btn")
todosBtn.addEventListener('click', e => {
    let apiUrl = "https://jsonplaceholder.typicode.com/todos?_limit=5"
    let promise = fetch(apiUrl)
    promise
        .then(response => response.json())
        .then(todos => {
            document.querySelector('.badge').innerHTML = ""
            let todoElements=todos.map(todo => {
                return `
                    <li class="list-group-item">
                        <span class="badge badge-dark">${todo.id}</span>
                        <span>${todo.title}</span>
                        <span>${todo.completed}</span>
                    </li>
                `
            })
            document.getElementById("todos").innerHTML=todoElements.join(" ")
        })
    document.querySelector('.badge').innerHTML = "Loading todos.."

})


//---------------------------------
// using DOM API + Timer API
//---------------------------------

let timeElement=document.querySelector(".badge-danger");
setInterval(()=>{
    timeElement.innerText=new Date().toLocaleTimeString('en-US',{timeZone:'Asia/Kolkata'})
},1000)


