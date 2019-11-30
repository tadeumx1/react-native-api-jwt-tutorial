import { Dimensions } from 'react-native'

const { width, height } = Dimensions.get('window')

const styles = {
  box: {
    backgroundColor: '#FFF',
    borderRadius: 3,
    padding: 20,
  },

  metrics: {
    basePadding: 20,
    baseMargin: 10,
    baseRadius: 3,
    screenWidth: width < height ? width : height,
    screenHeight: width < height ? height : width,
  },

  colors: {
    white: '#FFF',
    lighter: '#EEE',
    light: '#DDD',
    regular: '#999',
    dark: '#666',
    darker: '#333',
    black: '#000',

    primary: '#7A91CA',
    secondary: '#444A5A',
    success: '#9DCA83',
    danger: '#E37A7A',

    transparent: 'transparent',
    darkTransparent: 'rgba(0, 0, 0, 0.6)',
    whiteTransparent: 'rgba(0, 0, 0, 0.3)',
  },
};

export default styles
