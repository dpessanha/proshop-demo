import { useState, useEffect } from 'react'
import { Table, Form, Button, Row, Col } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { toast } from 'react-toastify'
import Message from '../components/Message.jsx'
import Loader from '../components/Loader.jsx'
import { useProfileMutation } from '../slices/usersApiSlice.js'
import { setCredentials } from '../slices/loginSlice.js'
import Switch from '../components/Switch.jsx'

const ProfileScreen = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const dispatch = useDispatch()
  const { userInfo } = useSelector((state) => state.login)
  // let changePasswordVar = false

  const [updateProfile, { isLoading: loadingUpdateProfile }] =
    useProfileMutation()

  useEffect(() => {
    if (userInfo) {
      setName(userInfo.name)
      setEmail(userInfo.email)
    }
  }, [userInfo, userInfo.name, userInfo.email])

  const submitHandler = async (e) => {
    e.preventDefault()
    if (password !== confirmPassword) {
      toast.error('Passwords do not match.')
    } else {
      try {
        const res = await updateProfile({
          _id: userInfo._id,
          name,
          email,
          password,
        }).unwrap()
        dispatch(setCredentials(res))
        toast.success('Profile updated successfully!')
      } catch (err) {
        toast.error(err?.data?.message || err.error)
      }
    }
  }

  // const changePasswordHandler = (e) => {
  //   changePasswordVar = !changePasswordVar
  //   console.log(changePasswordVar)
  // }

  return (
    <Row>
      <Col md={3}>
        <h2>User Profile</h2>
        <Form onSubmit={submitHandler}>
          <Form.Group controlId='name' className='my-2'>
            <Form.Label>Name</Form.Label>
            <Form.Control
              type='name'
              placeholder='Enter Name'
              value={name}
              onChange={(e) => setName(e.target.value)}
            ></Form.Control>
          </Form.Group>
          <Form.Group controlId='email' className='my-2'>
            <Form.Label>Email</Form.Label>
            <Form.Control
              type='email'
              placeholder='Enter Email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            ></Form.Control>
          </Form.Group>
          {/* <p style={{ cursor: 'pointer' }} onClick={changePasswordHandler}>
            Want to change Password?
          </p> */}
          {/* {changePasswordVar === true && ( <== Configure conditional showing  */}
          <Form.Group controlId='password' className='my-2'>
            <h3 className='my-3'>Password Change</h3>
            <Form.Label>Password</Form.Label>
            <Form.Control
              type='password'
              placeholder='Change Password?'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            ></Form.Control>
          </Form.Group>
          <Form.Group controlId='confirmPassword' className='my-2'>
            <Form.Label>Confirm Password</Form.Label>
            <Form.Control
              type='password'
              placeholder='Confirm Change Password'
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            ></Form.Control>
          </Form.Group>
          <Button type='submit' variant='primary' className='my-2'>
            Update
          </Button>
          {loadingUpdateProfile && <Loader />}
        </Form>
      </Col>
      <Col md={9}>Col9</Col>
    </Row>
  )
}

export default ProfileScreen
