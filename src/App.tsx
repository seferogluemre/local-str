
import { Container, Form, FormControl } from 'react-bootstrap'
import './App.css'
import { useState } from 'react'

interface User {
  firstName: string;
  lastName: string;
  age: number;

}


function App() {
  const [user, setUsers] = useState<User[]>([]);
  const [firstName, setFirstName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");
  const [age, setAge] = useState<number>(0);


  const handleDataForm = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  }


  return (
    <>

      <Container>
        <Form onSubmit={handleDataForm}>
          <div className='my-2'>
            <FormControl type='text' placeholder='İsminizi giriniz...' value={firstName} onChange={(e) => setFirstName(e.target.value)} className='w-25' />
          </div>
          <div className='my-2'>
            <FormControl type='text' placeholder='İsminizi giriniz...' value={lastName} onChange={(e) => setLastName(e.target.value)} className='w-25' />
          </div>
          <div className='my-2'>
            <FormControl type='number' placeholder='İsminizi giriniz...' value={age} onChange={(e) => setAge(+e.target.value)} className='w-25' />
          </div>
        </Form>
      </Container>

    </>
  )
}

export default App
