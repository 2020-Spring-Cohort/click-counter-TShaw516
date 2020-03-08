//describe(suite-title, callbackFunction() {})
describe("addCounterApp", function()
{
/*  beforeEach(function)
    {
        testClicksElement = document.createElement('button')
    }  */

    describe("addClick", function() 
    {
        it('clicks variable increments on click', function()
        {   
            //arrange
            let clicks = 0;
            //act
            addClick();
            //assert
            expect(clicks).toBe(1); 

        })

    })

    describe("addCompounder", function()
    {
        it('adds a compounder for the cost of 10 clicks', function()
        {
            //arrange
            let compunderCost=10;
            let clicks=10;
            //act
            addCompounder();
            //assert
            expect(compounder).toBe(1)
        })
    })

    describe("addCompanion", function()
    {
        it('adds a companion for the cost of 100 clicks', function()
        {
            //arrange
            let companion = 0
            let clicks = 100;
            //act
            addCompanion();
            //assert
            expect(companion).toBe(1)
        })

    })

    describe("companionCostChange", function()
    {
        it('increases the cost of clicking companions for each one purchased', function()
        {
            //arrange
            let clickingCompanion=1;
            let clickCost=100;
            //act
            companionCostChange();
            //assert
            expect(clickCost).toBe(110);
        })
    })

    describe("compounderCostChange", function()
    {
        it('increases the cost of clicking compounder for each one purchased', function()
        {
            //arrange
            let compunder=1
            let compounderCost=10;
            //act
            compounderCostChange();
            //assert
            expect(compounderCost / 10 + compounderCost).toBe(11);
        })
    })

    describe("addAutoClick", function()
    {
        it('adds the quantity of companions to each individual click', function()
        {
            //arrange
            clicks = 1;
            clickingCompanion = 1;
            //act
            addAutoClicks();
            //assert
            expect(clicks).toBe(2);
        })
    })
});
