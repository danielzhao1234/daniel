const changeColor = document.getElementById('changeColor');

changeColor.addEventListener('mouseover', () => {

    document.body.style.backgroundColor = 'lightgreen';

    console.log('mouseOver');
}); changeColor.addEventListener(

    'mouseout',

    () => (document.body.style.backgroundColor = 'white'));


let currentColorIndex = 0;
function changeButton() {
    const colorArray = ["blue", "green", "red", "orange"];
    if (currentColorIndex === (colorArray.length - 1)) { currentColorIndex = 0 } else { currentColorIndex++; }
    document.getElementById('button1').style.backgroundColor = colorArray[currentColorIndex];
}



let counterValue = 0; function count() {
    counterValue++; const countElement = document.querySelector("#countDisplay");
    countElement.textContent = "Number of People Submited:" + counterValue;
}

