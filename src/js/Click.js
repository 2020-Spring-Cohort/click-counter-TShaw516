class ClickCounter {
    constructor(){
        this._clicks=0;
        this._companion=0;
        this._compounder=0;

    }

    addClick(){
        this._clicks += 1;

    }
    
    addClickCompanion(){
        this._clicks -= 100;
        this._companion += 1;

    }

    addClickCompounder(){
        this._clicks -= 10;
        this._compounder += 1;

    }

    getClickTotal(){

    }

    getClicks(){
        return this._clicks;

    }

    getCompanion(){
        return this._companion;
    }

    getCompounder(){
        return this._compounder;
    }

}