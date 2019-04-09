const React = require("react");
const { render, fireEvent } = require("react-testing-library");

function Input() {
  return React.createElement("input", {
    "aria-label": "price",
    type: "number",
    min: "0",
    max: "3.5",
    step: "0.01"
  });
}

test("Input validation", () => {
  const { getByLabelText } = render(React.createElement(Input));
  const input = getByLabelText("price");
  fireEvent.change(input, { target: { value: "3" } });

  expect(input.value).toBe("3");
  expect(input.validity.stepMismatch).toBe(false);
});
