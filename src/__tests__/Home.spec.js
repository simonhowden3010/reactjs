import Home from "../layouts/Home";
import React from 'react';
import { render } from '@testing-library/react';

describe("App starts",  () => {
  test("Home renders", async () => {
    const { getByTestId } = await render(<Home />);
    expect(getByTestId("mainHeading")).toHaveTextContent("React Test");
  });
});