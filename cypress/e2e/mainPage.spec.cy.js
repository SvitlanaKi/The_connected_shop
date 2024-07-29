describe('Main Page Test',()=>{
    beforeEach(()=>{
        cy.visit('https://theconnectedshop.com')
    });
    //Кроки
    it('Site is Open and Check url',()=>{
     cy.url()
         .should('eq','https://theconnectedshop.com/')
    });
   /* it('Check title for home page',()=>{
        cy.title()
            .should('eq','&nbsp;The Connected Shop - Smart Locks, Smart Sensors, Smart Home & Office&nbsp;')
        });*/

    context(`viewport descktop`,() =>{
        beforeEach(()=>{
            cy.viewport(1920,1080);
            });


    it('should have the correct header elements', () => {
        cy.get('#section-header')
            .should('exist')
    });

    it(`Header Icon`, () =>{
        cy.get('.Header__Icon')
            .should('exist')
        });
    it(`Header Logo`, () =>{
        cy.get('.Header__LogoImage--transparent')
            .should(`exist`)
            .and(`be.visible`);
        });
    it(`Main menu`, () =>{
        cy.get('.Header__MainNav > .HorizontalList')
            .should(`exist`)
    });
    });

    context(`viewport mobile`,() => {
        beforeEach(() => {
            cy.viewport(320, 520);
        });
        //іт для моб версії
    });
});