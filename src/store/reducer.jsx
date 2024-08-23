import { ADD_WIDGET, REMOVE_WIDGET } from './actions';

const initialState = {
  categories: [
    {
      id: 1,
      name: 'CSPM Executive Dashboard',
      widgets: [
        { id: 1, name: 'Widget 1', text: 'This is widget 1' },
        { id: 2, name: 'Widget 2', text: 'This is widget 2' }
      ]
    },
    {
      id: 2,
      name: 'Security Overview',
      widgets: [{ id: 3, name: 'Widget 3', text: 'This is widget 3' }]
    },
    {
      id: 3,
      name: 'CWPP Dashboard',
      widgets: [{ id: 4, name: 'Widget 4', text: 'This is widget 4' }]
    }
  ]
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_WIDGET:
      return {
        ...state,
        categories: state.categories.map(category =>
          category.id === action.payload.categoryId
            ? {
                ...category,
                widgets: [
                  ...category.widgets,
                  { ...action.payload.widget, id: category.widgets.length + 1 }
                ]
              }
            : category
        )
      };

    case REMOVE_WIDGET:
      return {
        ...state,
        categories: state.categories.map(category =>
          category.id === action.payload.categoryId
            ? {
                ...category,
                widgets: category.widgets.filter(widget => widget.id !== action.payload.widgetId)
              }
            : category
        )
      };

    default:
      return state;
  }
};

export default rootReducer;
