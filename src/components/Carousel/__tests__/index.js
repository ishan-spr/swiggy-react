import React from 'react';
import { render, screen } from '@testing-library/react';
import UserEvent from '@testing-library/user-event'
import { faker } from '@faker-js/faker'
import Carousel from "../index"


function dataGenerator() {
    let data = []
    for (let i = 0; i < 10; i++) {
        data.push(faker.image.abstract())
    }
    return data
}

test('Calls ScrollBy Function', async () => {
    const mScrollBy = jest.fn();
    Element.prototype.scrollBy = mScrollBy
    const user = await UserEvent.setup()
    const slides = dataGenerator()
    render(<Carousel slides={slides} />);
    const button = screen.getByTestId('left-btn');
    expect(button).toBeInTheDocument();
    await user.click(button)
    expect(mScrollBy).toBeCalledTimes(1)
});