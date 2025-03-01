import Accordions from './components/Accordions';
import { accordionData } from './components/utils/content';





const App = () => {
  return (


    <div>
      
      <div className="accordion">
  {accordionData.map((item, index) => (
    <Accordions 
        key={index} 
        title={item.title} 
        content={item.content}  // Make sure this matches your data
    />
  ))}
</div>

    </div>


  )
}

export default App;