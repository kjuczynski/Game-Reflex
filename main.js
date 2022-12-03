const colors = ['orange', 'pink','black', 'blue', 'green', 'red', 'white', 'yellow', 'brown', 'rose', 'grey']

let timer = null; 

let intervalTime = 2000;

const changeColors = (intervalTimer) =>{
                
    clearInterval(timer);
            
    timer = setInterval(()=>{
        const divDisplay = document.querySelector('.display')

        let newColor = divDisplay.style.backgroundColor;
        while(newColor === divDisplay.style.backgroundColor){
            newColor = colors[Math.floor(Math.random()*colors.length)];
        }
         divDisplay.style.backgroundColor = newColor

    },intervalTimer)
}

changeColors(intervalTime)


const endGame = (win) => {
    const view = document.querySelector('.match');
    view.style.display = 'none';
    clearInterval(timer);
    intervalTime = 2000;
    if(win === true){
        const buttonWon = document.querySelector('.won');
        buttonWon.style.display = 'inline'
    }
    else{
        const buttonLose = document.querySelector('.lose');
        buttonLose.style.display = 'inline'
    }
}
   

const startNewGame  = () => {
    const view = document.querySelector('.match');
    view.style.display = 'grid'
    const newDivs = document.querySelectorAll('.match div')
    newDivs.forEach((div)=>{
        div.style.backgroundColor = 'white'
        div.classList.add('next')
    })
    const newDisplay = document.querySelector('.display')
    newDisplay.style.backgroundColor = 'white'
    const buttonLose = document.querySelector('.lose')
    buttonLose.style.display = 'none'
    const buttonWon = document.querySelector('.won')
    buttonWon.style.display = 'none'
    const divOne = document.querySelector('.next')
    const randomColorElement = colors[Math.floor(Math.random() * colors.length)]
    divOne.style.backgroundColor = randomColorElement
    changeColors(2000)
    
}


const comparison = () =>{
    const currentDiv = document.querySelector('.next');

    const divDisplay = document.querySelector('.display')

    if(currentDiv.style.backgroundColor === divDisplay.style.backgroundColor){
        currentDiv.classList.remove('next');
        const nextDiv = document.querySelector('.next');

        if(nextDiv){
            const randomColorElement = colors[Math.floor(Math.random()*colors.length)];
            intervalTime = intervalTime - 300;
            nextDiv.style.backgroundColor = randomColorElement
            changeColors(intervalTime);
        }
        else{
            endGame(true);
        }
    }
    else{
        endGame(false);
    }
    

 
}

const play = () =>{
    const divOne = document.querySelector('.next')
    const randomColorElement = colors[Math.floor(Math.random() * colors.length)]
    divOne.style.backgroundColor = randomColorElement;

    const divDisplay = document.querySelector('.display')
    divDisplay.addEventListener('click', comparison)

    const buttonWon = document.querySelector('.won')
    buttonWon.addEventListener('click',startNewGame) 

    const buttonLose = document.querySelector('.lose')
    buttonLose.addEventListener('click',startNewGame)
}
play()


