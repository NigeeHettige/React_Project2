import styles from './Navigation.module.css';

const Navigation = () => {
  console.log(styles); 
  return (
    <nav className={`${styles.navigation} container`}>
        <div className="logo">
            <img src="./images/logo.jpg" className="logo_img"></img>
        </div>

        <ul>
            <li>Home</li>
            <li>About</li>
            <li>Contact Us</li>
        </ul>
      
    </nav>
  )
}

export default Navigation;
