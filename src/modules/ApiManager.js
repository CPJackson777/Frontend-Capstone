const baseURL = "http://localhost:5002"
// TableName = array (users, hairtypes, hairstyles).



export default {
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
//**********************************************
// 
//**********************************************
getUserData() {
    return fetch(`${baseURL}/users`)
        .then(response => response.json())
},
//**********************************************
// 
//**********************************************
createNewUser(user) {
    return fetch(`${baseURL}/users`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(user)
    }).then(results => results.json())
},
//**********************************************
// 
//**********************************************
checkUser(email, password) {
    return fetch(`${baseURL}/users?email=${email}&password=${password}`)
        .then(response => response.json())
}
}