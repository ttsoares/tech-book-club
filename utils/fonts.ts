import * as Font from 'expo-font';

export async function loadFonts() {
  await Font.loadAsync({
    Inter: require('../assets/fonts/inter/Inter.ttf'),
    InterIt: require('../assets/fonts/inter/InterIt.ttf'),
    Martian: require('../assets/fonts/martian-mono/Martian.ttf'),
  });
}
