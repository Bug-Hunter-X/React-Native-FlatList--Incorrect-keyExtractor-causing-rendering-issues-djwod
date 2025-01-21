# React Native FlatList: Incorrect keyExtractor Causing Rendering Issues

This repository demonstrates a common but easily overlooked issue with React Native's FlatList component: the improper use of the `keyExtractor` prop.  The `keyExtractor` prop is crucial for efficient rendering and data management within FlatList. When used incorrectly, unexpected behavior such as incorrect item positioning, duplication, or disappearance of list items occurs, especially when the data source is frequently updated.

The `bug.js` file illustrates the problem. It uses a non-unique `keyExtractor`, leading to inconsistencies in rendering. The `bugSolution.js` file offers the corrected implementation with a robust `keyExtractor` that guarantees unique keys for each item.