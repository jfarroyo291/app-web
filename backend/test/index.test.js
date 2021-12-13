<<<<<<< HEAD
const app = require('../routes');
const expect = require('chai').expect;
const assert = require('chai').assert;
const request = require('supertest');

describe("Server a live message",
    ()=>{
        it("Ping-pong", ()=>{
            return request(app)
            .get("/api")
            .expect(200, {"message":"pong"})
        })
    }
=======
const app = require('../routes');
const expect = require('chai').expect;
const assert = require('chai').assert;
const request = require('supertest');

describe("Server a live message",
    ()=>{
        it("Ping-pong", ()=>{
            return request(app)
            .get("/api")
            .expect(200, {"message":"pong"})
        })
    }
>>>>>>> 73ec1c64de61a20f2c8896c1ffb4b60a0b19c786
)