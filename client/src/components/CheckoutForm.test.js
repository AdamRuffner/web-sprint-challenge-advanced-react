import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import CheckoutForm from "./CheckoutForm";

// Write up the two tests here and make sure they are testing what the title shows

test("form header renders", () => {
    //Arrange
    render(<CheckoutForm/>)
});

test("form shows success message on submit with form details", () => {
    //Arranage
    render(<CheckoutForm/>)

    //Act
    const firstNameInput = screen.getByLabelText(/first name:/i)
    const lastNameInput = screen.getByLabelText(/last name:/i)
    const addressInput = screen.getByLabelText(/address:/i)
    const cityInput = screen.getByLabelText(/city:/i)
    const stateInput = screen.getByLabelText(/state:/i)
    const zipInput = screen.getByLabelText(/zip:/i)
    const button = screen.getByRole('button', /checkout/i)

    fireEvent.change(firstNameInput, {target: {value: 'Adam'}})
    fireEvent.change(lastNameInput, {target: {value: 'Ruffner'}})
    fireEvent.change(addressInput, {target: {value: 'youWish'}})
    fireEvent.change(cityInput, {target: {value: 'Nahh'}})
    fireEvent.change(stateInput, {target: {value: 'IN'}})
    fireEvent.change(zipInput, {target: {value: '12345'}})
    fireEvent.click(button)

    //Assert
    expect(screen.getByText(/Adam/i)).toBeInTheDocument()
    expect(screen.getByText(/Ruffner/i)).toBeInTheDocument()
    expect(screen.getByText(/youWish/i)).toBeInTheDocument()
    expect(screen.getByText(/nahh/i)).toBeInTheDocument()
    expect(screen.getByText(/IN/i)).toBeInTheDocument()
    expect(screen.getByText(/12345/i)).toBeInTheDocument()

});
