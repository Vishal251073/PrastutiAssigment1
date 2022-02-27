// alert("Me Working");

var topBackground = document.querySelector('.upperHalf');
var rgbPattern = document.getElementById('displayRGB');
var message = document.getElementById('message');
var easy = document.getElementById('easy');
var hard = document.getElementById('hard');
var squares = document.querySelectorAll('.square');
var playagain = document.querySelector('#play');

var colorArray = [];
var answerColor;


for(let i=0;i<6;i++)
{
    var color = randomColor();
    colorArray.push(color);
}
selectRandomColor();
rgbPattern.textContent = answerColor;
for(let i=0;i<6;i++)
{
    squares[i].style.backgroundColor = colorArray[i];
}

easy.addEventListener('click',()=>{
    colorArray = [];
    for(let i=0;i<3;i++)
    {
        var color = randomColor();
        colorArray.push(color);
    }
    console.log(colorArray);
    selectRandomColor();
    console.log(answerColor)
    rgbPattern.textContent = answerColor;
    for(let i=0;i<3;i++)
    {
        squares[i].style.backgroundColor=colorArray[i]
    }
    for(let i=3;i<6;i++)
    {
        squares[i].style.display = "none";
    }
})






for(let i=0;i<colorArray.length;i++)
{
    squares[i].addEventListener('click',()=>{
        // alert('Hello')
        var currColor = squares[i].style.backgroundColor;
        console.log(answerColor,currColor);
        if(currColor===answerColor)
        {
            // alert("KO")
            topBackground.style.backgroundColor = currColor;
            for(let i=0;i<colorArray.length;i++)
            {
                squares[i].style.backgroundColor = currColor;
            }
            message.textContent = "Congratulations!!🎉";
            playagain.textContent = "Play Again!!"
        }
        else{
            squares[i].style.backgroundColor =  '#121212';
            message.textContent = "Try Again!!!"
        }


    })
}

function randomColor(){

    var r = Math.floor(Math.random()*256);
    var g = Math.floor(Math.random()*256);
    var b = Math.floor(Math.random()*256);
    
    return ("rgb(" + r + ", " + g + ", " + b + ")");	
}

function selectRandomColor(){
    var index = Math.floor(Math.random()*colorArray.length);
    answerColor = colorArray[index];
}


randomColor();