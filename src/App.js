import './App.css';

import React from 'react';
import {BrowserRouter as Router,Route} from 'react-router-dom'
import Default from './layout/default'
import Home from './component/view/home'
import Post from './component/view/post'
import PostList from './component/view/post_list'
import Error from  './component/view/404'
import VideoCategory from './component/view/videoCategory'
import Video from './component/view/video'
import AchivePage from './component/view/archive'
import ProductPage from './component/view/product-page'
// create custome Router
const AppRouter = ({component:Component,layout:Layout, ...rest})=>(
        <Route {...rest}  render={(props)=>          
            <Layout><Component slug={props.match.params.id} {...props} /></Layout>
        }></Route>
)

function App() {
  return (
      <Router>        
          <AppRouter path="/" exact layout={Default} component={Home} />
          <AppRouter path="/page/:id" exact layout={Default} component={Home} />
          <AppRouter path="/post/:id" exact layout={Default} component={Post} />
          <AppRouter path="/videos/" exact layout={Default} component={VideoCategory} />
          <AppRouter path="/videos/:id" exact layout={Default} component={Video} />
          <AppRouter path="/archive/:year/:month" exact layout={Default} component={AchivePage} />
          <AppRouter path="/product/" exact layout={Default} component={ProductPage} />
          {/* <AppRouter path="/:id" exact layout={Default} component={PostList} /> */}
          <AppRouter path="/category/:id" exact layout={Default} component={PostList} />
          <AppRouter path="/error" exact layout={Default} component={Error} />
      </Router>
  );
}

export default App;
