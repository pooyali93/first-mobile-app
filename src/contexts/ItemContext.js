import  React from 'react'
import { useReducer, useEffect} from "react";
import AsyncStorage from '@react-native-async-storage/async-storage';
import uuid from 'react-native-uuid';
import { actionTypes } from '../helpers/actionTypes';

const ItemContext = React.createContext();
const STORAGE_KEY = "super_key"; 

let initialItemState = []

const reducer = (state, action) => {
  switch (action.type) {
      case actionTypes.create:
          return[
              ...state,
              {
                  id: uuid.v4(),
                  title:action.payload.title,
                  content:action.payload.content,
                  date: new Date(action.payload.date)
  
              }
          ];

          case actionTypes.save:
            try {
              AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(state));
            } catch (e) {
              console.log(e);
            }finally {
              return state;
            }
          case actionTypes.load:
            return [
              ...state, {
                  id: uuid.v4(),
                  title:action.payload.title,
                  content:action.payload.content,
                  date: new Date(action.payload.date)
              }
            ]
          case actionTypes.update:
              return state.map((item) => {
                  if(item.id === action.payload.id) {
                      return action.payload;
                  }else {
                      return item;
                  }
              });
          case actionTypes.delete: 
              return state.filter((e) => e.id !== action.payload.id);
          default:
              return state;
  };
};

export const ItemProvider = ({children})  => {
  const [state, dispatch] = useReducer(reducer, initialItemState);
  useEffect(() => {
    const loadStorage = async () => {
      const storage = await AsyncStorage.getItem(STORAGE_KEY);
      if(storage !== null && state.length ===0 ) {
        initialItemState = JSON.parse(storage);
        initialItemState.forEach(element => {
          dispatch({type: actionTypes.load, payload:element});
        })
      }
    }
    loadStorage();
  }, [STORAGE_KEY])
  
  const addItem = (title, content, callback) => {
    dispatch({type: actionTypes.create, payload: {title, content}});
    dispatch({type: actionTypes.save});
    if(callback) {
      callback();
    }
  };


  const updateItem = (id, title, content, date, callback) => {
    dispatch({type: actionTypes.update, payload: {id, title, content, date}});
    dispatch({type: actionTypes.save});
    if(callback) callback();
    
  };

const deleteItem = (id, callback) => {
    dispatch({type: actionTypes.delete, payload: {id: id}});
    dispatch({type: actionTypes.save});
    if(callback) callback();
    
  };
 
  return (
    <ItemContext.Provider value={{
      state:state, 
      create:addItem,
      remove:deleteItem,
      update:updateItem
      }}>
      {children}
    </ItemContext.Provider>
  );
};

export default ItemContext;