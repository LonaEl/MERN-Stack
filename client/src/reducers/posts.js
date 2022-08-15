export default  (posts = [], action) => {
    switch (action.type) {
        case 'UPDATE': 
        return posts.map((post) => action.payload._id ? action.payload : post )
        case 'FETCH_ALL':
            return action.payload ;  //action.payload is an actual post
        case 'CREATE':
          
            return [...posts, action.payload]
        default:
            return posts;
    }
}