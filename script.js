const form = document.querySelector('form')
const input = document.querySelector('input')
const button = document.querySelector('button')
const spanContent = document.getElementById('content')

form.addEventListener("submit", (event)=> {
    event.defaultPrevented()
    spanContent.innerText = "teste"
    
})



