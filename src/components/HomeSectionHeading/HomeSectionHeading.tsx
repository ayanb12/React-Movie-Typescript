import React, { Fragment, useState } from "react";
import { Heading, Categories, Category } from "./HomeSectionHeading.style";

interface IProps {
  data: {
    heading: string;
    categories: string[];
  };
  type: any;
}

export interface IState {
  categorySelected: number;
}

const HomeSectionHeading = ({ data, type }: IProps) => {
  const [selectedCategory, setSelectedcategory] =
    useState<IState["categorySelected"]>(0);

  const handleClick = (item: string, idx: number) => {
    setSelectedcategory(idx);
    type(item);
  };

  return (
    <Heading>
      <h1>{data.heading}</h1>
      <Categories>
        {data.categories.map((item, idx) => (
          <Fragment key={idx}>
            <Category
              selectedCategory={selectedCategory === idx}
              onClick={() => handleClick(item, idx)}
            >
              {item}
            </Category>
          </Fragment>
        ))}
      </Categories>
    </Heading>
  );
};

export default HomeSectionHeading;
