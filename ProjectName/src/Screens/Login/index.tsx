import React from 'react';
import {Animated, Easing} from 'react-native';
import Assets from 'ProjectName/src/Assets';
import Image from 'ProjectName/src/Components/Image';
import Text from 'ProjectName/src/Components/Text';
import View from 'ProjectName/src/Components/View';
import {TAuthScreen} from 'ProjectName/src/Navigation/types';
import {LOGIN} from 'ProjectName/src/Redux/Reducers/Auth/actions';
const Login: TAuthScreen<'Login'> = () => {
  const spinValue = React.useRef(new Animated.Value(0)).current;

  React.useEffect(() => {
    const spin = () => {
      spinValue.setValue(0);
      Animated.timing(spinValue, {
        toValue: 1,
        duration: 5000, // Adjust the duration as needed
        easing: Easing.linear,
        useNativeDriver: true,
      }).start(spin);
    };

    spin();
  }, [spinValue]);

  const spin = spinValue.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg'],
  });
  return (
    <View flexLayout={['flexBase', 'flexCenter']}>
      <Animated.View
        style={{
          transform: [{rotate: spin}],
        }}>
        <Image source={Assets.logo} size={100} />
      </Animated.View>
      <Text onPress={LOGIN} typography={'h1'} color="rippleColor">
        AUTH SCREEN
      </Text>
    </View>
  );
};

export default Login;
