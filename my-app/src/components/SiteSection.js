import React from 'react'


function SiteSection(props) {
  return (
        <section style={{width:"80%",margin:"0 10px", border:"1px solid silver"}}>    
            {props.children}
        </section>           
  )
}

export default SiteSection