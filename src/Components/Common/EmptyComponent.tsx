import { Text, StyleSheet, View, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('screen');

const EmptyComponent=(props:any)=> {
  return (
    <View style={styles.container}>
      <Text style={styles.dataText}>Data Not Found</Text>
    </View>
  );
}
export default  EmptyComponent;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    height: height*0.65
  },
  dataText: {
    color: '#000',
    fontSize: 18,
    fontWeight: '600'
  }
});
