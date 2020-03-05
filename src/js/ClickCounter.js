let clicks = 0;

function addClick()
{
    clicks+=1;
    document.getElementById("clicks").innerHTML = clicks;
}

const brokeString = "You Do Not Have Enough Clicks";

//function brokeString()
//{
//    document.getElementById("brokeString").innerHTML = brokestring;
//}

let clickingCompanion = 0;
let companionCost = 100;

function addCompanion()
{
    
    if (clicks>=companionCost)
    {
    clickingCompanion += 1;
    clicks = clicks-companionCost;
    document.getElementById("clickingCompanion").innerHTML = clickingCompanion;
    costChange();
    }
//    else
//    {
//    brokeString();
//    }
}

function costChange()
{ 
    companionCost = (companionCost * .10) + companionCost;
}

let compounderCost = 10;

function compounderCostChange()
{
    compounderCost = (compounderCost * .10) + compounderCost;
}    

function addAutoClicks()
{
    clicks = clickingCompanion + clicks;
}

let compounder = 0;

function addCompounder()
{
    if (clicks>=compounderCost)
    {
        compounder +=1;
        clicks = clicks - compounderCost;
        document.getElementById("compounder").innerHTML = compounder;
        compounderCostChange();

    }
//    else
//    {
//        brokeString();
//    }
}


