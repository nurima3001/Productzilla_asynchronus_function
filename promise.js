const axios = require('axios');

function getTodos() {
  return axios.get('https://jsonplaceholder.typicode.com/todos', {
    params: {
      completed: false
    }
  })
  .then(response => {
    return response.data.slice(0, 10);
  })
  .catch(error => {
    console.error(error);
    throw error;
  });
}

getTodos()
  .then(todos => {
    console.log(todos);
  });
