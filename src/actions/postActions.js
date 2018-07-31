import {FETCH_POST, NEW_POST} from './types';

export const fetchPost=() => dispatch =>{
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res => res.json())
    .then(data => dispatch({
        type:FETCH_POST,
        payload:data,
    }));
}

export const createPost = (postData) => dispatch =>{
    fetch('https://jsonplaceholder.typicode.com/posts',{
          method:'POST',
          headers:{
              'content-type':'application/json'
          },
          body:JSON.stringify(postData)
      }).then(res => res.json())
      .then(data=>dispatch({
          type:NEW_POST,
          payload:data
      }));
}
