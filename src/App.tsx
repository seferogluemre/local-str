
import { Button, Container, Form, FormControl, Row } from 'react-bootstrap'
import './App.css'
import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

interface User {
  firstName: string;
  lastName: string;
  age: number;

}

function App() {
  const [user, setUsers] = useState<User[]>([]);
  const [firstNameValue, setFirstName] = useState<string>("");
  const [lastNameValue, setLastName] = useState<string>("");
  const [ageValue, setAge] = useState<number>(0);


  const handleDataForm = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!firstNameValue) return;
    if (!lastNameValue) return;

    const newUser: User = {
      firstName: firstNameValue.toLocaleLowerCase(),
      lastName: lastNameValue.toLocaleLowerCase(),
      age: +ageValue,
    }

    setUsers([...user, newUser]);
    alert("Kullanıcı sisteme eklendi");
    localStorage.setItem("users", JSON.stringify(user))
  }


  return (
    <>
      <Container>
        <Form onSubmit={handleDataForm}>
          <div className='my-2'>
            <FormControl type='text' placeholder='İsminizi giriniz...' value={firstNameValue} onChange={(e) => setFirstName(e.target.value)} className=' form-control' />
          </div>
          <div className='my-2'>
            <FormControl type='text' placeholder='Soyisminizi giriniz...' value={lastNameValue} onChange={(e) => setLastName(e.target.value)} className=' form-control' />
          </div>
          <div className='my-2'>
            <FormControl type='number' placeholder='Yaşınızı giriniz...' value={ageValue} onChange={(e) => setAge(+e.target.value)} className=' form-control' />
          </div>
          <Button type='submit'>Kaydol</Button>
        </Form>
      </Container>

    </>
  )
}

export default App
