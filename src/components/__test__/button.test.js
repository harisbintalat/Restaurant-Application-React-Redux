import { getByTestId, render, cleanup } from "@testing-library/react";
import React from "react";
import ReactDOM from "react-dom";
import Button  from "../button";
import renderer from 'react-test-renderer';


afterEach(cleanup);

        //Test case 5

test('render without crash', ()=>{
    const div = document.createElement("div");
    ReactDOM.render(<Button/>, div)
}) 

        //Test case 6

it("renders button have click me please", ()=>{

    const {getByTestId} =render(<Button label="Click me please"/>)
     
    expect(getByTestId('button')).toHaveTextContent("Click me please")
})

        //Test case 7

it("renders button have save", ()=>{

    const {getByTestId} =render(<Button label="Save"/>)
    
    expect(getByTestId('button')).toHaveTextContent("Save")
})

        //Test case 8

it("Did matches snapshot",()=> {
    const tree = renderer.create(<Button label="save"/>).toJSON();
    expect(tree).toMatchSnapshot
})
