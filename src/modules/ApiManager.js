const baseURL = "http://localhost:5002"
// TableName = array (users, hairtypes, hairstyles).



export default {

    //**********************************************
    // AUTHENTICATION: gets all user data
    //**********************************************
    getUserData() {
        return fetch(`${baseURL}/users`)
            .then(response => response.json())
    },
    //******************************************************************************************
    // AUTHENTICATION: gets all user data and then add new user data to database and returns all
    //******************************************************************************************
    createNewUser(user) {
        return fetch(`${baseURL}/users`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(user)
        }).then(results => results.json())
    },
    //*********************************************************************
    // AUTHENTICATION: checks for ??? need to ask for clarification on this
    //*********************************************************************
    checkUser(email, password) {
        return fetch(`${baseURL}/users?email=${email}&password=${password}`)
            .then(response => response.json())
    },

    get(endpoint, id) {
        return fetch(`${baseURL}/${endpoint}/${id}`).then(result => result.json())
    },

    getAll(endpoint) {
        return fetch(`${baseURL}/${endpoint}`).then(result => result.json())
    },

    /************************************************
    Fetch all hairstyles for the selected hairtype 
    ***********************************************/
//    getAllHairStylesForOneHairType() {
//     console.log("getAll successful")
//     return fetch(`${baseURL}/hairstyles?_expand=hairtype`)
//         .then(result => result.json())
// },
}