const request = require('supertest');

const server = require('../api/server.js');

describe('POST /register', function(){
    it('should return a 200 OK', function() {
        return request(server).get('/')
               .then(res => {
                // check that it's working //
                expect(res.status).toBe(200);
        })
    })

    it('should return JSON', function() {
        return request(server).get('/')
               .then(res => {
                // check that it's working //
                expect(res.type).toMatch(/json/i);
        })
    })

    describe('POST /login', function(){
    it('should return JSON', function() {
        return request(server).get('/')
               .then(res => {
                // check that it's working //
                expect(res.type).toMatch(/json/i);
        })
    })

    it('should return JSON', function() {
        return request(server).get('/')
               .then(res => {
                // check that it's working //
                expect(res.type).toMatch(/json/i);
            })
        })
    })
})