class ClickCounter {
    constructor(){
        this._clicks=0;
        this._companion=0;
        this._compounder=0;
        this._companionCost=100;
        this._compounderCost=10;
        this._clickStrength=1;

    }

    hamburgerMenu= () => {
        var options = document.getElementById("links");
        if (options.style.display === "block") {
          options.style.display = "none"; } 
        else {
          options.style.display = "block";
             }
    }

    addClick = () => {
        this._clicks += this._clickStrength;

    }
    
    addClickCompanion(){
        if(this._clicks>=this._companionCost)
        {
        this._clicks = this._clicks - this._companionCost
        this._companion += 1;
        this.companionCostChange();
        this.addAutoClicks();
        }
    }

    companionCostChange(){ 
        this._companionCost = (this._companionCost * 0.1) + this._companionCost;
    }

    addClickCompounder(){
        if(this._clicks>=this._compounderCost)
        {
        this._clicks = this._clicks - this._compounderCost;
        this._compounder += 1;
        this.compounderCostChange();
        this.clickStrengthChange();
        }

    }

    compounderCostChange(){
        this._compounderCost = (this._compounderCost * 0.1) + this._compounderCost;
    }
    
    clickStrengthChange(){
        this._clickStrength = this._clickStrength + (this._clickStrength * .2);

    }

    getClickTotal(){

    }

    getClicks(){
        return this._clicks;

    }

    getCompanions(){
        return this._companion;
    }

    getCompounders(){
        return this._compounder;
    }

    getCompanionCost(){
        return this._companionCost;
    }

    getCompounderCost = () => {
        return this._compounderCost;
    }

    getClickStrength = () => {
        return this._clickStrength;
    }

}