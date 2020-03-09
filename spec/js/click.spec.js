describe('Clicking Project Tests:', () => {
    let underTest;
    
    beforeEach(() => {
        underTest = new ClickCounter();
        underTest._clicks = 0;
    })

    describe('Clicks should increment:', () => {
        describe('When addClick is used,', () => {   
            it('clicks should increment by 1', function(){
                underTest.addClick();
                
                expect(underTest.getClicks()).toBe(1);
            })
        });
    });
    

    describe('Clicking companion should increment:', () => { 
        describe('When addClickingCompanion is used,', () =>{
            it('Clicking Companion should increment by 1', function(){
                underTest._clicks = 100;
                
                underTest.addClickCompanion();

                expect(underTest.getCompanions()).toBe(1);
            })
        });
    });
    
    describe('Clicking compounder should increment:', () => {
        describe('When addClickingCompounder is used', function (){
            it('Clicking Compounder should increment by 1', function (){
                underTest._clicks = 10;
                
                underTest.addClickCompounder();

                expect(underTest.getCompounders()).toBe(1);
            })
        });
    });

    describe('Clicking companion cost should increase:', () => {
        describe('When companionCostChange is used', function () {
            it('Clicking Companion should cost 10% more', function (){
                underTest.companionCostChange();

                expect(underTest.getCompanionCost()).toBe(110)
            })
        });
    
    });

    describe('Clicking compounder cost should increase:', () => {
        describe('When compounderCostChange is used', function () {
            it('Clicking Compounder should cost 10% more', function (){
                underTest.compounderCostChange();

                expect(underTest.getCompounderCost()).toBe(11)
            })
        });
    });

    describe('Click strength will increase as compounders are added:', () => {
        describe('When clickStrength is used', function () {
            it('Click Strength will increase by 1.2x', function (){
                underTest.clickStrengthChange();

                expect(underTest.getClickStrength()).toBe(1.2)
            })
        });
    });

    describe('Companion count will be added automatically:', () => {
        describe('When AutoAdd is used', function () {
            it('Click count will increase by the companion amount', function (){
                underTest._clicks = 10;
                underTest._companion = 1
                
                underTest.addAutoClicks();

                expect(underTest.getClicks()).toBe(11)
            })
        });
    });


    
    
});