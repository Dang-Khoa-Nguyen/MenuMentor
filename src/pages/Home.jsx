import WelcomeSpeech from "../components/WelcomeSpeech"
import RecommendDishes from "../components/RecommendDish"
import ContactUs from "../components/ContactUs"

export default function Home() {   
return (
  <div>   
      <WelcomeSpeech/>  
      <RecommendDishes/>
      <ContactUs/>
  </div> 
  );
}