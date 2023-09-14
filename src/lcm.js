


// Mounting

// -> Constructor (1)
// -> set state base on props
// -> Bind methods
// -> Analytics
// -> Call only once

// getDerivedStateFromProps(2)
// -> based on new props and new state derive new state
// -> call everytime when state or prop change
// -> static method

// render(3)
// -> render html

// componentDidMount(4)
// -> on page load fetch data
// -> event listner
// -> dom manipulation
// -> call only once

// Updating

// getDerivedStateFromProps(1)
// -> based on new props and new state derive new state
// -> call everytime when state or prop change
// -> static method

// shouldComponent(2)(MIMP for performace)
// -> restrict render base on old props and old state value
// -> pureComponent / memo

// render(3)
// -> render html

// getSnapShotBeroreUpdate(4)
// -> get snapshot and pass it to cdu

// -> componenetDidUpdate(5)
// -> Dom manipulation

// UnMounting
// -> componentWillUnmount(1)
// -> clear all async calls(callback, promises, generator)

// Error
// -> getDerivedStateFromError

// -> componentDidCatch