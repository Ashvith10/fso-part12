import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Todo from './Todo'

const todo = {
  "text": "This is a todo",
  "done": true
}

const todoNotDone = {
  "text": "This is another todo",
  "done": false
}

describe('<Todo />', () => {
  test('Render text', () => {
    render(<Todo todo={todo} />)

    const text = screen.getByText(todo.text)
    expect(text).toBeDefined()
  })

  describe('Status of todo', () => {
    test('When done, show text \'This todo is done\' and only the \'Delete\' button', () => {
      render(<Todo todo={todo} />)

      const isDone = screen.getByText('This todo is done')
      expect(isDone).toBeDefined()

      const deleteButton = screen.getByText('Delete')
      expect(deleteButton).toBeDefined()
    })

    test('When not done, show text \'This todo is not done\', the \'Delete\' button and \'Set as done\' button', () => {
      render(<Todo todo={todoNotDone} />)

      const isDone = screen.getByText('This todo is not done')
      expect(isDone).toBeDefined()

      const deleteButton = screen.getByText('Delete')
      expect(deleteButton).toBeDefined()

      const setAsDoneButton = screen.getByText('Set as done')
      expect(setAsDoneButton).toBeDefined()
    })
  })
})
