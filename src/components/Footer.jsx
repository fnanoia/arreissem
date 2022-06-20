import { SiFacebook } from "react-icons/si";
import { SiInstagram } from "react-icons/si";
import { SiGithub } from "react-icons/si";
import { SiTwitter } from "react-icons/si";

function Footer(){
    
    return (
    <div className="footer">
        <ul>
            <li><a href="/"><SiFacebook/></a></li>
            <li><a href="/"><SiInstagram/></a></li>
            <li><a href="https://github.com/fnanoia"><SiGithub/></a></li>
            <li><a href="/"><SiTwitter/></a></li>
    
        </ul>
        <div className="copy">
        <p>Written by Francisco Nanoia. 2022</p>
        </div>
    </div>
    )
};

export default Footer;