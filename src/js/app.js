const addClickElement = document.querySelector('.add-click__add-click');
const addCompanionElement = document.querySelector('.companion__add-companion');
const addCompounderElement = document.querySelector('.compounder__add-compounder');
const clickCounterElement = document.querySelector('.click-counter__clicks');
const companionCounterElement = document.querySelector('.companion__companion-total');
const compounderCounterElement = document.querySelector('.compounder__compounder-total');
const companionCostElement = document.querySelector('.companion__companion-cost');
const compounderCostElement = document.querySelector('.compounder__compounder-cost');
const clickStrengthElement = document.querySelector('.add-click__click-strength');
var links = document.getElementById("links");
const appClickCounter = new ClickCounter();

const autoClick = () =>{
    setInterval((appClickCounter.addAutoClicks()), 5000)
};


const updateClickCounter = (clickCounterElement, clickCounterObject) => {
    clickCounterElement.innerText = clickCounterObject.getClicks();
}

const updateClickStrength = (clickStrengthElement, clickCounterObject) => {
    clickStrengthElement.innerText = clickCounterObject.getClickStrength();
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

const updateCompanionCost = (companionCostElement, clickCounterObject) => {
    companionCostElement.innerText = clickCounterObject.getCompanionCost();
}

const makeAddCompanionButton = (addCompanionElement, companionCounterElement, clickCounterObject) => {
    addCompanionElement.addEventListener('click', ()=>{
        clickCounterObject.addClickCompanion();
        updateCompanionCounter(companionCounterElement, clickCounterObject);
        updateCompanionCost(companionCostElement, appClickCounter);
    })
}

const updateCompounderCounter = (compounderCounterElement, clickCounterObject) => {
    compounderCounterElement.innerText = clickCounterObject.getCompounders();
}

const updateCompounderCost = (compounderCostElement, clickCounterObject) => {
    compounderCostElement.innerText = clickCounterObject.getCompounderCost();
}

const makeAddCompounderButton = (addCompounderElement, compounderCounterElement, clickCounterObject) => {
    addCompounderElement.addEventListener('click', ()=>{
        clickCounterObject.addClickCompounder();
        updateCompounderCounter(compounderCounterElement, clickCounterObject);
        updateCompounderCost(compounderCostElement, appClickCounter);
        updateClickStrength(clickStrengthElement, appClickCounter);
    })
}

makeAddClickButton(addClickElement, clickCounterElement, appClickCounter);
updateClickCounter(clickCounterElement, appClickCounter);

makeAddCompanionButton(addCompanionElement, companionCounterElement, appClickCounter);
updateCompanionCounter(companionCounterElement, appClickCounter);


makeAddCompounderButton(addCompounderElement, compounderCounterElement, appClickCounter);
updateCompounderCounter(compounderCounterElement, appClickCounter);

updateClickStrength(clickStrengthElement, appClickCounter);
updateCompanionCost(companionCostElement, appClickCounter);
updateCompounderCost(compounderCostElement, appClickCounter);