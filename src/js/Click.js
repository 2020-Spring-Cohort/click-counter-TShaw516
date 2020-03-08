class ClickCounter {
    constructor(){
        this._clicks=0;
        this._companion=0;
        this._compounder=0;
        this._companionCost=100;
        this._compounderCost=10;

    }

    addClick(){
        this._clicks += 1;

    }
    
    addClickCompanion(){
        if(this._clicks>=this._companionCost)
        {
        this._clicks -= 100;
        this._companion += 1;
        }
    }

    addClickCompounder(){
        if(this._clicks>=this._compounderCost)
        {
        this._clicks -= 10;
        this._compounder += 1;
        }

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

}