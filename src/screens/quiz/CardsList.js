import React, { Component } from 'react';
import { View, Text, Animated, Dimensions } from 'react-native';

import { isIOS } from '../../../utils/OS-types'
import { windowWidth } from '../../../utils/windowDimensions'

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
      toValue: { x: windowWidth, y: 0 },
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
      inputRange: [0, windowWidth],
      outputRange: ['0deg', '120deg']
    });

    return {
      ...position.getLayout(),
      transform: [{ rotate }]
    }
  }

  renderCards () {
    const {responses, questions} = this.props;
    return (
      questions.map((item, i) => {
        if ( i < this.state.index ) {
          return null;
        }

        if ( i === this.state.index ) {
          return (
            <Animated.View
              key={i}
              style={[this.getCardStyle(), { zIndex: 2 }]}
              >
              <Card data={item} responses={responses} questions={questions}/>
            </Animated.View>
          );
        }

        return (
          <Animated.View
            key={i}
            style={[styles.cardStyle, { zIndex: 1, top: 10 * (i - this.state.index) }]}>
            <Card data={item} responses={responses} questions={questions}/>
          </Animated.View>
        )
      }).reverse()
    )
  }

  render () {
    return (
      <View style={{flex: 1, marginTop: isIOS ? 60 : 100}}>
        {this.renderCards()}
      </View>
    )
  }
}

const styles = {
  cardStyle: {
    position: 'absolute',
    width: windowWidth
  }
};

export default CardsList;
