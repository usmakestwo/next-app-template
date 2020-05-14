import React from 'react'
import ReactDOM from 'react-dom'
import Typography from '@material-ui/core/Typography'
import { mount } from 'enzyme'
import App from '../pages/index'

describe('<IndexPage />', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(<App />, div)
    ReactDOM.unmountComponentAtNode(div)
  })

  it('App loads with inital state of []', () => {
    const wrapper = mount(<App />)
    expect(wrapper.find(Typography)).toHaveLength(2)
  })
})
