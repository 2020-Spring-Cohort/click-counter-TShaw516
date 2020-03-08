describe('Clicking Project Tests:', () => {
    let underTest;
    
    beforeEach(() => {
        underTest = new ClickCounter();
    })

    describe('Clicks should increment:', () => {
        describe('When addClick is used,', () => {   
            it('clicks should increment by 1', function(){
                underTest.addClick();
                
                expect(underTest.getClicks()).toBe(1);
            })
        })
    });
    

    describe('Clicking companion should increment:', () => { 
        describe('When addClickingCompanion is used,', () =>{
            it('Clicking Companion should increment by 1', function(){
                underTest.addClickCompanion();

                expect(underTest.getCompanions()).toBe(1);
            })
        });
    })
    
    describe('Clicking compounder should increment:', () => {
        describe('When addClickingCompounder is used', function (){
            it('Clicking Compounder should increment by 1', function (){
                underTest.addClickCompounder();

                expect(underTest.getCompounders()).toBe(1);
            })
        });
    });
    
});