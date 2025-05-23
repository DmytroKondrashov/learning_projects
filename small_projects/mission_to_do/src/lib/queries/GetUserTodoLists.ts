export const GetUserTodoLists = `
query GetUserTodoLists {
    todos: todo_listCollection {
      edges {
        node {
          id
          name
          created_at
          user_id
        }
      }
    }
  }
`;