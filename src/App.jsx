import { useState } from 'react'
import './App.css'
import Layout from './components/layout/Layout'
import ContactForm from '../components/Contact'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Layout></Layout>
      <ContactForm></ContactForm>
    </>
  )
}

export default App
