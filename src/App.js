//REACT
import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import { useLocation } from "react-router-dom";

//IMAGES
import FlowerComputer from "./images/flower-computer.png";

//COMPONENTS
import SpotlightComponent from "./pages/home/Components/SpotlightComponent/SpotlightComponent";

//CONTAINERS
import Footer from "./Containers/Footer/Footer";

//PAGES
import Blog from "./pages/blog/Blog";
import Layout from "./pages/home/Layout";
import BlogPostID from "./pages/blog/BlogPostID";
import Profile from "./pages/profile/Profile"

//STYLES
import "./App.css"

function App() {

  const [username, setUsername] = useState("John Doe");
  const [activeProfileId, setActiveProfileId] = useState(false);
  const location = useLocation();
  const [showSpinner, setShowSpinner] = useState(true)
  const [currentPath, setCurrentPath] = useState(null);
  const [previousPath, setPreviousPath] = useState(null);
  const [canGetNextPage, setCanGetNextPage] = useState(false)
  const [canFetch, setCanFetch] = useState(true)
  const [numOfPages, setNumOfPages] = useState(0)
  const [pageNumber,setPageNumber] = useState(0)
  const [hasIntersected, setHasIntersected] = useState(false)
  const [rerender, setRerender] = useState(false);

  // do not allow user to scroll
  function unloadScrollBars() {
    document.documentElement.style.overflow = 'hidden';  // firefox, chrome
    document.body.scroll = "no"; // ie only
  }

  // check if more pages are avaliable
  function checkSpinner(){
    if(pageNumber > numOfPages){
      setShowSpinner(false)
    }else{
      setShowSpinner(true)
    }
  }
  
  // check if user is intersecting spinner to load more posts
  function obCallback(payload) {
    console.log('pn and num of pages',pageNumber,numOfPages)
    if(payload[0].isIntersecting){
      // update state
      setHasIntersected(true)
    }
  }

  function checkCanFetch(){
    if(hasIntersected){
      // user has intersected spinner
      // add lock 
      setHasIntersected(false)
      if(canFetch){
        //fetch pages and update states
        setCanGetNextPage(true)
        setPageNumber(pageNumber + 1)
        setCanFetch(false)
        // disable scroll bars
        unloadScrollBars()
      }
    }
  }

  // create intersection of spinner observer
  function observeWatch(var_watch){
     if(var_watch){
      const ob = new IntersectionObserver(obCallback);
      ob.observe(var_watch);  
    }  
  }
  
  // save current path and previous path
  function setLocations(){
    if (location.pathname !== currentPath) {
      setPreviousPath(currentPath);
      setCurrentPath(location.pathname);
    }
  }
 
  function checkLastPath(){
 
    if(previousPath === '/'){
      // rerender new page
      console.log('checkPath', previousPath)
      console.log('current path',currentPath)
      setRerender(!rerender);
    }
    if(previousPath){
      if(previousPath.split('/')){
        //check if user is coming from singular blog / id page to feed
        let parsedPreviousPath = previousPath.split('/')[1]
        
        if(parsedPreviousPath === 'blog'){
          // rerender new page
          setRerender(!rerender)
          window.location.reload(true)
        }
      }
    }
  }

  React.useEffect(() => {
    //user has changed pages check if page number is not at the start
    if(pageNumber){
      // page number is not at the start set it to start
      setPageNumber(0)
    }
    
    // update states
    setLocations()
    checkLastPath()
 

  },[location.key, previousPath, numOfPages])

  React.useEffect(() => {
    // intersection check
    console.log('app useEffect - canFetch',canFetch)
    console.log('app useEffect numOfpages',numOfPages)

    checkCanFetch()
    checkSpinner()

    const watch = document.querySelector('.watch');
    observeWatch(watch)

  }, [pageNumber, canFetch, canGetNextPage, numOfPages, showSpinner, hasIntersected,rerender, activeProfileId, username]);
  
  return (
    <div >

      <Routes>
        <Route  path="/" element={
          <>
            <Layout 
              username={username} setPageNumber={setPageNumber} setRerender={setRerender} rerender={rerender} setUsername={setUsername}  setActiveProfileId={setActiveProfileId} activeProfileId={activeProfileId} Spotlight={  <SpotlightComponent src={FlowerComputer} />}>
            </Layout>           
          
            
          </>} 
        />
        <Route  path="/blogs" element={<><Blog setRerender={setRerender} rerender={rerender} showSpinner={showSpinner} setCanFetch={setCanFetch} canFetch={canFetch} canGetNextPage={canGetNextPage} setNumOfPages={setNumOfPages} setCanGetNextPage={setCanGetNextPage} pageNumber={pageNumber} setPageNumber={setPageNumber} username={username} setUsername={setUsername} numOfPages={numOfPages} setActiveProfileId={setActiveProfileId} activeProfileId={activeProfileId} /></>} />
        <Route  path="/computer-security" element={<><Blog setRerender={setRerender} rerender={rerender} showSpinner={showSpinner} setCanFetch={setCanFetch} canFetch={canFetch} canGetNextPage={canGetNextPage} setNumOfPages={setNumOfPages} setCanGetNextPage={setCanGetNextPage} pageNumber={pageNumber} setPageNumber={setPageNumber}  username={username} setUsername={setUsername} numOfPages={numOfPages} setActiveProfileId={setActiveProfileId} activeProfileId={activeProfileId} /></>} />
        <Route  path="/machine-learning" element={<><Blog  setRerender={setRerender} rerender={rerender} showSpinner={showSpinner} setCanFetch={setCanFetch} canFetch={canFetch} canGetNextPage={canGetNextPage} setNumOfPages={setNumOfPages} setCanGetNextPage={setCanGetNextPage} pageNumber={pageNumber} setPageNumber={setPageNumber} username={username} setUsername={setUsername} numOfPages={numOfPages} setActiveProfileId={setActiveProfileId} activeProfileId={activeProfileId} /></>} />
        <Route  path="/artifical-intelligence" element={<><Blog setRerender={setRerender} rerender={rerender} showSpinner={showSpinner} setCanFetch={setCanFetch} canFetch={canFetch} canGetNextPage={canGetNextPage} setNumOfPages={setNumOfPages} setCanGetNextPage={setCanGetNextPage} pageNumber={pageNumber} setPageNumber={setPageNumber}  username={username} setUsername={setUsername} numOfPages={numOfPages} setActiveProfileId={setActiveProfileId} activeProfileId={activeProfileId} /></>} />
        <Route  path="/fitness" element={<><Blog setRerender={setRerender} rerender={rerender} showSpinner={showSpinner} setCanFetch={setCanFetch} canFetch={canFetch} canGetNextPage={canGetNextPage} setNumOfPages={setNumOfPages} setCanGetNextPage={setCanGetNextPage} pageNumber={pageNumber} setPageNumber={setPageNumber} username={username} setUsername={setUsername} numOfPages={numOfPages} setActiveProfileId={setActiveProfileId} activeProfileId={activeProfileId} /></>} />
        <Route  path="/current-events" element={<><Blog setRerender={setRerender} rerender={rerender} showSpinner={showSpinner} setCanFetch={setCanFetch} canFetch={canFetch} canGetNextPage={canGetNextPage} setNumOfPages={setNumOfPages} setCanGetNextPage={setCanGetNextPage} pageNumber={pageNumber} setPageNumber={setPageNumber}  username={username} setUsername={setUsername} numOfPages={numOfPages} setActiveProfileId={setActiveProfileId} activeProfileId={activeProfileId} /></>} />
        <Route  path="/crypto" element={<><Blog setRerender={setRerender} rerender={rerender} showSpinner={showSpinner} setCanFetch={setCanFetch} canFetch={canFetch} canGetNextPage={canGetNextPage} setNumOfPages={setNumOfPages} setCanGetNextPage={setCanGetNextPage} pageNumber={pageNumber} setPageNumber={setPageNumber}  username={username} setUsername={setUsername} numOfPages={numOfPages} setActiveProfileId={setActiveProfileId} activeProfileId={activeProfileId} /></>} />
        <Route  path="/profile" element={<><Profile username={username} setUsername={setUsername}  setActiveProfileId={setActiveProfileId} activeProfileId={activeProfileId} /></>} />
        <Route  path="/blog/:blogID" element={<><BlogPostID  setRerender={setRerender} rerender={rerender} showSpinner={showSpinner}  pageNumber={pageNumber} setPageNumber={setPageNumber} username={username} setUsername={setUsername}  setActiveProfileId={setActiveProfileId} activeProfileId={activeProfileId} /></>} />
      </Routes>
                     
    </div>
      
   
    
  );
}

export default App;