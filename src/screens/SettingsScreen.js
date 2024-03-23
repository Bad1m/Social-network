import React, { useState } from 'react';
import { View, Button, StyleSheet } from 'react-native';

const SettingsScreen = () => {
  const [backgroundColor, setBackgroundColor] = useState('white');

  const handleButtonClick = (color) => {
    setBackgroundColor(color);
  };

  return (
    <View style={[styles.container, { backgroundColor }]}>
      <Button
        title="Red"
        color="red"
        onPress={() => handleButtonClick('red')}
      />
      <Button
        title="Green"
        color="green"
        onPress={() => handleButtonClick('green')}
      />
      <Button
        title="Blue"
        color="blue"
        onPress={() => handleButtonClick('blue')}
      />
      <Button
        title="Yellow"
        color="yellow"
        onPress={() => handleButtonClick('yellow')}
      />
      <Button
        title="Purple"
        color="purple"
        onPress={() => handleButtonClick('purple')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default SettingsScreen;
