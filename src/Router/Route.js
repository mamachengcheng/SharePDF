import React from 'react';
import {BrowserRouter as Router,Route,Link} from 'react-router-dom'
import App from '../App';
import Library from '../Component/Library'; //书库导入

class RouterConfig extends React.Component{
  render(){
    return(
      <Router>
        <div id = "hello">
          {/* exact关键字，将“/”唯一匹配 */}
         <Route exact path="/" component={App}/>
         <Route path="/library" component={Library}/>
       </div>
      </Router>
    )
  }
}

export default RouterConfig
