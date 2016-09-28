// const main = document.getElementsByTagName('main')[0];

// main.addEventListener('click', function(event){
//   alert("I was clicked!");
// })

const main = document.getElementById('main')
 
main.addEventListener('click', function(event) {
  alert('I was clicked!')
})

const input = document.querySelector('input')
 
input.addEventListener('keydown', function(e) {
  console.log(e.which)
})