// modules/blog-post/index.js
module.exports = {
  extend: '@apostrophecms/piece-type',
  // 👇 The field schema
  fields: {
    add: {
      authorName: {
        label: 'Author name',
        type: 'string',
        required: true
      },
      blogTitle: {
        label: 'Blog title',
        type: 'string',
        required: true
      },
      body: {
        label: 'Blog post body',
        // The `area` field type supports dynamic content widgets. It is
        // covered in the "Areas and widgets" guide section.
        type: 'area',
        options: {
          widgets: {
            '@apostrophecms/rich-text': {}
          }
        }
      }
    },
    group: {
      blogFields: {
        label: 'Blog fields',
        fields: [ 'authorName', 'body' ]
      }
    }
  }
};
