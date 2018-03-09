import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import CategoryTree from './CategoryTree';
import * as categoryActions from '../../actions/categoryActions';

class CategoryPage extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.setVisibility = this.setVisibility.bind(this);
  }

  setVisibility(category) {
    this.props.actions.toggleVisibility(category);
  }

  render() {
    const { categories, isVisible } = this.props;
    return (
      <div>
        <CategoryTree
          categories={categories}
          toggleVisibility={this.setVisibility}
          isVisible={isVisible}/>
      </div>
    );
  }
}

CategoryPage.propTypes = {
  categories: PropTypes.arrayOf(Object).isRequired,
  isVisible: PropTypes.bool
};

function mapStateToProps(state, ownProps) {
  return {
    categories: state.categories,
    isVisible: state.categories.isVisible
  };
}

function mapDispatchToProps (dispatch) {
  return {
    actions: bindActionCreators(categoryActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(CategoryPage);
