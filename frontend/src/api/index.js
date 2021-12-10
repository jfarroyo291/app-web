const axios = require('axios');

const url = "http://localhost:8000/api"

const config = {
    mode: 'no-cors',
    headers: {
        'Accept': "*/*",
        'Access-Control-Allow-Origin': "*/*",
        'Content-Type': "application/json"
    }
}

const getTeachers = () => {
    return axios.get(`${url}/teachers`, config)
}
const getTutors = () => {
    return axios.get(`${url}/tutors`, config)
}
const getStudents = () => {
    return axios.get(`${url}/students`, config)
}

const postTeachers = (data) => {
    return axios.post(`${url}/teachers`, data, config)
}
const postTutors = (data) => {
    return axios.post(`${url}/tutors`, data, config)
}
const postStudents = (data) => {
    return axios.post(`${url}/students`, data, config)
}

const putTeacher = (id, data) => {
    return axios.put(`${url}/teachers/${id}`, data, config)
}
const putTutor = (id, data) => {
    return axios.put(`${url}/tutors/${id}`, data, config)
}
const putStudent = (id, data) => {
    return axios.put(`${url}/students/${id}`, data, config)
}

const delTeacher = (id, data) => {
    return axios.delete(`${url}/teachers/${id}`, data, config)
}
const delTutor = (id, data) => {
    return axios.delete(`${url}/tutors/${id}`, data, config)
}
const delStudent = (id, data) => {
    return axios.delete(`${url}/students/${id}`, data, config)
}

module.exports = {
    getTeachers,
    getTutors,
    getStudents,

    postTeachers,
    postTutors,
    postStudents,

    putTeacher,
    putTutor,
    putStudent,

    delTeacher,
    delTutor,
    delStudent,
};