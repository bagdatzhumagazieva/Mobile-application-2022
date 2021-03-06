import Main from "./Main";
import Home from "./Home";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import NewsList from "./NewsList";

const Stack = createStackNavigator();

export default function App() {
  return (
      <NavigationContainer>
          <Stack.Navigator>
              <Stack.Screen
                  name="main"
                  component={Main}
              />
              <Stack.Screen
                  name="news"
                  component={NewsList}
              />
              <Stack.Screen
                  name="Home"
                  component={Home}
              />
          </Stack.Navigator>
      </NavigationContainer>
  );
}
