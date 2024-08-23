export const ADD_WIDGET = 'ADD_WIDGET';
export const REMOVE_WIDGET = 'REMOVE_WIDGET';

export const addWidget = (categoryId, widget) => {
  return {
    type: ADD_WIDGET,
    payload: { categoryId, widget }
  };
};

export const removeWidget = (categoryId, widgetId) => {
  return {
    type: REMOVE_WIDGET,
    payload: { categoryId, widgetId }
  };
};
