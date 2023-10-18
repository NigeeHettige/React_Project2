import Button from "../Button/Button";
import styles from "./ContactForm.module.css";
import {BiMessageDetail} from 'react-icons/bi';
import {FaPhoneAlt} from 'react-icons/fa';
import {HiOutlineMail} from 'react-icons/hi'; 
import { useState } from "react";


const ContactForm = () => {
    const[name,setName] = useState("Nigee");
    const[email,setEmail] = useState("123@gmail.com");
    const[text,setText] = useState("fill form");
    
   
  const onSubmit =(event)=>{
    
    event.preventDefault();

    setName(event.target[0].value);
    setEmail(event.target[1].value);
    setText(event.target[2].value);
    
   
  }
  return (
    <section className={styles.container}>
        <div className={styles.contact_form}>
            <div className={styles.top_button}>
                <Button 
                text="VIA SUPPORT CHAT" 
                icon={<BiMessageDetail fontSize="24px"/>}
                />

                <Button 
                
                text="VIA CALL" 
                icon={<FaPhoneAlt fontSize="20px"/>}
                />

            </div>
            <Button 
                text="VIA EMAIL FORM" 
                icon={<HiOutlineMail fontSize="24px"/>}
                isOutline = {true}
            />

            <form onSubmit={onSubmit}>
                <div className={styles.form_control}>
                    <label htmlFor="name">Name</label>
                    <input type="text" name="name"></input>
                </div>

                <div className={styles.form_control}>
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email"></input>
                </div>

                <div className={styles.form_control}>
                    <label htmlFor="text">Text</label>
                    <textarea name="text" rows={5}/>
                </div>

                <div style={{display:"flex",justifyContent:"end",}}>
                    <Button 
                    text="SUBMIT" 
                
                    />
                </div>
                <div className="">{name+" "+email+" "+text}</div>

            </form>
           
        </div>
        <div className={styles.contact_image}>
            <img src="./images/contact.png" alt="contact"></img>
        </div>
    </section>
  );
};

export default ContactForm; 
