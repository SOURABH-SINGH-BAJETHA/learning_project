let boxes = document.querySelectorAll(".box");
let reset = document.querySelector(".reset");
let winner = document.querySelector(".winner");
let new_game = document.querySelector(".new");


let turn = true; // true for playerX   , false for playerO

let arr = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
];

boxes.forEach((box)=>{
    box.addEventListener("click",()=>{

        if(turn == true){
            turn = false;
            box.innerText="X"
            
        }
        else{
            turn = true;
            box.innerText="O"
        }

        box.disabled = true;

        check_winnner();

    });
});


const check_winnner = ()=>{
    
    for(let pattern of arr){
        let pat1 = boxes[pattern[0]].innerText;                  //important line
        let pat2 = boxes[pattern[1]].innerText;
        let pat3 = boxes[pattern[2]].innerText;


        if(pat1 != "" && pat2 != "" && pat3 != ""){
            if(pat1 == pat2 && pat2 == pat3){
               
                show_winner(pat1);
                
                
            }
        }

    }


};

const show_winner = (pat1) =>{
    
    disable();
    winner.innerText = `Winner is ${pat1}`;                        // imporatant line
    winner.classList.remove("chora");                              // important line
    
}

const disable = ()=>{

    for(let box of boxes){
        box.disabled = true;
    }

};

const enable = ()=>{

    for(let box of boxes){
        box.disabled = false;
        box.innerText = "";
    }

};

const reset_game = ()=>{
    
    turn = true;
    enable();
    winner.classList.add("chora");  
    

};

reset.addEventListener("click",reset_game);
new_game.addEventListener("click",reset_game);



