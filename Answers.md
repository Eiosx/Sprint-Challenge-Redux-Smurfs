1.  Name 3 JavaScript Array/Object Methods that do not produce side-effects? Which method do we use to create a new object while extending the properties of another object?


1.  Describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?



1.  What is the difference between Application state and Component state? When would be a good time to use one over the other?
Application state is state that can be accessed by all components without having to manually bring props down a component tree. Component state is state that is exclusive to a sole component but can be passed down to children components. Application state would work best in giant applications that have numerous components that require the same state. Component state makes sense for smaller applications in which not many of the components need to share the same state.


1.  What is middleware? 

software that intercepts redux actions before they are dispatched to reducers. 


1.  Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?

It allows us to run asynchronous code before sending the data to the reducers. 


1.  Which `react-redux` method links up our `components` with our `redux store`?

Connect
