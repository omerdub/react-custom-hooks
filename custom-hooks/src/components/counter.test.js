import { render, screen, cleanup } from "@testing-library/react";
import Counter from "./counter";

afterEach(() => {
    cleanup();
});

test('Should render counter component', () => {
    render(<Counter/>);
    const counterElement = screen.getByTestId('counter-1');
    expect(counterElement).toBeInTheDocument();
});