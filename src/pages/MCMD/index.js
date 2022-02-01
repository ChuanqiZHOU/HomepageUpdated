import React from 'react'
// import data from '../../MCMD/index.html'

import {Router} from 'react-router-dom'
// const withRouter = (Component) => {
//   return (
//     <Router component= {Component}/>
//   )
// }
const MCMD = () => {
    return (
      <>
        
        <iframe
          title="resg"
          // srcDoc={data}
          src="/MCMD/index.html"
          // style={{ width: '100%', border: '0px', height: '1100px' }}
          sandbox="allow-same-origin allow-scripts allow-popups allow-forms"
          scrolling="auto"
        />
      </>
    )
    
}

export default MCMD