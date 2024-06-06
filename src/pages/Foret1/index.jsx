import data from '../../data/data.json';
import './foret1.css';
import HabitatPres from '../../components/HabitatPres';
import Animaux from '../../components/Animaux';
const Foret1 = () => {
  const habitat=data.habitats[1]
    return (
      <div className="container">
      
          
      <HabitatPres habitat={habitat}/>  
      <Animaux habitat={habitat}/>
</div>
    )}
      export default Foret1