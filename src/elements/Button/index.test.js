import React from "react";
import { render } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import Button from ".";

//make sure when button isDisabled then the container must contained tag span.disabled
test("Should not allowed click button if isDisabled is present", () => {
  const { container } = render(<Button isDisabled></Button>);

  expect(container.querySelector("span.disabled")).toBeInTheDocument();
});

//make sure when button isLoading then the container must contained tag named span and it's text contained "loading"
test("Should render loading/spinner", () => {
  const { container, getByText } = render(<Button isLoading></Button>);

  expect(container.querySelector("span")).toBeInTheDocument();
  expect(getByText(/loading/i)).toBeInTheDocument();
});

//make sure when button type === "link" and isExternal then the container must contained tag named "a"
test("Should render <a> tag", () => {
  const { container } = render(<Button type="link" isExternal></Button>);

  expect(container.querySelector("a")).toBeInTheDocument();
});

//make sure when button type === "link" then the container must contained <Link> component
test("Should render <Link> component", () => {
  const { container } = render(
    <Router>
      <Button type="link" href=""></Button>
    </Router>
  );

  expect(container.querySelector("a")).toBeInTheDocument();
});
