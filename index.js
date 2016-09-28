const divs = document.querySelectorAll('div')
 
function bubble(e) {
  // stop! that! propagation!
  e.stopPropagation()
 
  console.log(this.firstChild.nodeValue.trim() + ' bubbled')
}
 
for (let i = 0, l = divs.length; i < l; i++) {
  divs[i].addEventListener('click', bubble)
}
