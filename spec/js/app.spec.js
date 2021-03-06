describe('app.js manipulates the DOM to reflect the status of a clickProject object.', () => {
    let testClickProject;
    let testClickCounter;
    let testAddClick;

    beforeEach(() => {
        testClickProject = new ClickCounter();
        testClickCounter = document.createElement('div');
        testAddClick = document.createElement('button');
        makeAddClickButton(testAddClick, testClickCounter, testClickProject);
    })

    describe('updateClickCounter() - As each click is added, the innerText of the passed element reflects the appropriate amount of clicks.', () => {
        it('Without clicking the click count should be 0.', () => { 
            updateClickCounter(testClickCounter, testClickProject); 
            expect(testClickCounter.innerText).toBe('0');
        });

        it('After clicking once the click counter should be 1.', () => {  
            testClickProject.addClick();
            updateClickCounter(testClickCounter, testClickProject); 
            expect(testClickCounter.innerText).toBe('1');
        });

        it('After adding first compounder the click counter should reduce by the compounderCost.', () => {
            testClickProject.addClickCompounder();
            updateClickCounter(testClickCounter, testClickProject);
            expect(testClickCounter.InnerText).toBe('0');
        });
    });

    








});