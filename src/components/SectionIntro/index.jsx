import React from 'react'
import './intro.css'
import {Link} from 'react-router-dom'

const SectionIntro = () => {
  return (
    <div className="intro">
      
      <div className="intro-left">
        <h1 className="intro-title"> Le zoo de Brocéliande</h1>
        <p className="intro-text">Bienvenue au Zoo de Brocéliande !

Découvrez un monde fascinant où la nature prend vie. Au Zoo de Brocélainde, nous abritons une incroyable diversité d'espèces animales venues des quatre coins du globe. Venez rencontrer nos majestueux lions, nos éléphants joueurs, et nos oiseaux colorés dans des environnements soigneusement recréés pour leur bien-être.

Nos missions :

Éducation : Apprenez-en plus sur la faune et la conservation à travers nos programmes éducatifs interactifs.
Conservation : Participez à la protection des espèces menacées grâce à nos initiatives de préservation et de reproduction.
Recherche : Soutenez les avancées scientifiques sur le comportement et la santé des animaux.
Profitez d'une journée en famille ou entre amis pour explorer, apprendre et s'amuser dans un cadre naturel exceptionnel. Le Zoo de Brocéliande, c'est une aventure inoubliable pour petits et grands !

Venez vite nous rendre visite et plongez au cœur de la vie sauvage !





</p>
        <Link to="/Histoirezoo">
        <button className="btn btn-success">L'histoire du zoo</button>
        </Link>
      </div>
      <div className ="intro-right">
        <img src="https://static.vecteezy.com/ti/vecteur-libre/p2/1337861-entree-zoo-avec-animaux-de-dessin-anime-gratuit-vectoriel.jpg " className="img-intro"  alt="Dessin de plisieurs animaux du zoo"  />
      </div>
      </div>
  )
}

export default SectionIntro