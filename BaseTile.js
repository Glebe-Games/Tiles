import React from 'react';
import {
  Animated,
  Dimensions,
  StyleSheet,
  TouchableWithoutFeedback,
  Easing,
} from 'react-native';
import PropTypes from 'prop-types';


const styles = StyleSheet.create({
  box: {
    backgroundColor: 'lightblue',
    width: 300,
    padding: 100,
    borderRadius: 10,
    transform: [{ translateY: -200 }],
  },
});

class BaseTile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      drop: new Animated.Value(0),
      clear: new Animated.Value(0),
      dropSpeed: 1500,
      clearSpeed: 200,
    };
  }

  componentDidMount = () => {
    const { drop, dropSpeed } = this.state;
    const { redrawTile } = this.props;
    this.dropAnim = Animated.timing(drop, {
      toValue: Dimensions.get('window').height - 200,
      easing: Easing.ease,
      duration: dropSpeed,
      useNativeDriver: true,
    });
    this.dropAnim.start((status) => {
      if (status.finished) {
        redrawTile();
      }
    });
  }

  handlePress = () => {
    const { clear, clearSpeed } = this.state;
    const { redrawTile } = this.props;
    this.dropAnim.stop();
    Animated.timing(clear, {
      toValue: Dimensions.get('window').width + 300,
      easing: Easing.ease,
      duration: clearSpeed,
      useNativeDriver: true,
    }).start(() => {
      redrawTile();
    });
  }

  render = () => {
    const { drop, clear } = this.state;
    return (
      <TouchableWithoutFeedback onPress={this.handlePress}>
        <Animated.View style={[
          styles.box,
          {
            transform: [
              { translateY: drop },
              { translateX: clear }],
          },
        ]}
        />
      </TouchableWithoutFeedback>
    );
  };
}

BaseTile.propTypes = {
  redrawTile: PropTypes.func.isRequired,
};

export default BaseTile;
