
## learning react-native
  "state" is an object to track and respond to user's input
  each component gets its own instance of state
  when state changes, the component re-renders




# Notes on learning redux
#### Redux overview

Manages the app state, which is different from the component state. Never manipulate the app state in a reducer. Only create new states. A component can be a cunction or a class component. if we do not manipulate the app state.

store is the state I think





#### Terminology

 - **Containers:** Components that talk to redux
 - **Controlled Input** state driven input
 - **Middleware:** Takes in an action and either does nothing, it can stop it or change the action. I think it returns a promise
