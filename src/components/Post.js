import React, { Component } from 'react'
import { connect } from 'react-redux';
import {fetchPost} from '../actions/postActions';
import PropTypes from 'prop-types';

class Post extends Component {

  componentWillMount(){
    this.props.fetchPost();
  }

  componentWillReceiveProps(nextProps){
    if(nextProps.newPost){
      this.props.posts.unshift(nextProps.newPost);
    }
  }

  render() {
    const postItems = this.props.posts.map(e =>(
        <div key={e.id}>
            <h3>{e.title}</h3>
            <p>{e.body}</p>
        </div>
    ));
    return (
      <div>
        <h1>POSTS</h1>
        {postItems}
      </div>
    )
  }
}

Post.propTypes={
  fetchPost: PropTypes.func.isRequired,
  posts:PropTypes.array.isRequired,
  newPost:PropTypes.object
}

const mapStateToProps = state => ({
  posts:state.posts.items,
  newPost:state.posts.item
})

export default connect(mapStateToProps,{fetchPost})(Post);