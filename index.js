// Add your code here
const formData = {
    dogName: "Sammy",
    dogBreed: "Poodle"
  };
  
  function configurationObject(data) {
      return {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json"
    },
    body: JSON.stringify(data)
   }
};

function submitData(userName,userEmail) {
    return fetch("http://localhost:3000/users", configurationObject({name: userName,email: userEmail}))
    .then(function(response) {
      return response.json();
    })
    .then(function(object) {
        document.body.append(object.id);
    })
    .catch(function(error) {
        document.body.append(error.message);
    });
}