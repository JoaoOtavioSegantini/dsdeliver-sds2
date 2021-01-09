import './styles.css'
import {ReactComponent as Instagram} from './instagram.svg'
import {ReactComponent as Linkedin} from './linkedin.svg'
import {ReactComponent as Youtube} from './youtube.svg'

function Footer() {
    return (
       <footer className="main-footer">
           App desenvolvido durante a 2ª ed. do evento Semana DevSuperior
           <div className="footer-icons">
               <a href="https://www.youtube.com/channel/UC8tqZtzh7fPEQ2TKQpPswUQ/videos" target="_new">
                   <Youtube/>
               </a>
               <a href="https://www.linkedin.com/in/joao-seggga-a53b16122/" target="_new">
                     <Linkedin/>
               </a>
               <a href="https://www.instagram.com/joaotavioos/" target="_new">
                    <Instagram/>
               </a>
           </div>
       </footer>
    )
}

export default Footer;