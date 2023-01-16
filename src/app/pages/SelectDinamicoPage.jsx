import React from "react";

import data from "./data.json";
import { Col, Input, Label } from "reactstrap";
import { useState } from "react";
import { useEffect } from "react";

function SelectDinamicoPage() {
  const [categories, setCategories] = useState(data);
  const [categorySelected, setCategorySelected] = useState("");

  const [types, setTypes] = useState([]);
  const [typeSelected, setTypeSelected] = useState("");

  const handleCategoriesAndTypes = ({ target }) => {
    setCategorySelected(target.value);
    setTypeSelected("");
  };

  const handleType = ({ target }) => {
    setTypeSelected(target.value);
  };

  useEffect(() => {
    if (categorySelected && Array.isArray(categories)) {
      const item = categories.find((category) => {
        return `${category.id}` === `${categorySelected}`;
      });
      if (item && Array.isArray(item?.types)) {
        setTypes(item?.types);
      }
    }
  }, [categorySelected]);

  return (
    <div>
      <Col sm={4}>
        <Label for="exampleSelect">Category</Label>
        <Input
          type="select"
          name="select"
          id="categorySelect"
          onChange={handleCategoriesAndTypes}
          value={categorySelected}
        >
          <option value="">Seleccione</option>
          {Array.isArray(categories) && (
            <>
              {categories.map((category, key) => {
                return (
                  <option
                    key={key}
                    className="option-custom"
                    name={category.name}
                    value={category.id}
                  >
                    {category.display_name}
                  </option>
                );
              })}
            </>
          )}
        </Input>
      </Col>

      <Col sm={4} className="mt-1">
        <Label for="exampleSelect">Type</Label>
        <Input
          type="select"
          name="select"
          id="typeSelect"
          value={typeSelected}
          onChange={handleType}
        >
          <option value="">Seleccione</option>
          {Array.isArray(types) && (
            <>
              {types.map((type, key) => {
                return (
                  <option key={key} className="option-custom" value={type.id}>
                    {type.display_name}
                  </option>
                );
              })}
            </>
          )}
        </Input>
      </Col>
    </div>
  );
}

export default SelectDinamicoPage;
