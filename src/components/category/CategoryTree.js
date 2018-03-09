import React from 'react';
import PropTypes from 'prop-types';

const CategoryTree = ({categories, toggleVisibility, isVisible}) => {
  return (
    <ul>
      {categories && categories.map((category, index) => {
        return category.subCategories.length
          ? <li key={index} onClick={() => toggleVisibility(category)}>{ category.name }
            { isVisible[category.id] &&
              <CategoryTree
                categories={category.subCategories}
                toggleVisibility={toggleVisibility}
                isVisible={isVisible}
              />
            }

            </li>
          : <li key={index} onClick={() => toggleVisibility(category)}>{ category.name }</li>
      })}
    </ul>
  );
};

CategoryTree.propTypes = {
  categories: PropTypes.array,
  toggleVisibility: PropTypes.func
};

export default CategoryTree;
