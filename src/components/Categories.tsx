import React from "react";
import { useDispatch } from "react-redux";
import { Category, selectCategory } from "../redux/reducers/categories";

type Props = {
  categories: Category[],
}

const Categories: React.FC<Props> = ({ categories }) => {

  const dispatch = useDispatch();

  const dispatchSelection = (name: string) => {
    dispatch(selectCategory(name))
  };

  return (
    <div style={{display: 'flex', justifyContent: 'space-around', margin: '2rem'}}>
        {categories.map(c => <button style={{width: '20rem', height: '5rem'}} key={c.id} onClick={() => dispatchSelection(c.name)}>{c.name}</button>)}
      </div>
  );
}

export default Categories;
