import React from 'react'
import authors from '../data/authors.js';
import { Container, Row, Col } from 'react-bootstrap'
import './Authors.css'
import Author from '../author/Author'

const Authors = () => {
    let authorsList = authors
    console.log(authorsList)

  return (
    <>
        <Container fluid="sm">
            <Row className='d-flex justify-content-center my-5'>
                <h2 className='w-25 text-center border-bottom pb-3'>Autoras</h2>
            </Row>
            <Row className='gx-3'>
                {authorsList.map((author) => (
                    <Author 
                    key={author.id}
                    name={author.name}
                    img={author.img}
                    />
                ))}
            </Row>
        </Container>
    </>
  )
}

export default Authors