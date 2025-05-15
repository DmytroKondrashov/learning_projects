import TodoList from './TodoList.svelte';

export default {
  title: 'Components/TodoList',
  component: TodoList,
};

export const Default = {
  render: () => ({
    Component: TodoList,
    props: {
      list: {
        name: 'Test List',
        todo_items: [
          { name: 'Task 1', done: false },
          { name: 'Task 2', done: true, due_date: '2025-05-15' }
        ]
      }
    }
  }),
};