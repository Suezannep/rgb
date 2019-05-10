let colors = ["rgb(255, 0, 0)",
      "rgb(255, 255, 0)",
      "rgb(0, 255, 0)",
      "rgb(0, 255, 255)",
      "rgb(0, 0, 255)",
      "rgb(255, 0, 255)"
]

//let squareClick = document.querySelectorAll('.G1');		
let squares = document.querySelectorAll(".G1");
for (let i = 0; i < colors.length; i++) {
      squares[i].style.backgroundColor = colors[i];
      // squares[i].addEventListener('click', function () { 
            // alert('square was clicked');
      // });
      squares[i].addEventListener('click', myAlert);
      //squares.onclick=    
}
function squareClick() {
      let squares = 'rgb (0, 255, 0)'
      squareClick.addEventListener()
}

function myAlert() {
      alert('square was clicked');
}
//document.getElementById("squareClick").addEventListener("click", squareClick);    
//alert("You clicked a square.")
//}
let secretColor = "rgb(0,255,0)";

document.getElementById("secretColor").innerHTML = secretColor;



//let colors = [

//for colors(){

//}    