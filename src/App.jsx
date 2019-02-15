import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {


  constructor(props) {
    super(props);

    //Set defaut state
    this.state = {
      userList: [
        {
          name: 'des',
          age: 25,
          occupation: 'gardener'
        },
        {
          name: 'iree',
          age: 24,
          occupation: 'dsf'
        }
      ],
      user: {
        name: '',
        age: '',
        occupation: ''
      }
    }


    //add function bindings 
  }
  
//add event handlers
  handleChangeInfo = e =>{

    // let arr = [1,2,3,4,5];
    // let arr2 = [2.5,2.8];

    // arr = [1,2,arr2,3,4,5]; //1,2,[2.5,2.8],3,4,5
    // arr = [1,2,[...arr2],3,4,5]; //1,2,2.5,2.8,3,4,5
    
    console.log('EVENT')
    console.log(e.target)
    const {name, value} = e.target;

    this.setState((prevState) => ({
      user: {
        ...prevState.user,
        [name]: value
      }
    })
    );
  }

    handleAddUser = e =>{

      console.log('passed handle and user');
      console.log(this.state.userList);
      let user = this.state.user;
      let userList = [...this.state.userList];

      userList.push(user);
      console.log(this.state.userList);
      this.setState({userList: userList});
      e.preventDefault();
    
  }


  deleteUser = index => {
    let userList = [...this.state.userList];
    userList.splice(index,1);
    this.setState({userList: userList});
  }
  render() {

    
    let userList = this.state.userList;
    let user = this.state.user;

    console.log('users');
    console.log(this.state.userList);





    return (
      <div className="App">

      <div className='forms-panel'>
      <form>
      name: <br/> <input type='text' name='name' placeholder='Name' onChange={this.handleChangeInfo}/><br/>
      age: <br/> <input type='text' name='age' placeholder='Age' onChange={this.handleChangeInfo}/><br/>
      occupation: <br/> <input type='text' name='occupation' placeholder='Occupation' onChange={this.handleChangeInfo}/><br/>
      <br/>
      <button type='button' onClick={this.handleAddUser}>Add User</button>
      <br></br>
      </form>
      </div>

      <div className='table-panel'>
     

      <table>
        <thead>

        </thead>
        <tbody>
          <tr>
          <th className='user-table-cell'>NAME</th>
          <th className='user-table-cell'>AGE</th>
          <th className='user-table-cell'>OCCUPATION</th>
          </tr>

          {
            userList.map((user, index) =>{
              return(
                <tr className='user-table-row'>
                  <td className='user-table-cell'>{user.name}</td>
                  <td className='user-table-cell'>{user.age}</td>
                  <td className='user-table-cell'>{user.occupation}</td>
                  <td className='user-table-cell'><button type='button' onClick={() => this.deleteUser(index)}>Delete User</button></td>
                  
                </tr>
              )
            })
          }
        </tbody>
      </table>
      </div>

        
      </div>
    );
  }
}

export default App;
