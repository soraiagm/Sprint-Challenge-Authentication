const request = require('supertest');

const server = require('../api/server.js');

describe('GET /', function() {
    it('should return 200 OK', function() {
        // make a GET request to //
        return request(server).get('/')
               .then(res => {
                // check that it's working //
                expect(res.status).toBe(200);
        })
    })

 })