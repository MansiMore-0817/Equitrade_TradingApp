import React from "react";
import {render, screen} from '@testing-library/react';
import '@testing-library/jest-dom';
import { MemoryRouter } from "react-router-dom";
import Hero from "../landing_page/home/Hero";

// Test-Suite
describe('Hero Component', ()=> {
    test("renders hero image", ()=>{
        render(
             <MemoryRouter>
                <Hero/>
             </MemoryRouter>
        
    );
        const heroImage = screen.getByAltText('Hero image');  //attribute
        expect(heroImage).toBeInTheDocument();   //it's presence in the document
        expect(heroImage).toHaveAttribute('src', 'images/homeHero.png')  //the exact attribute to be present in the doc
    })
});