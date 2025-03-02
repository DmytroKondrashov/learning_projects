export default {
  extend: '@apostrophecms/widget-type',
  options: {
    label: 'Rating Widget',
  },
  fields: {
    add: {
      productQuality: {
        type: 'range',
        label: 'Product Quality',
        min: 1,
        max: 5,
        step: 1,
        def: 1
      },
      productSafety: {
        type: 'range',
        label: 'Product Safety',
        min: 1,
        max: 5,
        step: 1,
        def: 1
      },
      productValue: {
        type: 'range',
        label: 'Product Value',
        min: 1,
        max: 5,
        step: 1,
        def: 1
      }
    },
    group: {
      basics: {
        label: 'Basics',
        fields: [ 'productQuality', 'productSafety', 'productValue' ]
      }
    }
  },
  components(self) {
    return {
      async stars(req, data) {
        // Performs any data manipulation or retrieval
        // before it is passed to the component template
        // In this case, we are just passing the starsData from the widget
        return {
          starsData: data.starsData
        };
      }
    };
  }
};