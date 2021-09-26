import React from 'react';
import './Categories.css';
/*
interface CategoryProps {
  selected: SelectedCategory;
  onClick: (newCategory: SelectedCategory) => void;
} */

function Categories({selected, onClick}) {
  return (
    <div className='categories-grid'>
        <Category onClick={onClick} selected={selected} current={"New"}/>
        <Category onClick={onClick} selected={selected} current={"Popular"}/>
        <Category onClick={onClick} selected={selected} current={"Recommendations"}/>
    </div>
  );
}
/*
interface SingleCategoryProps extends CategoryProps {
    current: SelectedCategory;
} */
const Category = ({onClick, selected, current}) => {
    return (
        <h6
            onClick={() => onClick(current)}
            className={ selected === current ? 'categories-text-selected' : 'categories-text' }
        >
        {current}
        </h6>
    );
}

export default Categories;
