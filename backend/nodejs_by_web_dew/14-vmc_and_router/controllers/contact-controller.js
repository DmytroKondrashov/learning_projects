import Contact from '../models/contact.js';
import createPath from '../helpers/create-path.js';

const getContacts = (req, res) => {
  const title = 'Contacts';
  Contact
    .find()
    .then(contacts => res.render(createPath('contacts'), { contacts, title }))
    .catch((error) => {
      console.log(error);
      res.render(createPath('error'), { title: 'Error' });
    });
}

export default getContacts;