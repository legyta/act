var chai = require('chai'),
    expect = chai.expect;
chai.use(require('chai-like'));
chai.use(require('chai-things'));

const axios = require('axios');

const BASE_URL = "http://localhost:5000/api";

describe('api/user/register', () => {
    const _url = `${BASE_URL}/users/register`

    describe('Email verification', () => {
        it('Should return errors for no email in submission', async() => {
            await axios.post(`${BASE_URL}/users/register`, {"em": "dd@ss.com"})
            .catch(function (error) {
                expect(error.response.status).to.equal(422);
                expect(error.response.data).to.have.property("errors").to.be.an('array').that.contains.something.like({"msg": 'Email was not in form'});
            });
            
        });
    
        it('Should return errors for invalid email', async () => {
            await axios.post(`${BASE_URL}/users/register`, {"email": "dd.com"})
            .catch(function (error) {
                expect(error.response.status).to.equal(422);
                expect(error.response.data).to.have.property("errors").to.be.an('array').that.contains.something.like({"msg": 'Invalid Email'});
            });
        }); 
    
        it('Should return errors for empty email', async () => {
            await axios.post(`${BASE_URL}/users/register`, {"email": ""})
            .catch(function (error) {
                expect(error.response.status).to.equal(422);
                expect(error.response.data).to.have.property("errors").to.be.an('array').that.contains.something.like({"msg": 'Email does not exist'});
            });
        }); 
        
    });

    


});


