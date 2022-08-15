import * as api from '../api';

//action creators. (action creators are functions that return actions)
//payLoad is data where we store all our posts
//we use async dispatch because it'll take time to get all data and there action is dispatched
export const getPosts = () => async(dispatch) => {
    try {
        const { data } = await api.fetchPosts();
          dispatch({type: 'FETCH_ALL', payload: data })

    } catch (error) {
        console.log(error.message)
    }
}

export const createPost = (post) => async (dispatch) => {
    try {
        const { data } = await api.createPost(post);
        dispatch({ type: 'CREATE', payload: data })
    } catch (error) {
        console.log(error.message)
    }
}

export const updatePost = (id, post) => async(dispatch) => {
    try {
       const { data } = await api.updatePost(id, post);

       dispatch({type: 'UPDATE', payload: data })
    } catch (error) {
        console.log(error.message);
    }
}