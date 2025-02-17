let senddata=()=>{
localStorage.setItem("name","himanshi")
localStorage.setItem("age","20")
localStorage.setItem("course","btech")
localStorage.setItem("branch","cse")
// ========================================================
let b=document.querySelector("#name")
localStorage.setItem("name","himanshi")
localStorage.setItem("age","20")

}
let show=document.querySelector("#h1")
show.innerHTML=localStorage.getItem("name")
// =======================================
let rem=()=>{
    localStorage.removeItemItem("name")
    localStorage.clear()
    location.reload()
// let a=document.querySelector("#h1")

// a.innerHTML=localStorage.removeItem("name")
}