var chai = require("chai");
chai.should();
chai.use(require('chai-things'));

var expect = chai.expect;
const axios = require('axios');
const testData = require('./data/testData.json')
const BASE_URL = "http://localhost:5000/api";

function toHaveError(error, key, value) {
    expect(error.response.status).to.equal(422);
    expect(error.response.data).to.have.property("errors").to.be.an('array')
    error.response.data.errors.should.contain.a.thing.with.property(key, value)
}

describe('api/user/register', () => {
    const _url = `${BASE_URL}/users/register`

    describe('Email verification', () => {

        it('Should return errors for no email in submission', async () => {
            await axios.post(`${BASE_URL}/users/register`, { "em": "dd@ss.com" })
                .catch(function (error) {
                    toHaveError(error, 'msg', 'Email was not in form')
                });

        });

        testData.invalidEmails.forEach(function (value) {
            it(`Should return errors for invalid email ${value}`, async () => {
                await axios.post(`${BASE_URL}/users/register`, { "email": value })
                    .catch(function (error) {
                        toHaveError(error, 'msg', 'Invalid Email')
                    });
            })
        });


        it('Should return errors for empty email', async () => {
            await axios.post(`${BASE_URL}/users/register`, { "email": "" })
                .catch(function (error) {
                    toHaveError(error, 'msg', 'Email does not exist')
                });
        });

        it('Should return error for email already in use', async () => {
            await axios.post(`${BASE_URL}/users/register`, { "email": "ligita.montvilaite@gmail.com" })
                .catch(function (error) {
                    toHaveError(error, 'msg', 'E-mail already in use')
                });
        });
    });

    describe('Password Verification', () => {

        testData.passwordMismatches.forEach(function (passwords) {
            it(`Should return errors for ${passwords[0]} not matching with ${passwords[1]} `, async () => {
                await axios.post(`${BASE_URL}/users/register`,
                    {
                        "password": passwords[0],
                        "passwordCheck": passwords[1]

                    })
                    .catch(function (error) {
                        toHaveError(error, 'msg', 'Passwords must match')
                    });
            });
        });

        testData.passwordShort.forEach(function (value) {
            it(`Should return errors for a too short password for ${value}`, async () => {
                await axios.post(`${BASE_URL}/users/register`,
                    {
                        "password": value,
                        "passwordCheck": value

                    })
                    .catch(function (error) {
                        toHaveError(error, 'msg', 'Password Must Be at Least 5 Characters')
                    });
            });
        });

        testData.passwordNoNumber.forEach(function (value) {
            it(`Should return an error for password not containing a number for ${value}`, async () => {
                await axios.post(`${BASE_URL}/users/register`,
                    {
                        "password": value,
                        "passwordCheck": value

                    })
                    .catch(function (error) {
                        toHaveError(error, 'msg', 'Password Must Contain a Number')
                    });
            });
        });

        testData.passwordNoUppercase.forEach(function (value) {
            it(`Should return an error for password not containing an uppercase letter for ${value}`, async () => {

                await axios.post(`${BASE_URL}/users/register`,
                    {
                        "password": value,
                        "passwordCheck": value

                    })
                    .catch(function (error) {
                        toHaveError(error, 'msg', 'Password Must Contain an Uppercase Letter')
                    });
            });
        });
        testData.passwordNoLowercase.forEach(function (value) {
            it(`Should return an error for password not containing a lowercase letter for ${value}`, async () => {

                await axios.post(`${BASE_URL}/users/register`,
                    {
                        "password": value,
                        "passwordCheck": value

                    })
                    .catch(function (error) {
                        toHaveError(error, 'msg', 'Password Must Contain a Lowercase Letter')
                    });
            });
        });
    });

    describe('Display Name Verification', () => {
        it('SHould return an error for no display name', async () => {
            await axios.post(`${BASE_URL}/users/register`, { "displayName": "" })
                .catch(function (error) {
                    toHaveError(error, 'msg', 'Display Name does not exist')
                });
        });

        it('SHould return an error for no display name already in use', async () => {
            await axios.post(`${BASE_URL}/users/register`, { "displayName": "ligita" })
                .catch(function (error) {
                    toHaveError(error, 'msg', 'Username already in use')
                });
        });
    });
});


