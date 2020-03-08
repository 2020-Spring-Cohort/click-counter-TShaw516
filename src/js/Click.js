class ClickCounter {
    constructor(){
        this._clicks=0;

    }

    addClick(){
        this._clicks+=1;

    }
    addClickCompanion(){
        this._clicks-=100;

    }

    addClickCompounder(){
        this._clicks-=10

    }

    getClickTotal(){

    }

    getClicks(){
        return this._clicks;

    }

}