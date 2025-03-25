import { render, screen, fireEvent } from "@testing-library/react"
import Like from "../Like";

test("checkParrafo", ()=>{
    render(<Like/>);
    expect(screen.getByText("Likes: 0")).toBeInTheDocument();
}); 

test("incremento clicked", ()=>{
    render(<Like/>);

    fireEvent.click(screen.getByTestId("increment")); 
    expect(screen.getByText("Likes: 1")).toBeInTheDocument();
}); 

test("decremento clicked", ()=>{
    render(<Like/>);

    fireEvent.click(screen.getByTestId("decrement")); 
    expect(screen.getByText("Likes: -1")).toBeInTheDocument();
})