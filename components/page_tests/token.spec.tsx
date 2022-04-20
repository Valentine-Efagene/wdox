import React from 'react'
import { mount } from '@cypress/react'
import Token from '../../pages/whitepaper/wdox/index'

it('is visible', () => {
  mount(<Token />)
  cy.get('div').should('be.visible')
})
