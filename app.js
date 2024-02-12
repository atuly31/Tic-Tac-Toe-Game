let boxes = document.querySelectorAll(".box");
let resetbtn = document.querySelector("#reset");
let newbtn = document.querySelector("#new-btn");
let messcon = document.querySelector(".mess");
let mess = document.querySelector("#para");
let turnO = true; 
let count = 0; 

const winPatterns = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [3, 4, 5],
  [6, 7, 8],
];

boxes.forEach(box);

function box (box1){ 
    box1.addEventListener("click", clicked);
    function clicked(){
        console.log("clicked");
        if(turnO === true){
            box1.innerText = 'O';
            box1.style.backgroundColor = "#4cbfa6";
            turnO = false;
        }
        else{
            box1.innerText = 'X';
            turnO = true;
            box1.style.backgroundColor = "#CADCFC";
        }

        box1.disabled = true;

        checkwinner();
    }
};

function resetgame(){

    turnO = true;
    count =0;
    mess.classList.add("hide")
    enable();

};

function enable(){
    boxes.forEach(box);
    function box(box1) {
          box1.disabled = false;
          box1.innerText ="";
    }
};

function disable(){
    boxes.forEach(box);
    function box(box1) {
          box1.disabled = true;
          
    }
};

function showwinner (winner){
    mess.innerText = `Congratulations, Winner is ${winner}`;
    messcon.classList.remove("hide");
   disable();
};


    

const checkwinner = () =>{
    for(let pattern of winPatterns){
        let posval1 = boxes[pattern[0]].innerText;
        let posval2 = boxes[pattern[1]].innerText;
        let posval3 = boxes[pattern[2]].innerText;

        if(posval1 != "" && posval2 != "" && posval3!= ""){
            if(posval1 === posval2 && posval2=== posval3) {

               
                showwinner(posval1);
                return true;
            }
        }
    }

};

resetbtn.addEventListener("click",resetgame);

newbtn.addEventListener("click",resetgame);
