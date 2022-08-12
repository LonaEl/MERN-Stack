export default  (posts = [], action) => {
    switch (action.type) {
        case 'FETCH_ALL':
            return action.payload ;  //action.payload is an actual post
        case 'CREATE':
          
            return [...posts, action.payload]
        default:
            return posts;
    }
}