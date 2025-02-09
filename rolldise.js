// let roll=()=>{
// let dice=Math.floor(Math.random()*6+1)
// console.log(dice);
// let dice1=document.querySelector("#dic1");
// let dice2=document.querySelector("#dic2");
// let dice3=document.querySelector("#dic3");
// let dice4=document.querySelector("#dic4");
// let dice5=document.querySelector("#dic5");
// let dice6=document.querySelector("#dic6");
// // let dice7=document.querySelector("#dice7")


// if(dice==1){
//     dice1.Style.opacity="1";
//     dice2.Style.opacity="0";
//     dice3.Style.opacity="0";
//     dice4.Style.opacity="0";
//     dice5.Style.opacity="0";
//     dice6.Style.opacity="0";
//     // dice7.Style.opacity="0"

// }
//  else if(dice==2){
//     dice1.Style.opacity="1";
//     dice2.Style.opacity="1";
//     dice3.Style.opacity="0";
//     dice4.Style.opacity="0";
//     dice5.Style.opacity="0";
//     dice6.Style.opacity="0";
//     //  dice7.Style.opacity="0"

// }
// else if(dice==3)
//     {
//     dice1.Style.opacity="1";
//     dice2.Style.opacity="1";
//     dice3.Style.opacity="1";
//     dice4.Style.opacity="0";
//     dice5.Style.opacity="0";
//     dice6.Style.opacity="0";
//     //  dice7.Style.opacity="0"
    
// }
// else if(dice==4)
//     {
//     dice1.Style.opacity="1";
//     dice2.Style.opacity="1";
//     dice3.Style.opacity="1";
//     dice4.Style.opacity="1";
//     dice5.Style.opacity="0";
//     dice6.Style.opacity="0";
//     // dice7.Style.opacity="0"  
   
// }
// else if(dice==5)
//     {
//         dice1.Style.opacity="1";
//         dice2.Style.opacity="1";
//         dice3.Style.opacity="1";
//         dice4.Style.opacity="1";
//         dice5.Style.opacity="1";
//         dice6.Style.opacity="0";
//         // dice7.Style.opacity="0"
// }
// else if(dice==6){
//     dice1.Style.opacity="1";
//     dice2.Style.opacity="1";
//     dice3.Style.opacity="1";
//     dice4.Style.opacity="1";
//     dice5.Style.opacity="1";
//     dice6.Style.opacity="1";
//     // dice7.Style.opacity="0"
//  }
// }
let rollDice = () => {

    let dice = Math.floor(Math.random() * 6)+1;
    console.log(dice);
    let dic1 = document.querySelector("#dice1");
    let dic2 = document.querySelector("#dice2");
    let dic3 = document.querySelector("#dice3");
    let dic4 = document.querySelector("#dice4");
    let dic5 = document.querySelector("#dice5");
    let dic6 = document.querySelector("#dice6");


    if(dice==1){
        
        dic1.style.opacity = "1";
        dic2.style.opacity = "0";
        dic3.style.opacity = "0";
        dic4.style.opacity = "0";
        dic5.style.opacity = "0";
        dic6.style.opacity = "0";

    }else if(dice==2){
        dic1.style.opacity = "1";
        dic2.style.opacity = "1";
        dic3.style.opacity = "0";
        dic4.style.opacity = "0";
        dic5.style.opacity = "0";
        dic6.style.opacity = "0";
    }  
       else if(dice==3){
    
        dic1.style.opacity = "1";       
          dic2.style.opacity ="1";
        dic3.style.opacity = "1";
        dic4.style.opacity = "0";
        dic5.style.opacity = "0";
        dic6.style.opacity = "0";
        
     }
       else if(dice==4){
        dic1.style.opacity = "1";       
        dic2.style.opacity = "1";
        dic3.style.opacity = "1";
        dic4.style.opacity = "1";
        dic5.style.opacity = "0";
        dic6.style.opacity = "0";

    }
    else if(dice==5){
        dic1.style.opacity = "0";
        dic2.style.opacity = "1";
        dic3.style.opacity = "1";
        dic4.style.opacity = "1";
        dic5.style.opacity = "1";
        dic6.style.opacity = "1"
    }
    else if(dice==6){
        dic1.style.opacity = "1";
        dic2.style.opacity = "1";
        dic3.style.opacity = "1";
        dic4.style.opacity = "1";
        dic5.style.opacity = "1";
        dic6.style.opacity = "1";
    
    } 
 }
