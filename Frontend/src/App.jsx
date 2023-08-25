import React from "react";
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import "./App.css";
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Blog from "./components/pages/Blog";
import Footer from "./components/Footer";

import WriteBlog from "./components/pages/WriteBlog";
import CreateAccount from "./components/pages/CreateAccount"
import DynamicBlog from "./components/pages/DynamicBlog"

import Callback from "./components/Callback"

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
    const [blogData, setBlogData] = React.useState([])
    console.log(blogData)

    return (
        <>
            <Router>
                <div>
                    <Nav />
                    <Switch>
                        <Route exact path="/" component={Hero} />
                        <Route path="/write" component={WriteBlog} />
                        {/* <Route path="/write" component={Form} /> */}
                        <Route path="/blog/:blogId" render={()=><DynamicBlog blogData = {blogData} />}/>
                        <Route path="/blog" render={()=><Blog setBlogData={setBlogData} />} />
                        <Route path="/signin" component={CreateAccount} />
                        <Route path="/callback" component={Callback} />
                        {/* <Route component={Footer} /> */}
                    </Switch>
                    <Footer />
                </div>
            </Router>

            <div></div>
        </>
    );
}

export default App;
// mongodb password GpGwi4afpOLIA22h
