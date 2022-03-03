import React from "react";
import { useDispatch } from "react-redux";
import { Category, selectCategory } from "../redux/reducers/categories";

type Props = {
  categories: Category[],
  selectedCategory: String
}

const Categories: React.FC<Props> = ({ categories, selectedCategory }) => {

  const dispatch = useDispatch();

  const dispatchSelection = (name: string) => {
    dispatch(selectCategory(name))
  };

  return (
    <div style={{display: 'flex', justifyContent: 'space-around', margin: '2rem'}}>
        {categories.map(c => <button 
          style={selectedCategory == c.name ? 
          {width: '20rem', height: '5rem', background: 'blue', fontSize: '2rem', color: 'white'}: 
          {width: '20rem', height: '5rem', fontSize: '2rem'} } key={c.id} 
          onClick={() => dispatchSelection(c.name)}>{c.name}</button>)}
      </div>
  );
}

export default Categories;
