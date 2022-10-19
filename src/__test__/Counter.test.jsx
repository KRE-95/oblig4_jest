import { Counter } from '../components/Counter';
import { fireEvent,render, screen } from '@testing-library/react';
import "@testing-library/jest-dom/extend-expect"



// couldnt call it component, changed to view, but than another problem happend changed it to screen.
it ('it should show the text as paragraph', () => {
    const view = render (<Counter />);
    const paragraphEl = screen.getByTestId("paragraph")

    expect(paragraphEl.textContent).toBe('Count is: 0')
    
  })


// init for starting of counting
it('should check that Counter starts with 0', () => {
    render(<Counter/>)
  
    const paragraph = document.querySelector('p')
    // forvent pargraf - valideringsfunksjon til jest
    expect(paragraph).toHaveTextContent('Count is: 0')
  })

 // Test events - for user:

 // increment
it('should increment counter if Increment button is pressed', () => {
  render(<Counter />)

  expect(document.querySelector('p')).toHaveTextContent('Count is: 0')

  fireEvent.click(screen.getByText('Increment'))

  expect(document.querySelector('p')).toHaveTextContent('Count is: 1')
})

// Decrement 
it('should decrement counter if Decrement button is pressed', () => {
  render(<Counter />)

  expect(document.querySelector('p')).toHaveTextContent('Count is: 0')

  fireEvent.click(screen.getByText('Decrement'))

  expect(document.querySelector('p')).toHaveTextContent('Count is: -1')
})

// Restart 
it('should check that Counter restarts when clicked', () => {
    render(<Counter/>)

    fireEvent.click(screen.getByText('Reset'))

    expect(document.querySelector('p')).toHaveTextContent('Count is: 0')
  })


  