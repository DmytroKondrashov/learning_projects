const { fields } = require('./lib/fields');

export default {
  extend: '@apostrophecms/widget-type',
  options: {
    label: 'Row Widget',
    icon: 'view-column-outline',
    previewIcon: 'view-column-outline'
  },
  fields: {
    add: fields
  }
};
