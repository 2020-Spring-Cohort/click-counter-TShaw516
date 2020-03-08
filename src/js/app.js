const updateSpeedometer = (speedometerElement, carObject) => {
    speedometerElement.innerText = carObject.getSpeed();
}

const makeAcceleratorButton = (acceleratorElement, speedometerElement, carObject) => {
    acceleratorElement.addEventListener('click', ()=>{
        carObject.accelerate();
        updateSpeedometer(speedometerElement, carObject);
    })
}

const addClickElement = document.querySelector('.floorboard__accelerator');
const speedometerElement = document.querySelector('.dashboard__speedometer');
const appClickCounter = new ClickCounter();

makeAcceleratorButton(acceleratorElement, speedometerElement, appCar);
updateSpeedometer(speedometerElement, appCar);