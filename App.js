import React from 'react';
import { StyleSheet, View } from 'react-native';
import BaseTile from './BaseTile';

const styles = StyleSheet.create({
  content: {
    flex: 1,
    alignItems: 'center',
  },
});

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      uniqueId: 0,
    };
  }

  redrawTile = () => {
    const { uniqueId } = this.state;
    this.setState({
      uniqueId: uniqueId + 1,
    });
  }

  render = () => {
    const { uniqueId } = this.state;
    return (
      <View style={styles.content}>
        <BaseTile key={uniqueId} redrawTile={this.redrawTile} />
      </View>
    );
  };
}

export default App;
