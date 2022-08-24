//import { FETCH_ALL, CREATE, UPDATE, DELETE} from '../constants/actionTypes';
import * as api from '../api';

//action creators. (action creators are functions that return actions)
//payLoad is data where we store all our posts
//we use async dispatch because it'll take time to get all data and there action is dispatched
export const getPosts = () => async(dispatch) => {
    try {
        const { data } = await api.fetchPosts();
          dispatch({type: 'FETCH_ALL', payload: data })

    } catch (error) {
        console.log(error)
    }
}

export const createPost = (post) => async (dispatch) => {
    try {
        const { data } = await api.createPost(post);
        dispatch({ type: 'CREATE', payload: data })
    } catch (error) {
        console.log(error)
    }
}

export const updatePost = (id, post) => async(dispatch) => {
    try {
       const { data } = await api.updatePost(id, post);

       dispatch({type: 'UPDATE', payload: data })
    } catch (error) {
        console.log(error);
    }
}

export const deletePost = (id) => async(dispatch) => {
    try {
        await api.deletePost(id);
        dispatch({ type: 'DELETE', payload: id})
    } catch (error) {
        console.log(error)
    }
}

export const likePost = (id)= async(dispatch) => {
    try {
        const { data } = await api.likePost(id);

        dispatch({type: 'UPDATE', payload: data })
    } catch (error) {
       console.log(error) 
    }
}