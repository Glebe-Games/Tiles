import React from 'react';
import { StyleSheet, View } from 'react-native';

const styles = StyleSheet.create({
  content: {
    flex: 1,
    alignItems: 'center',
  },
  box: {
    backgroundColor: 'lightblue',
    width: 300,
    marginTop: 25,
    padding: 100,
    borderRadius: 10,
  },
});

class BaseTile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      margin: 25,
    };
  }

  componentDidMount = () => {
    let pos = 25;
    let speed = 1;
    const id = setInterval(() => {
      if (pos === 450) {
        clearInterval(id);
      } else {
        pos += 1;
        this.setState({
          margin: pos,
        });
        speed -= 0.1;
      }
    }, speed);
  }

  render = () => {
    const { margin } = this.state;
    return (
      <View style={styles.content}>
        <View style={[styles.box, { marginTop: margin }]} />
      </View>
    );
  }
}

export default BaseTile;
