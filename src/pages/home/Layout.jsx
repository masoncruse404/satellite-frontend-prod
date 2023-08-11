//REACT
import React, {useEffect, useState} from 'react'

//PROVIDERS
import ModalsProvider from '../../providers/ModalsProvider';

//CONTAINERS / COMPONENTS
import FeaturedArticlesContainer from './Containers/FeatureArticlesContainer/FeaturedArticlesContainer';
import SpotlightComponent from './Components/SpotlightComponent/SpotlightComponent';
import Footer from '../../Containers/Footer/Footer';
import Navbar from '../../Containers/Navbar/Navbar';
function Layout(props) {

  const [login, setLogin] = useState(false);
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
  }, [])

  return (
    <>
      <ModalsProvider  setActiveProfileId={props.setActiveProfileId} isShowingRegisterModal={isShowingRegisterModal} isShowingModal={isShowingModal} setLogin={setLogin} toggleModal={toggleModal} toggleRegisterModal={toggleRegisterModal} />
      <Navbar toggleRegisterModal={toggleRegisterModal} toggleModal={toggleModal}  setActiveProfileId={props.setActiveProfileId} login={login} setUsername={props.setUsername} activeProfileId={props.activeProfileId}/>
      <SpotlightComponent setPageNumber={props.setPageNumber} setRerender={props.setRerender} rerender={props.rerender} />
      <FeaturedArticlesContainer setRerender={props.setRerender} rerender={props.rerender}/>
      <Footer />
    </>
  )
}

export default Layout