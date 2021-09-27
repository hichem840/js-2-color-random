const span =document.querySelector("span")
const btn=document.querySelector("button")
console.log(btn)
const colors =["red","white","brown","grey","yellow","orange","pink","purple","blue","green","gold","golden","selver"]


btn.addEventListener("click",()=>{
    var randColor = colors[Math.floor(Math.random() * colors.length)];
    span.textContent=randColor
    document.body.style.background=randColor
})
