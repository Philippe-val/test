import data from '../../data/data.json';
import './desert1.css';
import HabitatPres from '../../components/HabitatPres';
import Animaux from '../../components/Animaux';
const Desert1 = () => {
  const habitat=data.habitats[2]
    return (
      <div className="container">

          
      <HabitatPres habitat={habitat}/>  
      <Animaux habitat={habitat}/>
</div>
    )}
      export default Desert1