import React from 'react'
const Navbar = (props) => {
  return (
  <div style={{position: '',
  }}>
    {/* <p style={{ 
      

    }}>p</p> */}
    <nav style={{marginBottom:"" ,height:"100px", paddingLeft:"50px"}} className="navbar navbar-expand-lg bg-body-tertiary " data-bs-theme="light">
          <div className="container-fluid">
            {/* <a className="navbar-brand" href="#">Reuse-U</a> */}
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <button className="nav-link active" aria-current="page" onClick={()=>{
                    props.setter("Lost")
                  }}>Lost</button>
                </li>
                <li className="nav-item">
                  <button className="nav-link active" aria-current="page" onClick={()=>{
                    props.setter("Found")
                  }}>Found</button>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        {/* <Modal/> */}
    </div>
  )
}

export default Navbar
