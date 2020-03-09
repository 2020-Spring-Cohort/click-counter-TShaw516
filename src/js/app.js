const addClickElement = document.querySelector('.add-click__add-click');
const addCompanionElement = document.querySelector('.add-helper__add-companion');
const addCompounderElement = document.querySelector('.add-helper__add-compounder');
const clickCounterElement = document.querySelector('.click-counter__clicks');
const companionCounterElement = document.querySelector('.click-counter__companions');
const compounderCounterElement = document.querySelector('.click-counter__compounders');
const appClickCounter = new ClickCounter();

const updateClickCounter = (clickCounterElement, clickCounterObject) => {
    clickCounterElement.innerText = clickCounterObject.getClicks();
}

const makeAddClickButton = (addClickElement, clickCounterElement, clickCounterObject) => {
    addClickElement.addEventListener('click', ()=>{
        clickCounterObject.addClick();
        updateClickCounter(clickCounterElement, clickCounterObject);
    })
}

const updateCompanionCounter = (companionCounterElement, clickCounterObject) => {
    companionCounterElement.innerText = clickCounterObject.getCompanions();
}

const makeAddCompanionButton = (addCompanionElement, companionCounterElement, clickCounterObject) => {
    addCompanionElement.addEventListener('click', ()=>{
        clickCounterObject.addClickCompanion();
        updateCompanionCounter(companionCounterElement, clickCounterObject);
    })
}

const updateCompounderCounter = (compounderCounterElement, clickCounterObject) => {
    compounderCounterElement.innerText = clickCounterObject.getCompounders();
}

const makeAddCompounderButton = (addCompounderElement, compounderCounterElement, clickCounterObject) => {
    addCompounderElement.addEventListener('click', ()=>{
        clickCounterObject.addClickCompounder();
        updateCompounderCounter(compounderCounterElement, clickCounterObject);
    })
}

makeAddClickButton(addClickElement, clickCounterElement, appClickCounter);
updateClickCounter(clickCounterElement, appClickCounter);

makeAddCompanionButton(addCompanionElement, companionCounterElement, appClickCounter);
updateCompanionCounter(companionCounterElement, appClickCounter);


makeAddCompounderButton(addCompounderElement, compounderCounterElement, appClickCounter);
updateCompounderCounter(compounderCounterElement, appClickCounter);