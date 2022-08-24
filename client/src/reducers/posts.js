// import { FETCH_ALL, CREATE, UPDATE, DELETE } from "../constants/actionTypes";
export default  (posts = [], action) => {
    switch (action.type) {
        case 'DELETE':
            return posts.filter((post) => post._id !== action.payload )
        case 'UPDATE': 
        case 'LIKE': 
        return posts.map((post) => post._id ===  action.payload._id ? action.payload : post )
        case 'FETCH_ALL':
            return action.payload ;  //action.payload is an actual post
        case 'CREATE':
           return [...posts, action.payload]
        default:
            return posts;
    }
}

//case LIKE can be removed and code works the same