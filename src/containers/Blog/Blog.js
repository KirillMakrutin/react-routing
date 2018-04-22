import React, {Component} from 'react';

import './Blog.css';
import Posts from "./Posts/Posts";
import {NavLink, Route, Switch, Redirect} from 'react-router-dom';
import NewPost from "./NewPost/NewPost";

class Blog extends Component {

  render()
  {

    return (
        <div className='Blog'>
          <header>
            <nav>
              <ul>
                <li><NavLink
                    activeClassName='my-active'
                    activeStyle={{
                      color: 'blue',
                      textDecoration: 'underline'
                    }}
                    to="/posts" exact>Posts</NavLink></li>
                <li><NavLink
                    to={
                  {
                    pathname: '/new-post',
                    hash: '#submit',
                    search: '?quick-submit=true'
                  }
                }>New post</NavLink></li>
              </ul>
            </nav>
          </header>

        {/*<Route path="/" exact render={() => <Posts/>} />
        <Route path="/new-post" exact render={() => <NewPost/>} />*/}


          <Switch>
            <Route path="/new-post" component={NewPost}/>
            <Route path="/posts" component={Posts}/>
            <Redirect from="/" to="/posts"/>
          </Switch>
        </div>
    );
  }
}

export default Blog;
