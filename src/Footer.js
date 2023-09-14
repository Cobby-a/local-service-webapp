import '../src/Assets/Stylesheets/Footer.css';

const Footer = () => {
    return(
        <footer>
            <p className='cp'><span>&copy;</span>2022-2023, ConnectLocal. All Rights Reserved.</p>
            <ul className='footer-links'>
                
                <a className='sc'>
                    <li>Support Center</li>
                </a>
                <a className='terms'>
                    <li>Terms of Use</li>
                </a>
                <a className='privacy'>
                    <li>Privacy Policy</li>
                </a>
            </ul>
        </footer>
    )
}

export default Footer;