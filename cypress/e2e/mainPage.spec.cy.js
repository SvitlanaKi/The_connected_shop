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
               .should(`exist`)
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

    it(`Section Home Href`, () => {
        cy.get('.is-active > .Heading')
            .should(`exist`)
            .contains(`a`,  `Home`)
            .should(`have.attr`,`href`, `/`);
    });

    it(`Section New In Href`, () => {
        cy.get('.Header__MainNav > .HorizontalList > :nth-child(2) > .Heading')
            .should(`exist`)
            .contains(`a`,  `New In`)
            .should(`have.attr`,`href`, `/collections/new-in`);
    });
    it(`Section Collections Href`, () => {
        cy.get('.Header__MainNav > .HorizontalList > :nth-child(3)')
            .should(`exist`)
            .contains(`a`,  `Collections`)
            .should(`have.attr`,`href`, `/pages/products`);
    });
    it(`Section Personal Href`, () => {
        cy.get('.HorizontalList > :nth-child(4) > .Heading')
            .should(`exist`)
            .contains(`a`,  `Personal`)
            .should(`have.attr`,`href`, `/pages/personal`);
    });
    it(`Section Businesses Href`, () => {
        cy.get('.HorizontalList > :nth-child(5) > .Heading')
            .should(`exist`)
            .contains(`a`,  `Businesses`)
            .should(`have.attr`,`href`, `/pages/businesses`);
    });
    it(`Section Tech Talk Href`, () => {
        cy.get('.HorizontalList > :nth-child(6) > .Heading')
            .should(`exist`)
            .contains(`a`,  `Tech Talk`)
            .should(`have.attr`,`href`, `/blogs/tech-talk`);
    });
    it(`Section About us Href`, () => {
        cy.get('.HorizontalList > :nth-child(7) > .Heading')
            .should(`exist`)
            .contains(`a`,  `About us`)
            .should(`have.attr`,`href`, `/pages/about-us`);
    });
    it(`Section Contact Href`, () => {
        cy.get('.HorizontalList > :nth-child(8) > .Heading')
            .should(`exist`)
            .contains(`a`,  `Contact`)
            .should(`have.attr`,`href`, `/pages/contact-us`);
    });
    it(`Section Call Href`, () => {
        cy.get('.HorizontalList > :nth-child(9) > .Heading')
            .should(`exist`)
            .contains(`a`,  `Call`)
            .should(`have.attr`,`href`, `tel:3053303424`);
    });
    it(`Search Href`, () => {
        cy.get('.Header__SecondaryNav > .HorizontalList > :nth-child(2) > .Heading')
            .should(`exist`)
            .and(`be.visible`)
            .and(`have.attr`,`href`, `/search`)
            .contains(`a`,  `Search`);
    });

    /*context(`viewport mobile`,() => {
        beforeEach(() => {
            cy.viewport(320, 520);
        });
        //іт для моб версії
    });*/
});