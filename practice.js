function calcul(val){
  document.querySelector("#display").value += val;
}

function clr(){
  document.querySelector("#display").value = " ";
}

function DE(){
  document.querySelector("#display").value = document.querySelector("#display").value.slice(0,-1);
}

function solve(){
 let x= document.querySelector("#display").value;
 let y = eval(x);
 document.querySelector("#display").value=y;
}
// /=====================================
let store=""
let cal=(value)=>{
    store=store+value   //1  =>"12+5"
    let show=document.querySelector("#display")
    show.innerHTML=store
}
let res=()=>{
    let show=document.querySelector("#display")
     show.innerHTML=eval(store)   //"12+5"   =>17 number
     store=eval(store)
    // method(to string )============== convert number into string
    store=toString()//17 string
}
// =====================================all clear===========================
let ac=()=>{  
store=""
let show=document.querySelector("#display")
     show.innerHTML=(store)
     


}

// =========================delete **(slice) string method========================== 
let del=()=>{
  store=store.slice(0,-1)
  let show=document.querySelector("#display")
  show.innerHTML=(store)
}
let sq=()=>{
  store=store*2
  let show=document.querySelector("#display")
  show.innerHTML=(store)
}
