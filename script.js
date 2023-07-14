const boxs=document.querySelectorAll('.box');
const statustxt=document.querySelector('#status');
const restart=document.querySelector('#restart');
 let x="<img style=width:75px; src='X image.jpg'>";
 let o="<img style=width:75px; src='O image.jpg'>";


const win=[
    [0,1,2],[3,4,5],[6,7,8],[0,3,6]
    ,[1,4,7],[2,5,8],[0,4,8],[2,4,6]
];

let options=["","","","","","","","",""];

let currentPlayer=x;
let player="x";
let running=false;

//intial start
init();

function init(){
    boxs.forEach(box=>box.addEventListener('click',boxclic));
    running=true;
    restart.addEventListener('click',reestart);
    statustxt.textContent=`${player} your turn`;

}
 function boxclic(){
    const index=this.dataset.index;
    if(options[index]!="" || !running){
        return;
    }
    updatebox(this,index);
    checwinner()
 }
 function updatebox(box,index){
       options[index]=player;
    box.innerHTML=currentPlayer;

     
 }
 function checwinner(){
            let isWon=false;
            for(let i=0;i<win.length;i++){
                const condition=win[i]; //[0,1,2]
                const box1=options[condition[0]]; //x
                const box2=options[condition[1]]; 
                const box3=options[condition[2]]; 
            
            if(box1=="" || box2==""|| box3==""){
                continue;
            }
            if(box1==box2 && box2==box3){
                isWon=true;
            }
        }
        if(isWon){
            statustxt.textContent=`${player} Won...`;
            running= false;
        }
        else if(!options.includes("")){
            statustxt.textContent='Game Draw...!'
        }
        else{
            chagePlayer();
        }


 }
 function chagePlayer(){
    player=(player=='x')?'o':'x';
    currentPlayer=(currentPlayer==x) ? o:x;
    statustxt.textContent=`${player} your turn`;


      

 }
 function reestart(){
     options=["","","","","","","","","",""];

     currentPlayer=x;
     player="x";
     running=true;
    statustxt.textContent=`${player} your turn`;

    boxs.forEach(box=>{
        box.innerHTML="";
    });


 }
/// features
  //  animation
  //  bung  match  draw funtion
  
 