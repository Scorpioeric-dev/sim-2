import { createStore } from "redux";

//initial state
const initialState = {
  name: "",
  address: "",
  city: "",
  state: "",
  zipcode: "",
  img: "",
  rentAmount: "",
  mortgage: ""
};

//action constant

export const UPDATE_NAME = "UPDATE_NAME";
export const UPDATE_ADDRESS = "UPDATE_ADDRESS";
export const UPDATE_CITY = "UPDATE_CITY";
export const UPDATE_STATE = "UPDATE_STATE";
export const UPDATE_ZIPCODE = "UPDATE_ZIPCODE";
export const UPDATE_IMG = "UPDATE_IMG";
export const UPDATE_RENT_AMOUNT = "UPDATE_RENT_AMOUNT";
export const UPDATE_MORTGAGE = "UPDATE_MORTGAGE";
export const CANCEL = "CANCEL"

//reducer
function reducer(state = initialState, action) {
  const { payload } = action;
  //switch is just an if statement with additional rules
  switch (action.type) {
    case UPDATE_NAME:
      return { ...state, name: payload };
    case UPDATE_ADDRESS:
      return { ...state, address: payload };
    case UPDATE_CITY:
      return { ...state, city: payload };
    case UPDATE_STATE:
      return { ...state, state: payload };
    case UPDATE_ZIPCODE:
      return { ...state, zipcode: payload };
    case UPDATE_IMG:
      return { ...state, img: payload };
    case UPDATE_RENT_AMOUNT:
      return { ...state, rentAmount: payload };
    case UPDATE_MORTGAGE:
      return { ...state, mortgage: payload };
      case CANCEL:
        return {initialState}
    default:
      return state;
  }
}

const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
export default store;
