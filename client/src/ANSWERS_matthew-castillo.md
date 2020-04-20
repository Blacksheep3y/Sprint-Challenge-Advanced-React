Self-Study/Essay Questions

    Demonstrate your understanding of this Sprint's concepts by answering the following free-form questions. Edit the ANSWERS.md file to include your answers after each question. Make sure to leave a blank line above and below your answer so it is clear and easy to read by your project manager.

 Q: Why would you use class component over function components (removing hooks from the question)?
 
 A:
Functional components are basic JavaScript functions. These are typically arrow functions but can also be created with the regular function keyword.
Sometimes referred to as “dumb” or “stateless” components as they simply accept data and display them in some form; that is they are mainly responsible for rendering UI. 

Class components make use of ES6 class and extend the Component class in React.
Sometimes called “smart” or “stateful” components as they tend to implement logic and state.
React lifecycle methods can be used inside class components (for example, componentDidMount).
You pass props down to class components and access them with this.props

 Q: Name three lifecycle methods and their purposes.

componentDidMount() = Mounting – Birth of your component
componentDidUpdate() = Update – Growth of your component
componentWillUnmount() = Unmount – Death of your component

 Q: What is the purpose of a custom hook?

Custom Hooks are a mechanism to reuse stateful logic (such as setting up a subscription and remembering the current value), but every time you use a custom Hook, all state and effects inside of it are fully isolated.

 Q: Why is it important to test our apps?

 It is important to test our apps so that down the line our apps do not break due to issues that could have long been fixed during the testing phases. We test our app for bugs, expected outcomes, etc. Testing apps beforehand also makes it less expensive for companies to manually test later on.