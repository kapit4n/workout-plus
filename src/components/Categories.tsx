import React from "react";
import { Category } from "../redux/reducers/categories";

type Props = {
  categories: Category[]
}

const Categories: React.FC<Props> = ({ categories }) => {

  const onSelectCategory = (name: string): void => console.log(`${name} selected`)

  return (
    <div>
      {categories.map(c => <button key={c.id} onClick={() => onSelectCategory(c.name)}>{c.name}</button>)}
    </div>
  );
}

export default Categories;