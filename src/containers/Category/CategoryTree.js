import React from 'react';
import PropTypes from 'prop-types';

const CategoryTree = ({categories}) => {
  return (
    <ul>
      {categories && categories.map((category, index) => {
        return category.subCategories.length
          ? <li key={index}>{ category.name }
              <CategoryTree categories={category.subCategories}/>
            </li>
          : <li key={index}>{ category.name }</li>
      })}
    </ul>
  );
};

CategoryTree.propTypes = {
  categories: PropTypes.array
};

export default CategoryTree;
