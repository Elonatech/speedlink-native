import { View, Text, StyleSheet} from 'react-native';
import { StatusBar } from 'expo-status-bar';

import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

export default function HomeScreen() {
  return (

 <View className="flex-1 items-center justify-center bg-green-500">
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}


// const styles = StyleSheet.create({
//   myStyles: {
//     color: "#808080",
//     bottom: -90,
//     left: -35,
//     position: "absolute"
//   },
//   titleContainer: {
//     flexDirection: "row",
//     gap: 8
//   }
// });
