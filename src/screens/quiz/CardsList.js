import React, { Component } from 'react';
import { View, Text, Animated, Dimensions } from 'react-native';

const SCREEN_WIDTH = Dimensions.get('window').width;
import Card from './Card'

class CardsList extends Component {
  constructor (props) {
    super(props);
    const position = new Animated.ValueXY();
    this.state = { position, index: 0 };
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.responses.length !== nextProps.responses.length) {
      this.swipeCard()
    }
  }

  swipeCard(){
    Animated.timing(this.state.position, {
      toValue: { x: SCREEN_WIDTH, y: 0 },
      duration: 100
    }).start(() => this.onSwipeComplete());
  }

  onSwipeComplete(){
    this.state.position.setValue({ x: 0, y: 0 });
    this.setState({ index: this.state.index + 1 })
  }

  getCardStyle () {
    const { position } = this.state;
    const rotate = position.x.interpolate({
      inputRange: [0, SCREEN_WIDTH],
      outputRange: ['0deg', '120deg']
    });

    return {
      ...position.getLayout(),
      transform: [{ rotate }]
    }
  }

  renderCards () {
    return (
      this.props.questions.map((item, i) => {
        if ( i < this.state.index ) {
          return null;
        }

        if ( i === this.state.index ) {
          return (
            <Animated.View
              key={i}
              style={[this.getCardStyle(), { zIndex: 2 }]}
              >
              <Card data={item}/>
            </Animated.View>
          );
        }

        return (
          <Animated.View
            key={i}
            style={[styles.cardStyle, { zIndex: 1, top: 10 * (i - this.state.index) }]}>
            <Card data={item}/>
          </Animated.View>
        )
      }).reverse()
    )
  }

  render () {
    return (
      <View style={{flex: 1}}>
        {this.renderCards()}
      </View>
    )
  }
}

const styles = {
  cardStyle: {
    position: 'absolute',
    width: SCREEN_WIDTH,
  }
};

export default CardsList;