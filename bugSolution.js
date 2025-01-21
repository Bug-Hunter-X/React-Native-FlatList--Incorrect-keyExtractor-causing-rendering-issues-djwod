```javascript
import React, { useState } from 'react';
import { FlatList, Text, View, StyleSheet } from 'react-native';

const DATA = [     {id: '1', title: 'Item 1'},     {id: '2', title: 'Item 2'},     {id: '3', title: 'Item 3'}, ];

const Item = ({ title }) => (
  <View style={styles.item}>
    <Text style={styles.title}>{title}</Text>
  </View>
);

const BugSolution = () => {
  const renderItem = ({ item }) => {
    return <Item title={item.title} />;
  };

  return (
    <FlatList
      data={DATA}
      renderItem={renderItem}
      keyExtractor={(item) => item.id} // Correct keyExtractor
    />
  );
};

export default BugSolution;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
});
```