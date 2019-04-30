import React from 'react'
import ReactDOM from 'react-dom'
import Button from '@material-ui/core/Button';

const App = () => (
    <div>
        <h1>Hello World, from React App!!</h1><br />
        <Button variant="contained" color="primary">Register</Button>
    </div>
)

ReactDOM.render(<App/>, document.getElementById('root'))