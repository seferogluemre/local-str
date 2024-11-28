import { Button, Container, Form, FormControl, Row, Col } from 'react-bootstrap'
import './App.css'
import { useState, useEffect } from 'react'
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
  const [storedUsers, setStoredUsers] = useState<User[]>([]);

  useEffect(() => {
    // Sayfa yüklendiğinde localStorage'deki kullanıcıları çekiyoruz
    const savedUsers = localStorage.getItem("users");
    if (savedUsers) {
      setStoredUsers(JSON.parse(savedUsers));
    }
  }, []);

  const handleDataForm = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!firstNameValue) return;
    if (!lastNameValue) return;

    const newUser: User = {
      firstName: firstNameValue.toLocaleLowerCase(),
      lastName: lastNameValue.toLocaleLowerCase(),
      age: +ageValue,
    }

    const updatedUsers = [...user, newUser];
    setUsers(updatedUsers);
    setStoredUsers(updatedUsers);

    // Kullanıcıları localStorage'e kaydediyoruz
    localStorage.setItem("users", JSON.stringify(updatedUsers));

    alert("Kullanıcı sisteme eklendi");

    // Formu sıfırlıyoruz
    setFirstName("");
    setLastName("");
    setAge(0);
  }

  return (
    <>
      <Container>
        <h3>Kullanıcı Kaydı</h3>
        <Form onSubmit={handleDataForm}>
          <div className='my-2'>
            <FormControl
              type='text'
              placeholder='İsminizi giriniz...'
              value={firstNameValue}
              onChange={(e) => setFirstName(e.target.value)}
              className='form-control'
            />
          </div>
          <div className='my-2'>
            <FormControl
              type='text'
              placeholder='Soyisminizi giriniz...'
              value={lastNameValue}
              onChange={(e) => setLastName(e.target.value)}
              className='form-control'
            />
          </div>
          <div className='my-2'>
            <FormControl
              type='number'
              placeholder='Yaşınızı giriniz...'
              value={ageValue}
              onChange={(e) => setAge(+e.target.value)}
              className='form-control'
            />
          </div>
          <Button type='submit'>Kaydol</Button>
        </Form>
      </Container>

      <Container className='mt-4'>
        <h3>Local Storage'deki Kullanıcılar</h3>
        <Row>
          {storedUsers.length > 0 ? (
            storedUsers.map((u, index) => (
              <Col key={index} className='mb-3' xs={12} md={6} lg={4}>
                <div className='p-3 border rounded'>
                  <p><strong>İsim:</strong> {u.firstName}</p>
                  <p><strong>Soyisim:</strong> {u.lastName}</p>
                  <p><strong>Yaş:</strong> {u.age}</p>
                </div>
              </Col>
            ))
          ) : (
            <p>Henüz kullanıcı eklenmedi.</p>
          )}
        </Row>
      </Container>
    </>
  )
}

export default App;
