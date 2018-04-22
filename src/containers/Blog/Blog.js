import React, {Component} from 'react';

import './Blog.css';
import Posts from "./Posts/Posts";
import {NavLink, Route, Switch, Redirect} from 'react-router-dom';
import NewPost from "./NewPost/NewPost";

class Blog extends Component {

    state = {
        off: false
    };

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
              {this.state.off ? <Route path="/new-post" component={NewPost}/> : null}

            <Route path="/posts" component={Posts}/>
              <Route render={() => <h1>Page not found</h1>}/>
            {/*<Redirect from="/" to="/posts"/>*/}
          </Switch>
        </div>
    );
  }
}

export default Blog;
