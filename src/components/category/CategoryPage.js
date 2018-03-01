import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as categoryActions from '../../actions/categoryActions';

class CategoryPage extends React.Component {
  constructor(props, context) {
    super(props, context);
  }

  render() {
    return (
      <div>
        {this.props.categories.map((category, index) => <span key={index}>{ category.name }</span>)}
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
