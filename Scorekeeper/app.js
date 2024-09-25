const p1button=document.querySelector('#p1button');
const p2button=document.querySelector('#p2button');
const p1display=document.querySelector('#p1display');
const p2display=document.querySelector('#p2display');
const winningscoreselect=document.querySelector('#playto');
const reset=document.querySelector('#reset');
let p1score=0;
let winningscore=5;
let isGameover=false;
p1button.addEventListener('click',function(){
    if(isGameover===false){
        p1score+=1;
   if(p1score===winningscore){
     isGameover=true;
     p1display.classList.add("winner");
     // it is similar to <h1 class='winner'>{0}</h1>
     p2display.classList.add('loser');
    
   }
   p1display.textContent=p1score;
}
});
let p2score=0;
p2button.addEventListener('click',function(){
    if(isGameover===false){
        p2score+=1;
   if(p2score===winningscore){
    p1display.classList.add('loser');
    p2display.classList.add('winnner');
     isGameover=true;
    }
   p2display.textContent=p2score;
}
});
 
winningscoreselect.addEventListener('change',function(){
    // alert("changed");
    winningscore=parseInt(this.value);
    resetfun();
})

reset.addEventListener('click',resetfun);

function resetfun(){
    p1score=0;
    p2score=0;
    p1display.textContent=p1score;
    p2display.textContent=p2score;
    isGameover=false;
    p1display.classList.remove('winner','loser');
    p2display.classList.remove('winner','loser');
}



