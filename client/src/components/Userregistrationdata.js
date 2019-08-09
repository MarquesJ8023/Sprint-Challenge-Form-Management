import React from "react";
import ReactDOM from "react-dom";
import axios from 'axios';

class UserRegistrationData extends React.Component {
    constructor() {
      super();
      // we would not have access to `this` w/out you super!
      this.state = {
        user: {
            "error": "false",
            "message": "User created successfully",
            "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MiwiaWF0IjoxNTYzNDc2NTc0LCJleHAiOjE1NjM0ODAxNzR9.pIkjFgRRbrrg8j38YGiWpMlw0wgTWRfZmIIMAeFLQcw"
        },
    };
}
    // state = {}
  
    componentDidMount() {
      this.fetchUser();
    }
  
    fetchUser = async () => {
      let res = await axios.get(`http://localhost:5000/api/restricted/data`)
       this.setState({
         user: res.data
       }) 
    };
  
    render() {
      console.log(this.state);
      return (
        <div>
          {this.state.users.map(u => (<h1>{u.login}</h1>))}
        </div>
      );
    }
  }

  export default UserRegistrationData;