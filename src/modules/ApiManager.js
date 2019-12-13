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

    get(hairtypes, id) {
        return fetch(`${baseURL}/${hairtypes}/${id}`).then(result => result.json())
    },
    getAll(hairtypes) {
        return fetch(`${baseURL}/${hairtypes}`).then(result => result.json())
    }
}












    // // This fetch call gets one object from tableName.
    // get(tableName, id) {
    //     return fetch(`${baseURL}/${tableName}/${id}`).then(result => result.json())
    // },
    // // This fetch call gets all objects from tableName.
    // getAll(tableName) {
    //     return fetch(`${baseURL}/${tableName}`).then(result => result.json())
    // },
    // getAllforLoggedInUser(userId, tableName) {
    //     return fetch(`${baseURL}/users/${userId}/${tableName}`).then(result => result.json())
    // },
    // // This fetch call uses _expand to get all objects including the name associated with the userId.
    // getAllWithUserNames(tableName, userId) {
    //     return fetch(`${baseURL}/${tableName}?_expand=user`).then(result => result.json(userId))
    // },