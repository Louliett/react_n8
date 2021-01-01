
const API_URL = "http://localhost:8080/users/";

//gets all the users from the database
export async function getAllUsers() {
    var requestOptions = {
        method: 'GET',
        redirect: 'follow'
      };

    let response = await fetch(API_URL, requestOptions);
    let message = await response.json();
    return message;    
}

export async function getUsersPerPage(page_number, users_per_page) {
  var requestOptions = {
    method: 'GET',
    redirect: 'follow'
  };
  
  let response = await fetch(API_URL + page_number + "/" + users_per_page, requestOptions);
  let message = await response.json();
  return message;
}

//deletes the user and associated addresses
export async function deleteUser(userId) {
  var requestOptions = {
    method: 'DELETE',
    redirect: 'follow'
  };
  
  let response = await fetch(API_URL + "delete/" + userId, requestOptions);
  let message = await response.json();
  return message;
}