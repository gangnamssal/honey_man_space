import { createStore } from "redux";

const item = [
  {
    id: 1,
    text: "1",
  },
  {
    id: 2,
    text: "2",
  },
  {
    id: 3,
    text: "3",
  },
  {
    id: 4,
    text: "4",
  },
  {
    id: 5,
    text: "5",
  },
  {
    id: 6,
    text: "6",
  },
  {
    id: 7,
    text: "7",
  },
];

const reducer = (state = item, action) => {
  return state;
};

const store = createStore(reducer);

export default store;
