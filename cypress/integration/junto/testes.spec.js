/// <reference types="Cypress" />

// testes a realizar
/**
 * 1- validar titulo da pagina
 * 2- validar os labels dos campos
 */

 //teste 1
describe('Acessar a pagina de testes Fuel Savings Analysise validar o titulo', () => {
    it('Acessa a pagina e validar o titulo',() => {
        cy.visit('http://localhost:3001/fuel-savings')

       cy.get("h2").contains("Fuel Savings Analysis")
    })
})

//teste 2
describe('Validar label dos campos da tela', () => {
    it('Validar o label do campo New Vehicle MPG',() => {
        cy.visit('http://localhost:3001/fuel-savings')

        cy.xpath('//*[@id="app"]/div/div[2]/table[1]/tbody/tr[1]/td[1]/label').contains("New Vehicle MPG")
        
    })
})

describe('Validar label dos campos da tela', () => {
    it('Validar o label do campo Trade-in MPG',() => {
        cy.visit('http://localhost:3001/fuel-savings')

        cy.xpath('//*[@id="app"]/div/div[2]/table[1]/tbody/tr[2]/td[1]/label').contains("Trade-in MPG")
        
    })
})

describe('Validar label dos campos da tela', () => {
    it('Validar o label do campo New Vehicle price per gallon',() => {
        cy.visit('http://localhost:3001/fuel-savings')

        cy.xpath('//*[@id="app"]/div/div[2]/table[1]/tbody/tr[3]/td[1]/label').contains("New Vehicle price per gallon")
        
    })
})

describe('Validar label dos campos da tela', () => {
    it('Validar o label do campo Trade-in price per gallon',() => {
        cy.visit('http://localhost:3001/fuel-savings')

        cy.xpath('//*[@id="app"]/div/div[2]/table[1]/tbody/tr[4]/td[1]/label').contains("Trade-in price per gallon")
        
    })
})

describe('Validar label dos campos da tela', () => {
    it('Validar o label do campo Miles Driven',() => {
        cy.visit('http://localhost:3001/fuel-savings')

        cy.xpath('//*[@id="app"]/div/div[2]/table[1]/tbody/tr[5]/td[1]/label').contains("Miles Driven")
        
       
    })
})

describe('Validar label dos campos da tela Date Modified', () => {
    it('Validar o label do campo Date Modified',() => {
        cy.visit('http://localhost:3001/fuel-savings')

        cy.xpath('//*[@id="app"]/div/div[2]/table[1]/tbody/tr[6]/td[1]/label').contains("Date Modified")
       
    })
})
