describe('Main Page Test',()=>{
    beforeEach(()=>{
        cy.visit('https://theconnectedshop.com');
        cy.viewport(1920,1080);
    });
    //команда для приховання помилок самого сайту
    Cypress.on(`uncaught:exception`,(err,runnable) =>{
        return false;
        });
    //Кроки
    it('Site is Open and Check url',()=>{
     cy.url()
         .should('eq','https://theconnectedshop.com/')
    });

   /* context(`viewport desktop`,() =>{
        beforeEach(()=>{
            cy.viewport(1920,1080);
            });*/


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
    it(`Section Home`, () => {
        cy.get('.is-active > .Heading')
            .should(`exist`)
        });
        it(`Section New In`, () => {
           cy.get('.Header__MainNav > .HorizontalList > :nth-child(2) > .Heading')
            //cy.get(`.HorizontalList__Item`).eq(1).then(($el)=>{
                //const text = $el.text();
               // cy.task(`log`,`Svitlana`+ text);
                //expect(text).to.include(`New In`)
           // });
                .should(`exist`)
                .contains(`a`,  `New In`)
                .should(`have.attr`,`href`, `/collections/new-in`);
        });
        it(`Section Collections`, () => {
            cy.get('.Header__MainNav > .HorizontalList > :nth-child(3)')
                .should(`exist`)
        });
        it(`Section Personal`, () => {
            cy.get('.HorizontalList > :nth-child(4) > .Heading')
                .should(`exist`)
        });
        it(`Section Businesses`, () => {
            cy.get('.HorizontalList > :nth-child(5) > .Heading')
                .should(`exist`)
        });
        it(`Section Tech Talk`, () => {
            cy.get('.HorizontalList > :nth-child(6) > .Heading')
                .should(`exist`)
        });
        it(`Section About us`, () => {
            cy.get('.HorizontalList > :nth-child(7) > .Heading')
                .should(`exist`)
        });
        it(`Section Contact`, () => {
            cy.get('.HorizontalList > :nth-child(8) > .Heading')
                .should(`exist`)
        });
        it(`Section Call`, () => {
            cy.get('.HorizontalList > :nth-child(9) > .Heading')
                .should(`exist`)
        });
        it(`Search`, () => {
            cy.get('.Header__SecondaryNav > .HorizontalList > :nth-child(2) > .Heading')
                .should(`exist`)
        });


    /*context(`viewport mobile`,() => {
        beforeEach(() => {
            cy.viewport(320, 520);
        });
        //іт для моб версії
    });*/
});