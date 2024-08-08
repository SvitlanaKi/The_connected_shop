describe('Search Test',()=> {
    beforeEach(() => {
        cy.visit('https://theconnectedshop.com');
        cy.viewport(1920, 1080);
    });
    //команда для приховання помилок самого сайту
    Cypress.on(`uncaught:exception`, (err, runnable) => {
        return false;
    });

    it(`Successful search for a product`, () => {
        //закрити поп-ап
        cy.get('.NewsletterPopup__Close')
            .should(`be.visible`)
            .click();
        //натискаємо на пошук
        cy.get('.Header__SecondaryNav > .HorizontalList > :nth-child(2) > .Heading')
            .should(`exist`)
            .and(`be.visible`)
            .and(`have.attr`,`href`, `/search`)
            .contains(`a`,  `Search`)
            .click();
        //ввести дані
        cy.get('input[type="search"][placeholder="Search..."]')
            .should(`be.visible`)
            .and('have.attr', 'autocomplete', 'off')
            .and('have.attr', 'autocorrect', 'off')
            .and('have.attr', 'autocapitalize', 'off')
            .and('have.attr', 'aria-label', 'Search...')
            .and('have.attr', 'placeholder', 'Search...')
            .type('smart lock')
//перевірка результату
        cy.get('span.Heading.Text--subdued.u-h7')
            .should('contain.text', 'results')
            .then(($span) => {
                const resultsText = $span.text();
                cy.log(`Search results text: ${resultsText}`);
            });
    });
it(`Unsuccessful search for a product`, () =>{
    cy.get('.NewsletterPopup__Close')
        .should(`be.visible`)
        .click();
    //натискаємо на пошук
    cy.get('.Header__SecondaryNav > .HorizontalList > :nth-child(2) > .Heading')
        .should(`exist`)
        .and(`be.visible`)
        .and(`have.attr`,`href`, `/search`)
        .contains(`a`,  `Search`)
        .click();
    //ввести дані
    cy.get('input[type="search"][placeholder="Search..."]')
        .should(`be.visible`)
        .type('hghghgh')
    cy.get('.Segment__Content').first().within(() => {
        cy.get('p')
            .should('contain', 'No results could be found');
    });
    //перевірка параметрів іконки пошук
    cy.get('.Search__InputIconWrapper > .hidden-phone')
        .should(`be.visible`)
        .and('have.attr', 'stroke', 'currentColor')
        .and('have.attr', 'stroke-width', '2')
        .and('have.attr', 'fill', 'none')
        .and('have.attr', 'fill-rule', 'evenodd')
        .and('have.attr', 'stroke-linecap', 'square')

});

});