const axios = require('axios');

function getCompletedTodos(callback) {
  axios.get('https://jsonplaceholder.typicode.com/todos')
    .then(res => {
      const todos = res.data;
      const completedTodos = todos.filter(todo => todo.completed);
      const firstTen = completedTodos.slice(0, 10);
      callback(null, firstTen);
    })
    .catch(err => {
      callback(err);
    });
}

getCompletedTodos((err, todos) => {
  if (err) {
    console.log('Error:', err.message);
  } else {
    console.log('Completed Todos:');
    console.log(todos);
  }
});
