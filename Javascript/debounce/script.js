const input=document.querySelector("#input")
const button=document.querySelector("#button")
const time=document.querySelector("#time")
const usertext=document.querySelector("usertext")
let timeoutId;
console.log(time.value)
button.addEventListener("click",()=>{
console.log("clicked")
if (timeoutId) {
    clearTimeout(timeoutId);
  }
   timeoutId =setTimeout(()=>{
        console.log("enter here")
        usertext.innerHTML="input"
        
    },parseInt(time.value))
    clearTimeout(time)
})