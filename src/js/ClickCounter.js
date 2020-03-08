let clicks = 0;

function addClick()
{
    clicks += 1;
    document.getElementById("clicks").innerHTML = clicks;
}

/* const brokeString = "You Do Not Have Enough Clicks";
var displaySetting = brokeString.style.display;
brokeString.style.display = 'none';

function showBrokeString()
{
    brokeString.style.display = 'block';
    brokeString = document.getElementById('brokeString');
    brokeString.innerHTML = 'Show brokeString';
} */

let clickingCompanion = 0;
let companionCost = 100;

function addCompanion()
{
    
    if (clicks>=companionCost)
    {
    clicks = clicks-companionCost;
    clickingCompanion += 1;
    document.getElementById("clickingCompanion").innerHTML = clickingCompanion;
    companionCostChange();
    }
/*     else
    {
    //showBrokeString();
    } */
}

function companionCostChange()
{ 
    Math.round(companionCost) = (companionCost / 10) + companionCost;
}

let compounderCost = 10;

function compounderCostChange()
{
    Math.round(compounderCost) = (compounderCost / 10) + compounderCost;
}    

setInterval(function addAutoClicks()
{
    clicks = clickingCompanion + clicks;
},  5000);

let compounder = 0;

function addCompounder()
{
    if (clicks>=compounderCost)
    {
        clicks = clicks - compounderCost;
        compounder +=1;
        document.getElementById("compounder").innerHTML = compounder;
        compounderCostChange();

    }
/*     else
    {
        //showBrokeString().toggle(hide);
    } */
}

/*function exponentClicks()
{
    foreach(compounder)
        {document.getElementById("click").value

}*/


