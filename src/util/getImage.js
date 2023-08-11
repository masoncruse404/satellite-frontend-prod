//POST IMAGES
import MachineLearning from "../images/machine-learning.jpg"
import ComputerSecurity from "../images/computer-security.jpg"
import ArtificialIntelligence from "../images/artificial-intelligence.jpg"
import WorldInDrop from "../images/world-in-drop.jpg"
import YellowSmoke from "../images/yellow-smoke.jpg"
import Summer from "../images/summer.jpg"
import Help from "../images/hike.jpg"
import Lock from "../images/lock.jpg"
import NetworkMan from "../images/network-man.jpg"
import City from "../images/city.jpg"
import Network from "../images/network.jpg"
import Solder from "../images/solder.jpg"
import Work from "../images/work.jpg"
import Nurse from "../images/nurse.jpg"
import Can from "../images/can.jpeg"
import Comp from "../images/comp.jpg"
import Crowd from "../images/crowd.jpg"
import Dock from "../images/dock.jpg"
import Icecream from "../images/icecream.jpg"
import Palm from "../images/palm.jpg"
import Pineapple from "../images/pineapple.jpg"
import Travel from "../images/travel.jpg"
import Waterfall from "../images/waterfall.jpg"
import Hands from "../images/hands.jpg"
import Aussie from "../images/aussie.jpg"
import ComputerCoffee from "../images/computer-coffee.jpg"
import Corg from "../images/corg.jpg"
import DeskNight from "../images/desk-night.jpg"
import DeskPlant from "../images/desk-plant.jpg"
import DogLug from "../images/dog-lug.jpg"
import Pood from "../images/pood.jpg"
import SunDog from "../images/sun-dog.jpg"
import WorkPreview from "../images/work-preview.jpg"
import PlaceholderIMG from '../images/jk-placeholder-image.jpg'

const images = {
    "MachineLearning":{MachineLearning},
    "ArtificialIntelligence":{ArtificialIntelligence},
    "ComputerSecurity":{ComputerSecurity},
    "WorldInDrop":{WorldInDrop},
    "YellowSmoke":{YellowSmoke},
    "Summer":{Summer},
    "Help":{Help},
    "Lock":{Lock},
    "NetworkMan":{NetworkMan},
    "City":{City},
    "Solder":{Solder},
    "Work":{Work},
    "Network":{Network},
    "Nurse":{Nurse},
    "Can":{Can},
    "Comp":{Comp},
    "Crowd":{Crowd},
    "Dock":{Dock},
    "Icecream":{Icecream},
    "Palm":{Palm},
    "Pineapple":{Pineapple},
    "Travel":{Travel},
    "Waterfall":{Waterfall},
    "Hands":{Hands},
    "Aussie":{Aussie},
    "ComputerCoffee":{ComputerCoffee}, 
    "Corg":{Corg}, 
    "DeskNight":{DeskNight},
    "DeskPlant":{DeskPlant}, 
    "DogLug":{DogLug}, 
    "Pood":{Pood},
    "SunDog":{SunDog}, 
    "WorkPreview":{WorkPreview},
    "Default":{PlaceholderIMG}
  }
 

  function getImage(var_image){
    if(var_image){
       let image_obj = images[var_image]
       return image_obj[var_image]
    }else{
      let image_obj = images["Default"]
      return image_obj["ComputerSecurity"]
    }
  }
export default getImage;