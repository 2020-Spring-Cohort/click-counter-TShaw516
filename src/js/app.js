const updateClickCounter = (clickCounterElement, clickCounterObject) => {
    clickCounterElement.innerText = clickCounterObject.getClicks();
}

const makeAddClickButton = (addClickElement, clickCounterElement, clickCounterObject) => {
    addClickElement.addEventListener('click', ()=>{
        clickCounterObject.addClick();
        updateClickCounter(clickCounterElement, clickCounterObject);
    })
}

const updateCompanionCounter = (clickCounterElement, clickCounterObject) => {
    clickCounterElement.innerText = clickCounterObject.getClicks();
}

const makeAddCompanionButton = (addClickElement, clickCounterElement, clickCounterObject) => {
    addClickElement.addEventListener('click', ()=>{
        clickCounterObject.addClick();
        updateClickCounter(clickCounterElement, clickCounterObject);
    })
}

const addClickElement = document.querySelector('.add-click__add-click');
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