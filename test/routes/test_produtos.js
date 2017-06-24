const express = require('../../custom-express')
const request = require('supertest')(express)

describe('#Rotas de produtos', () => {
  it('Quero fazer um /produtos e receber um JSON', (done) => {
    request.get('/produtos')
           .set('Accept', 'application/json')
           .expect('Content-type', /json/)
           .expect(200, done())

  })

  it('Quero fazer um /produtos e receber um HTML', (done) => {
    request.get('/produtos')
           .expect('Content-type', /html/)
           .expect(200, done())

  })
})
