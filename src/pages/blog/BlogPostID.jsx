//REACT
import React, { useState, useEffect} from 'react'

//COMPONENTS
import BlogHeaderComponent from './Components/BlogHeaderComponent/BlogHeaderComponent'
import BlogNavComponent from './Components/BlogNavComponent/BlogNavComponent'

//CONTAINERS
import BlogPostContentContainer from './Containers/BlogPostContentContainer/BlogPostContentContainer'
import Navbar from '../../Containers/Navbar/Navbar';
import Footer from '../../Containers/Footer/Footer'

//PROVIDERS
import ModalsProvider from '../../providers/ModalsProvider'

function BlogPostID(props) {

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
  }, [props.activeProfileId,props.username,props.showSpinner])

  return (
    <>
      <div>
        <Navbar isShowingModal={isShowingModal} isShowingRegisterModal={isShowingRegisterModal} toggleRegisterModal={toggleRegisterModal}  toggleModal={toggleModal}  setActiveProfileId={props.setActiveProfileId} login={login} setUsername={props.setUsername} activeProfileId={props.activeProfileId}/>
        <ModalsProvider  setActiveProfileId={props.setActiveProfileId} isShowingRegisterModal={isShowingRegisterModal} isShowingModal={isShowingModal} setLogin={setLogin} toggleModal={toggleModal} toggleRegisterModal={toggleRegisterModal} />
        <BlogHeaderComponent />
        <BlogNavComponent setPageNumber={props.setPageNumber}/>
        <BlogPostContentContainer toggleModal={toggleModal} toggleRegisterModal={toggleRegisterModal}  activeProfileId={props.activeProfileId} username={props.username}/>
        <Footer setUsername={props.setUsername} setActiveProfileId={props.setActiveProfileId}/> 
      </div>
    </>
  )
}

export default BlogPostID;