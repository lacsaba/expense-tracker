import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import CategoryTree from './CategoryTree';
import * as categoryActions from '../../store/actions/category';

class CategoryPage extends React.Component {
  constructor(props, context) {
    super(props, context);
  }

  render() {
    const { categories } = this.props;
    return (
      <div>
        <CategoryTree categories={categories}/>
      </div>
    );
  }
}

CategoryPage.propTypes = {
  categories: PropTypes.arrayOf(Object).isRequired
};

function mapStateToProps(state, ownProps) {
  return {
    categories: state.categories
  };
}

function mapDispatchToProps (dispatch) {
  return {
    actions: bindActionCreators(categoryActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(CategoryPage);
