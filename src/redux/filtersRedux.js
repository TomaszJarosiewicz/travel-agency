/* SELECTORS */

export const getAllFilters = ({filters}) => filters;

/* ACTIONS */

// action name creator
const reducerName = 'filters';
const createActionName = name => `app/${reducerName}/${name}`;

// action types
export const CHANGE_PHRASE = createActionName('CHANGE_PHRASE');
// TODO - add other action types
export const ADD_FILTER_TAG = createActionName('ADD_FILTER_TAG');
export const REMOVE_FILTER_TAG = createActionName('REMOVE_FILTER_TAG');
export const CHANGE_DURATION = createActionName('CHANGE_DURATION');
// action creators
export const changeSearchPhrase = payload => ({ payload, type: CHANGE_PHRASE });
// TODO - add other action creators
export const addFilterTags = payload => ({ payload, type: ADD_FILTER_TAG });
export const removeFilterTags = payload => ({ payload, type: REMOVE_FILTER_TAG });
export const searchDuration = payload => ({ payload, type: CHANGE_DURATION });

// reducer
export default function reducer(statePart = [], action = {}) {
  console.log('action.payload', action.payload);
  switch (action.type) {
    case CHANGE_PHRASE:
      return {
        ...statePart,
        searchPhrase: action.payload,
      };
    // TODO - handle other action types
    case ADD_FILTER_TAG:
      console.log('statePart.tags.add', [...statePart.tags]);
      return {
        ...statePart,
        tags: [...statePart.tags, action.payload],
      };
    case REMOVE_FILTER_TAG:
      console.log('statePart.tags.remove', [...statePart.tags]);
      return {
        ...statePart,
        tags: [...statePart.tags.filter(tag => tag !== action.payload)],
      };
    case CHANGE_DURATION:
      return {
        ...statePart,
        duration: {
          ...statePart.duration,
          [action.payload.type] : parseInt(action.payload.value),
        }
      };
    default:
      return statePart;
  }
}
