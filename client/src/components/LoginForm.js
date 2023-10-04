import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';


function BasicExample(props) {
  const [userList,setUserList] = useState()
  const [loginDetails,setLoginDetails] = useState({})
  const [message,setMessage] = useState("");
  useEffect(()=>{
    getUsers()
  },[])
const loginSumbit = () => {
  const loginUser  = userList?.length && userList.find((item)=>
    item.email === loginDetails.email && item.password === loginDetails.password 
  )
  if(loginUser?.email){
    console.log(loginUser)
    localStorage.setItem("userDetail", loginUser.email);
  }else {
    setMessage("Email / Password will be wrong")
  }
}
  const  getUsers = async()=>{
    await fetch("http://127.0.0.1:4400/users")
    .then((response)=> response.json())
    .then((data)=> {
      setUserList(data)
      console.log(data.length)
    })
    .catch((error)=>{
      console.error('error',error)
    })
  }

  return (
    <>
      <Form.Group className="mb-3 custom-input" controlId="formBasicEmail">
        <Form.Label></Form.Label>
        <Form.Control type="email" placeholder="Enter email" name="email" onChange={(e)=>setLoginDetails({...loginDetails,[e.target.name]:e.target.value})} required/>
        <Form.Text className="text-muted">
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3 custom-input" controlId="formBasicPassword">
        <Form.Label></Form.Label>
        <Form.Control type="password"  name="password" onChange={(e)=>setLoginDetails({...loginDetails,[e.target.name]:e.target.value})} required/>
      </Form.Group>
      <Button variant="primary" type='submit' onClick={()=>loginSumbit()}>
        Submit
      </Button>
    </>
  );
}

export default BasicExample;