//REACT
import React, { useState, useEffect} from 'react'

//COMPONENTS
import BlogHeaderComponent from '../blog/Components/BlogHeaderComponent/BlogHeaderComponent'
import BlogNavComponent from '../blog/Components/BlogNavComponent/BlogNavComponent'
import ProfileContentComponent from './Components/ProfileContentComponent/ProfileContentComponent'

//CONTAINERS
import Navbar from '../../Containers/Navbar/Navbar'

//PROVIDERS
import ModalsProvider from '../../providers/ModalsProvider'

//STYLES
import "../blog/Blog.css"

//API
import getUser from '../../api/GetUser/GetUser'
function Profile(props) {
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
    getUser(props.setUsername, props.setActiveProfileId)
   
  }, [props.activeProfileId])

  return (
    <>
      <div className='page'>
        <ModalsProvider  setActiveProfileId={props.setActiveProfileId} isShowingRegisterModal={isShowingRegisterModal} isShowingModal={isShowingModal} setLogin={setLogin} toggleModal={toggleModal} toggleRegisterModal={toggleRegisterModal} />
        <Navbar isShowingModal={isShowingModal} isShowingRegisterModal={isShowingRegisterModal} toggleRegisterModal={toggleRegisterModal}  toggleModal={toggleModal}  setActiveProfileId={props.setActiveProfileId} login={login} setUsername={props.setUsername} activeProfileId={props.activeProfileId}/>
        <BlogHeaderComponent />
        <BlogNavComponent />
        <ProfileContentComponent setUsername={props.setUsername} toggleModal={toggleModal}  toggleRegisterModal={toggleRegisterModal}  setActiveProfileId={props.setActiveProfileId} activeProfileId={props.activeProfileId} username={props.username}/>
      </div>
    </>
  )
}

export default Profile