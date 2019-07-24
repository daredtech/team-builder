import React, {useState} from 'react';
import logo from './logo.svg';
import Form from './Form'
import './App.css';

const App = () => {

  // const [teamMembersList, setTeamMemberList] = useState([]);

  //populate with temp values for testing
  const [teamMembersList, setTeamMemberList] = useState(['member1', 'member1', 'member1', 'member1']);



  return (
    <div className='App'> 
    {teamMembersList}
    <Form> </Form>
    
    </div>
  )
}

export default App;
