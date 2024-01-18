import AsyncStorage from '@react-native-async-storage/async-storage';
export const ADD_ITEM = 'ADD_ITEM';
export const ADD_TO_WISHLIST = 'ADD_TO_WISHLIST';
export const REMOVE_ITEM = 'REMOVE_ITEM';
export const REMOVE_FAV_ITEM = 'REMOVE_FAV_ITEM';

// removeFavItems

export const addItem = item => {
  return async dispatch => {
    dispatch({type: ADD_ITEM, data: item});
  };
};
export const addToFav = data => {
  return async dispatch => {
    dispatch({type: ADD_TO_WISHLIST, data: data});
  };
};

export const removeItems = data => {
  return async dispatch => {
    dispatch({type: REMOVE_ITEM, data: data});
  };
};
export const removeFavItems = data => {
  return async dispatch => {
    dispatch({type: REMOVE_FAV_ITEM, data: data});
  };
};

export const profile = Id => {
  return async dispatch => {
    try {
      const token = await AsyncStorage.getItem('auth_token');

      const response = await fetch(
        'http://192.168.33.156:5240/profile',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
            guid:'4C4C4544-004A-5910-8034-C2C04F4E4D33',
          },
          body: JSON.stringify({
            eventID: '1001',
            addInfo: {
              CustomerId: +Id,
            },
          }),
        },
      );

      if (response.ok) {
        const resData = await response.json();
        return resData;
      }
    } catch (error) {
      console.error(error);
    }
  };
};
