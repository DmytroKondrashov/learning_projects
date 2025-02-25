export default {
  options: {
    label: 'Home Page'
  },
  fields: {
    add: {
      main: {
        type: 'area',
        label: 'Top Area',
        options: {
          widgets: {
            'row-widget': {},
            '@apostrophecms/image': {
              // This option will add these classes to any image
              className: 'img-fluid image-fit-center-center'
            },
            '@apostrophecms/video': {},
            '@apostrophecms/html': {},
            '@apostrophecms/rich-text': {
              toolbar: [
                'styles',
                '|',
                'bold',
                'italic',
                'strike',
                'link',
                '|',
                'bulletList',
                'orderedList',
                '|',
                'blockquote',
                'codeBlock',
                '|',
                'undo',
                'redo'
              ],
              styles: [
                {
                  tag: 'p',
                  label: 'Paragraph (P)'
                },
                {
                  tag: 'h2',
                  label: 'Heading 2 (H2)'
                },
                {
                  tag: 'h2',
                  label: 'Special underline',
                  class: 'custom-underline display-6 ps-2'
                },
                {
                  tag: 'h3',
                  label: 'Heading 3 (H3)'
                },
                {
                  tag: 'h4',
                  label: 'Heading 4 (H4)'
                }
              ],
              insert: [
                'table',
                'image',
                'horizontalRule'
              ]
            }
          }
        }
      },
      bottomArea: {
        type: 'area',
        label: 'Bottom Area',
        options: {
          expanded: true,
          groups: {
            core: {
              label: 'Core Widgets',
              widgets: {
                '@apostrophecms/image': {
                  // This option will add these classes to any image
                  className: 'img-fluid image-fit-center-center'
                },
                '@apostrophecms/video': {},
                '@apostrophecms/html': {},
                '@apostrophecms/rich-text': {
                  toolbar: [
                    'styles',
                    '|',
                    'bold',
                    'italic',
                    'strike',
                    'link',
                    '|',
                    'bullet_list',
                    'ordered_list',
                    '|',
                    'blockquote',
                    'code_block',
                    '|',
                    'horizontal_rule',
                    '|',
                    'undo',
                    'redo'
                  ],
                  styles: [
                    {
                      tag: 'p',
                      label: 'Paragraph (P)'
                    },
                    {
                      tag: 'h2',
                      label: 'Heading 2 (H2)'
                    },
                    {
                      tag: 'h2',
                      label: 'Special underline',
                      class: 'custom-underline display-6 ps-2'
                    },
                    {
                      tag: 'h3',
                      label: 'Heading 3 (H3)'
                    },
                    {
                      tag: 'h4',
                      label: 'Heading 4 (H4)'
                    }
                  ]
                }
              },
              columns: 2
            }
          }
        }
      }
    },
    group: {
      basics: {
        label: 'Basics',
        fields: [ 'topArea', 'bottomArea' ]
      }
    }
  }
};
