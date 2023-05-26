import {
  Text,
  View,
  StyleSheet,
  TouchableHighlight,
  SectionList,
  SafeAreaView,
} from 'react-native';
import Container from '../components/Container';
import { TodoContext } from '../store/context/todoContext';
import { useContext, useEffect, useState } from 'react';

const HomeScreen = ({ navigation }) => {
  const todoContext = useContext(TodoContext);
  const [list, setList] = useState([]);

  useEffect(() => {
    setList([
      {
        data: todoContext.todoList.filter((item) => !item.done),
      },
      {
        title: 'Completed tasks',
        data: todoContext.todoList.filter((item) => item.done),
      },
    ]);
  }, [todoContext.todoList]);

  return (
    <Container>
      <SafeAreaView>
        <SectionList
          sections={list}
          renderItem={({ item, separators }) => (
            <TouchableHighlight
              key={item.id}
              style={styles.highlight}
              onShowUnderlay={separators.highlight}
              onHideUnderlay={separators.unhighlight}
              underlayColor='teal'
              onPress={() =>
                navigation.navigate('Detail', {
                  itemId: item.id,
                  title: item.title,
                })
              }
            >
              <View style={styles.item}>
                <Text
                  style={
                    item.done && {
                      textDecorationLine: 'line-through',
                    }
                  }
                >
                  {item.title}
                </Text>
                <Text>{'>'}</Text>
              </View>
            </TouchableHighlight>
          )}
          renderSectionHeader={({ section: { title } }) => (
            <View style={{ marginTop: 20 }}>
              <Text style={styles.title}>{title}</Text>
            </View>
          )}
        />
      </SafeAreaView>
    </Container>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  highlight: {
    borderRadius: 5,
    marginBottom: 10,
  },
  item: {
    borderColor: 'teal',
    borderWidth: 2,
    borderRadius: 5,
    paddingHorizontal: 10,
    paddingVertical: 15,
    width: 400,
    flex: 0,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  itemList: {
    flex: 1,
    gap: 6,
    paddingVertical: 10,
  },
  title: {
    fontSize: 20,
    marginBottom: 5,
  },
});
