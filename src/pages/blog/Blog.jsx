//REACT
import React, { useState, useEffect} from 'react'

//COMPONENTS
import BlogHeaderComponent from './Components/BlogHeaderComponent/BlogHeaderComponent'
import BlogNavComponent from './Components/BlogNavComponent/BlogNavComponent'

//CONTAINERS
import BlogContentComponent from './Containers/BlogContentContainer/BlogContentContainer'
import Navbar from '../../Containers/Navbar/Navbar'
import ModalsProvider from '../../providers/ModalsProvider'
import Footer from '../../Containers/Footer/Footer'

//ICONS
import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

//STYLES
import "./Blog.css"

function Blog(props) {
 
  const [login, setLogin] = useState("");
  const [isShowingModal, setIsShowingModal] = useState(false);
  const [isShowingRegisterModal, setIsShowingRegisterModal] = useState(false);
 
  // login modal
  function toggleModal() {
    setIsShowingModal(!isShowingModal);
  }

  // register modal
  function toggleRegisterModal() {
    setIsShowingRegisterModal(!isShowingRegisterModal);
  }

  useEffect(() => {
    setLogin(props.activeProfileId ? true : false)
  }, [props.activeProfileId, props.username,props.showSpinner, props.rerender])

  return (
    <>
      <div className='page' >
        <ModalsProvider  setActiveProfileId={props.setActiveProfileId} isShowingRegisterModal={isShowingRegisterModal} isShowingModal={isShowingModal} setLogin={setLogin} toggleModal={toggleModal} toggleRegisterModal={toggleRegisterModal} />
        <Navbar isShowingModal={isShowingModal} isShowingRegisterModal={isShowingRegisterModal} toggleRegisterModal={toggleRegisterModal}  toggleModal={toggleModal}  setActiveProfileId={props.setActiveProfileId} login={login} setUsername={props.setUsername} activeProfileId={props.activeProfileId}/>
        <BlogHeaderComponent />
        <BlogNavComponent />
        <BlogContentComponent  rerender={props.rerender} canFetch={props.canFetch} numOfPages={props.numOfPages} setCanFetch={props.setCanFetch} canGetNextPage={props.canGetNextPage} setNumOfPages={props.setNumOfPages} setCanGetNextPage={props.setCanGetNextPage} setPageNumber={props.setPageNumber} pageNumber={props.pageNumber} showSpinner={props.showSpinner} toggleModal={toggleModal} toggleRegisterModal={toggleRegisterModal}  activeProfileId={props.activeProfileId} username={props.username}/>
      </div>
      <div  className={props.showSpinner ? 'watch d-flex justify-content-center align-items-center my-3' : 'd-none'}>
        <i className='fa fa-lg fa-refresh fa-spin'>
          <FontAwesomeIcon icon={faSpinner} />
        </i>
      </div>   
      {props.showSpinner ? null : <Footer setRerender={props.setRerender} rerender={props.rerender} setUsername={props.setUsername} setActiveProfileId={props.setActiveProfileId}/> }
    </>
  )
}

export default Blog