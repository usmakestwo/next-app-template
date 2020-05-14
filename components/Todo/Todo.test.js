import React from 'react'
import ReactDOM from 'react-dom'
import { mount } from 'enzyme'
import IconButton from '@material-ui/core/IconButton'
import Todo from './Todo'

const mockTodo = [
  {
    userId: 1,
    id: 1,
    title: 'delectus aut autem',
    completed: false,
  },
  {
    userId: 1,
    id: 2,
    title: 'quis ut nam facilis et officia qui',
    completed: false,
  },
]

describe('<Todo />', () => {
  const fieldProps = {
    todos: mockTodo,
    deleteTodo: jest.fn(),
  }
  const Composition = () => <Todo {...fieldProps} />

  it('renders a <Todo /> component without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(<Composition />, div)
    ReactDOM.unmountComponentAtNode(div)
  })

  it('renders a <Todo /> component with expected props', () => {
    const wrapper = mount(<Composition />)
    expect(wrapper.childAt(0).props().todos).toEqual(mockTodo)
  })

  it('should trigger onClick on key press', () => {
    const wrapper = mount(<Composition />)
    // Easy way to debug
    // console.log(wrapper.debug())
    wrapper.find(IconButton).at(0).simulate('click')
    expect(fieldProps.deleteTodo).toHaveBeenCalled()
  })
})
