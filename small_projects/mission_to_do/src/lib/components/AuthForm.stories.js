import AuthForm from './AuthForm.svelte';

export default {
  title: 'Components/AuthForm',
  component: AuthForm,
};

export const Default = {
  render: () => ({
    Component: AuthForm,
    props: {
      email: '',
      password: '',
    },
  }),
};

export const WithError = {
  render: () => ({
    Component: AuthForm,
    props: {
      email: 'test@example.com',
      password: 'wrongpass',
      error: 'Invalid email or password',
    },
  }),
};
