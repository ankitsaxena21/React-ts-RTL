import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import Todo from './Todo';
import userEvent from '@testing-library/user-event';

describe('Todo App', () => {
  it('Renders without crashing', () => {
    render(<Todo/>);
    const heading = screen.getByText(/Todo App/);
    expect(heading).toBeInTheDocument();
  });
  
  it('has an input field', ()=> {
    const {getByTestId} = render(<Todo/>);
    expect(getByTestId("todo-input")).toBeInTheDocument();
  });
  
 it("When the Enter button is pressed, it creates a new todo item", () => {
    const { getByTestId, getByText } = render(<Todo />);
    const event = { target: { value: "test val" } };
    fireEvent.change(getByTestId("todo-input"), event);
    expect(getByTestId("todo-input")).toHaveValue("test val");
    fireEvent.submit(getByTestId("add"));
    expect(getByText("Create more tests")).toBeInTheDocument();
  });
  
  it('Testing using userEvent', ()=> {
    const {getByTestId, getByText} = render(<Todo/>);
    userEvent.type(getByTestId("todo-input"), "test4");
    expect(getByTestId("todo-input")).toHaveValue("test4");
  });
});
