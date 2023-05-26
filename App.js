import TodoContextProvider from './store/context/todoContext';
import StackNavigator from './components/StackNavigator';

export default function App() {
  return (
    <TodoContextProvider>
      <StackNavigator />
    </TodoContextProvider>
  );
}
