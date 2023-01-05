import React from "react";
import { useForm, Controller } from "react-hook-form";
import AsyncSelect from "react-select/async";
import { Input, InputGroup, InputGroupText } from "reactstrap";

export const colourOptions = [
  { value: "ocean", label: "Ocean", color: "#00B8D9", isFixed: true },
  { value: "blue", label: "Blue", color: "#0052CC", isDisabled: true },
  { value: "purple", label: "Purple", color: "#5243AA" },
  { value: "red", label: "Red", color: "#FF5630", isFixed: true },
  { value: "orange", label: "Orange", color: "#FF8B00" },
  { value: "yellow", label: "Yellow", color: "#FFC400" },
  { value: "green", label: "Green", color: "#36B37E" },
  { value: "forest", label: "Forest", color: "#00875A" },
  { value: "slate", label: "Slate", color: "#253858" },
  { value: "silver", label: "Silver", color: "#666666" },
];

const filterColors = (inputValue) => {
  return colourOptions.filter((i) =>
    i.label.toLowerCase().includes(inputValue.toLowerCase())
  );
};

const loadOptions = (inputValue, callback) => {
  setTimeout(() => {
    callback(filterColors(inputValue));
  }, 1000);
};

function ExampleForm() {
  const { handleSubmit, control } = useForm();

  const default_value = "orange";

  const submitHandler = (formData) => {
    console.log(formData);
  };

  return (
    <div>
      <form onSubmit={handleSubmit(submitHandler)}>
        <Controller
          control={control}
          defaultValue={default_value}
          name="color"
          render={({ field: { value, onChange, ref } }) => {
            return (
              <AsyncSelect
                inputRef={ref}
                cacheOptions
                loadOptions={loadOptions}
                value={colourOptions.find((c) => c.value === value)}
                onChange={(val) => onChange(val.value)}
                defaultOptions
              />
            );
          }}
        />
        <button type="submit" className="btn btn-primary mt-2">Submit</button>
      </form>
    </div>
  );
}

export default ExampleForm;
