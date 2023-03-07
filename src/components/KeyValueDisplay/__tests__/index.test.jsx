import React from 'react'
import KeyValueDisplay from '..'

import { render } from '@testing-library/react'

describe('KeyValueDisplay', () => {
  it('should render the component without onEditClick callback props', () => {
    const dummyPropsWithoutOnEditClick = {
      keyText: 'Key',
      valueText: 'Value'
    }

    const keyValueComponent = render(<KeyValueDisplay {...dummyPropsWithoutOnEditClick} />).asFragment()
    expect(keyValueComponent).toMatchSnapshot()
  })

  it('should render the component with onEditClick callback props', () => {
    const dummyPropsWithoutOnEditClick = {
      keyText: 'Key',
      valueText: 'Value',
      onEditClick: () => {}
    }

    const keyValueComponent = render(<KeyValueDisplay {...dummyPropsWithoutOnEditClick} />).asFragment()
    expect(keyValueComponent).toMatchSnapshot()
  })
})
