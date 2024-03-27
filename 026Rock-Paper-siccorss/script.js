let choices = document.querySelectorAll(".option");
let board = document.querySelector(".score_info");
let info = document.querySelector(".info");
let user_score = document.querySelector("#user_score");
let comp_score = document.querySelector("#comp_score");
let comp_point = 0;
let user_point = 0;

const winner = (comp_check,comp_choice,user_check) =>{
    if(comp_check){
        comp_point++;
        board.innerText = `Comp is the winner , comp choosed : ${comp_choice}`;
        info.style.backgroundColor = "red";
        comp_score.innerText = comp_point;
    }
    else{
       user_point++;   
       board.innerText = `You Win , comp choosed : ${comp_choice}`;
       info.style.backgroundColor = "green";
       user_score.innerText = user_point;
    }
}
const get_comp_choice = ()=>{
    
    let element = ["rock","paper","scissors"];
    let comp_choice = Math.floor(Math.random()*3);
    return element[comp_choice];

}

const check_winnner = (user_choice,comp_choice) =>{
    let comp_check = false;
    let user_check = false;
    if(user_choice == "scissors"){
        if(comp_choice == "rock"){
            console.log("comp is winner");
            comp_check = true;
        }
        else{
            console.log("You are winner ! ");
            user_check = true
        }
    }
    else if (user_choice == "rock"){
        if(comp_choice == "paper"){
            console.log("comp is winner");
            comp_check = true;
        }
        else{
            console.log("You are winner ! ");
            user_check = true;
        }

    }
    else{
        if(comp_choice == "scissors"){
            console.log("comp is winner");
            comp_check = true;
        }
        else{
            console.log("You are winner ! ");
            user_check = true;
        }
    }

    winner(comp_check,comp_choice,user_check);
    
}

const draw = () => {
    console.log("It's a Draw");
    board.innerHTML = "It's a Draw ";
    info.style.backgroundColor = "grey";
    
}

const playGame = (user_choice,comp_choice) =>{

    if(user_choice == comp_choice){
        draw();
    }
    else{
       check_winnner(user_choice,comp_choice);   
    }
}

choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        
        //user choice : 
        let user_choice = choice.getAttribute("id");
        console.log(`option selected was : ${user_choice}`);
        //comp choice : 
        let comp_choice = get_comp_choice();
        console.log(`computuer choice : ${comp_choice}`);
        //check winner : 
        playGame(user_choice,comp_choice);

    });
});