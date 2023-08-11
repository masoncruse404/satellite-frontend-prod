
import Modal from "../modals/LoginModal/Modal";
import RegisterModal from "../modals/RegisterModal/RegisterModal";

const ModalsProvider = (props) => {
  return ( 
    <>
      <Modal setActiveProfileId={props.setActiveProfileId} isShowingRegisterModal={props.isShowingRegisterModal} isShowingModal={props.isShowingModal} setLogin={props.setLogin} toggleModal={props.toggleModal} toggleRegisterModal={props.toggleRegisterModal}/>
      <RegisterModal setActiveProfileId={props.setActiveProfileId} isShowingRegisterModal={props.isShowingRegisterModal} toggleRegisterModal={props.toggleRegisterModal} toggleModal={props.toggleModal}/>
    </>
   );
}
 
export default ModalsProvider;