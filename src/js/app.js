const updateClickCounter = (clickCounterElement, clickObject) => {
    speedometerElement.innerText = clickObject.getClicks();
}

const makeAddClickButton = (addClickElement, clickCounterElement, clickObject) => {
    acceleratorElement.addEventListener('click', ()=>{
        clickObject.addClick();
        updateClickCounter(clickCounterElement, clickObject);
    })
}

const addClickElement = document.querySelector('.click-counter__clicks');
const addCompanionElement = document.querySelector('.add-helper__add-companion');
const addCompounderElement = document.querySelector('.add-helper__add-compounder');
const clickCounterElement = document.querySelector('.click-counter__clicks');
const companionCounterElement = document.querySelector('click-counter__companions');
const compounderCounterElement = document.querySelector('click-counter__compounders')
const appClickCounter = new ClickCounter();

makeAddClickButton(addClickElement, clickCounterElement, appClickCounter);
updateClickCounter(clickCounterElement, appClickCounter);

makeAddCompanionButton(addCompanionElement, companionCounterElement, appClickCounter);
updateCompanionCounter(companionCounterElement, appClickCounter);

makeAddCompounderButton(addCompounderElement, compounderCounterElement, appClickCoutner);
updateCompanionCounter(compounderCounterElement, appClickCounter);