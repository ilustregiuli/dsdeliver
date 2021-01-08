import './styles.css';

import {ReactComponent as YoutubeIcon} from './youtube.svg';
import {ReactComponent as InstagramIcon} from './instagram.svg';
import {ReactComponent as LinkedInIcon} from './linkedin.svg';

function Footer(){
    return(
        <footer className="main-footer">
            App desenvolvido durante a 2ª ed. do evento Semana DevSuperior
            <div className="footer-icons">
                <a href="https://www.instagram.com/devsuperior.ig/" target="_new">
                     <InstagramIcon />
                </a>
                <a href="https://devsuperior.com.br/" target="_new">
                         <YoutubeIcon />
                </a>
                <a href="https://www.linkedin.com/school/devsuperior/" target="_new">
                        <LinkedInIcon /> 
                </a>
            </div>
        </footer>
    )

}
export default Footer;