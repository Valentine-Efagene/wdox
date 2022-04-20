import React from 'react'
import { mount } from '@cypress/react'
import ImageBackground from './ImageBackground'

it('is visible', () => {
  mount(<ImageBackground />)
  cy.get('div').should('be.visible')
})
