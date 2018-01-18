import React, { Component } from 'react';
import PropTypes, { shape } from 'prop-types';
import {
  ActivityIndicator, ListView, Text, View,
} from 'react-native';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import homeActions from '../../actions/home';
import styles from './styles';

class Home extends Component<{}> {
  componentDidMount() {
    this.props.getMovies();
  }

  render() {
    if (this.props.isLoading) {
      return (
        <View style={styles.container}>
          <ActivityIndicator />
        </View>
      );
    }
    const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
    const dataSource = ds.cloneWithRows(this.props.movies);
    return (
      <View style={styles.container}>
        <ListView
          dataSource={dataSource}
          renderRow={rowData => <Text>{rowData.title}, {rowData.releaseYear}</Text>}
        />
      </View>
    );
  }
}

Home.propTypes = {
  isLoading: PropTypes.bool,
  movies: PropTypes.arrayOf(shape({
    title: PropTypes.string.isRequired,
    releaseYear: PropTypes.string.isRequired,
  })),
  getMovies: PropTypes.func.isRequired,
};

Home.defaultProps = {
  isLoading: true,
  movies: [],
};

function mapStateToProps(state) {
  return {
    isLoading: state.home.isLoading,
    movies: state.home.movies,
  };
}

const mapDispatchToProps = dispatch => (bindActionCreators(homeActions, dispatch));

export default connect(mapStateToProps, mapDispatchToProps)(Home);
