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
    postNewUser(newUser) {
        return fetch(`${baseURL}/users`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(newUser)
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
        return fetch(`${baseURL}/${endpoint}/${id}`)
        .then(result => result.json())
    },

    getAll(endpoint) {
        return fetch(`${baseURL}/${endpoint}`)
        .then(result => result.json())
    },

    //************************************************
    //Fetch all hairstyles for the selected hairtype 
    //***********************************************
//    http://localhost:5002/hairstyles?hairtypeId=1
   getAllHairStylesForOneHairType(hairtypeId) {
    return fetch(`${baseURL}/hairstyles?hairtypeId=${hairtypeId}`)
        .then(result => result.json())
},


post(newHairStyle) {
    return fetch(`${baseURL}/hairstyles`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(newHairStyle)
    }).then(data => data.json())
  },

  update(editedHairStyle) {
    return fetch(`${baseURL}/hairstyles/${editedHairStyle.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(editedHairStyle)
    }).then(data => data.json());
  },

  delete(id) {
    return fetch(`${baseURL}/hairstyles/${id}`, {
      method: "DELETE"
    })
      .then(result => result.json())
  },
}