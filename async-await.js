const axios = require('axios');

async function getTodos() {
  try {
    const [falseTodos, trueTodos] = await Promise.all([
      axios.get('https://jsonplaceholder.typicode.com/todos', {
        params: {
          completed: false
        }
      }),
      axios.get('https://jsonplaceholder.typicode.com/todos', {
        params: {
          completed: true
        }
      })
    ]);
    const firstTenFalseTodos = falseTodos.data.slice(0, 10);
    const firstTenTrueTodos = trueTodos.data.slice(0, 10);
    return [...firstTenFalseTodos, ...firstTenTrueTodos];
  } catch (error) {
    console.error(error);
    throw error;
  }
}

getTodos()
  .then(todos => {
    console.log(todos);
  });
