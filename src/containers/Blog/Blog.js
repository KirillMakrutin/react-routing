import React, {Component} from 'react';

import './Blog.css';
import Posts from "./Posts/Posts";
import {Route} from 'react-router-dom';
import NewPost from "./NewPost/NewPost";

class Blog extends Component {

  render()
  {

    return (
        <div className='Blog'>
          <header>
            <nav>
              <ul>
                <li><a href="/">Home</a></li>
                <li><a href="/new-post">New post</a></li>
              </ul>
            </nav>
          </header>

        {/*<Route path="/" exact render={() => <Posts/>} />
        <Route path="/new-post" exact render={() => <NewPost/>} />*/}

          <Route path="/" exact component={Posts} />


        </div>
    );
  }
}

export default Blog;
