import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Todo from './Todo';
import userEvent from '@testing-library/user-event';

describe('Todo App', () => {
  it('Renders without crashing', () => {
    render(<Todo />);
    const linkElement = screen.getByText(/Todo App/i);
    expect(linkElement).toBeInTheDocument();
  });

  it("Has an input field", () => {
    const { getByTestId } = render(<Todo />);
    expect(getByTestId("todo-input")).toBeInTheDocument();
  });

  it("When the Enter button is pressed, it creates a new todo item", () => {
    const { getByTestId, getByText } = render(<Todo />);
    const event = { target: { value: "Create more tests" } };
    fireEvent.change(getByTestId("todo-input"), event);
    expect(getByTestId("todo-input")).toHaveValue("Create more tests");
    fireEvent.submit(getByTestId("add"));
    expect(getByText("Create more tests")).toBeInTheDocument();
  });

  it("Testing using userEvent", () => {
    const { getByTestId, getByText } = render(<Todo />);
    const input = getByTestId("todo-input");
    userEvent.type(input, "new test item");
    expect(input).toHaveValue('new test item');
  });
});

