import bcrypt from 'bcryptjs'

const users = [
  {
    name: 'Admin User',
    email: 'admin@proshop.com',
    password: bcrypt.hashSync('123456', 10),
    isAdmin: true,
  },
  {
    name: 'John Doe',
    email: 'johndoe_real@gmail.com',
    password: bcrypt.hashSync('123456', 10),
    isAdmin: false,
  },
  {
    name: 'Jane Doe',
    email: 'janedoe_real@gmail.com',
    password: bcrypt.hashSync('123456', 10),
    isAdmin: false,
  },
  {
    name: 'Kamando Kaia',
    email: 'thekamandokaia@gmail.com',
    password: bcrypt.hashSync('123456', 10),
    isAdmin: false,
  },
  {
    name: 'Davi Pessanha',
    email: 'daopessanha@gmail.com',
    password: bcrypt.hashSync('123456', 10),
    isAdmin: true,
  },
]

export default users
