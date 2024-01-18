import {
  ADD_ITEM,
  ADD_TO_WISHLIST,
  REMOVE_ITEM,
  REMOVE_FAV_ITEM,
} from '../Action/Auth';

const initialState = {
  additem: [],
  addtowishlist: [],
  removeitem: [],
  removefavitem: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_ITEM:
      return {
        ...state,
        additem: [...state.additem, action.data],
      };

    case ADD_TO_WISHLIST:
      return {
        ...state,
        addtowishlist: [...state.addtowishlist, action.data],
      };

    case REMOVE_ITEM: {
      const indexToRemove = action.data;
      const removedItem = state.additem.find(
        (item, index) => index === indexToRemove,
      );

      return {
        ...state,
        additem: state.additem.filter((item, index) => index !== indexToRemove),
        removeitem: [...state.removeitem, removedItem],
      };
    }

    case REMOVE_FAV_ITEM: {
      const indexToRemove = action.data;
      const removedItem = state.addtowishlist.find(
        (item, index) => index === indexToRemove,
      );

      return {
        ...state,
        addtowishlist: state.addtowishlist.filter(
          (item, index) => index !== indexToRemove,
        ),
        removefavitem: [...state.removefavitem, removedItem],
      };
    }

    default:
      return state;
  }
};
