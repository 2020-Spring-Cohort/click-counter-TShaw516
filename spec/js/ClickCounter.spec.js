//describe(suite-title, callbackFunction() {})
describe("addCounterApp", function()
{
    /*let sut;
    beforeEach(function())
    {


    }*/

    describe("countClick", function() 
    {
        it('clicks variable increments on click', function()
        {   
            //arrange
            clicks = 0;
            //act
            addClick();
            //assert
            expect(clicks).toBe(1); 

        })

    })

    describe("costChange", function()
    {
        it('increases the cost of clicking companions for each one purchased', function()
        {
            //arrange
            clickingCompanion=1;
            //act
            costChange();
            //assert
            expect(clickCost * .10 + clickCost).toBe(110);
        })
    })

    describe("compounderCostChange", function()
    {
        it('increases the cost of clicking compounder for each one purchased', function()
        {
            //arrange
            compounder=1;
            //act
            compounderCostChange();
            //assert
            expect(clickCost * .10 + clickCost).toBe(11);
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

    describe("addCompounder", function()
    {
        it('adds a compounder for the cost of 10 clicks', function()
        {
            //arrange
            compunder=0;
            clicks=10;
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
            companion = 0
            clicks = 100;
            //act
            addCompanion();
            //assert
            expect(companion).toBe(1)
        })

    })
    
});
