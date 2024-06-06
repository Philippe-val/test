import "./actualite.css"
import {Link} from 'react-router-dom'

const Actualite= () => {
  return (
    
    
    <div className="actualite-container">
    <div className="title-container"><h1 className="title-actualite">Dernières actualités</h1></div>
        <div className="card-actualite">
            <div className='text-actualite'>
                <Link to="/Soigneur">
                 <button className="button-actualite" >Soigner les animaux</button>
                </Link>        
                 <h3 classname= "card-guide">Soigner les animaux du zoo</h3>
                 <p className="card-text"> Journée découverte du métier soigneur animaliertous les samedis du mois de juin </p>
            </div>
            <div className="card-photo">
                <img src="https://th.bing.com/th/id/R.854439a6b638163cfc9d646ef1ca5239?rik=xA4SfY%2bE59JjNA&riu=http%3a%2f%2fwww.sosveterinaires.be%2fwp-content%2fuploads%2f2023%2f05%2fsoigneur-zoo.jpg&ehk=XdPiuC3EjmaFDAnI%2bhQi9%2bxep0xJmsf7DuCeGW3FaGA%3d&risl=&pid=ImgRaw&r=0"  alt="" />
        
            </div>  
        </div>
        <div className="card-actualite">
            <div className='text-actualite'>
                <Link to="/Naissance">
                 <button className="button-actualite" >Naissance</button>
                </Link>        
                 <h3 classname= "card-guide">Naissance d'un bébé lion</h3>
                 <p className="card-text"> Notre femelle lionne Léa a donné naissance à un adorable lionceau prénomé King . Venez le découvrir dans notre espace dédié. </p>
            </div>
            <div className="card-photo">
            <img src="https://www.francebleu.fr/s3/cruiser-production/2016/08/1b4421fb-343b-49a9-8b2b-e0c685244b83/1200x680_bebe_lion_2.jpg"  alt="" />
            </div>  
        </div>
        <div className="card-actualite">
            <div className='text-actualite'>
                <Link to="/Nouveau">
                 <button className="button-actualite" >Nouveau</button>
                </Link>        
                 <h3 classname= "card-guide">Bienvenue à nos nouveaux animaux</h3>
                 <p className="card-text"> Nous avons accueilli 4 dauphins. </p>
            </div>
            <div className="card-photo">
            <img src="https://junior-world.ch/wp-content/uploads/sites/9/2021/03/16258_26_Delfine_Fortpflanzung-1024x640.jpg" alt="" />
        
            </div>  
        </div>
    </div>
    
  )
}

export default Actualite