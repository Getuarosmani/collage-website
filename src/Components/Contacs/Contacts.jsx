import React from 'react'
import './Contacts.css'

import message from '../../assets/msg-icon.png'
import mail_icon from '../../assets/mail-icon.png'
import phone_icon from '../../assets/phone-icon.png'
import location_icon from '../../assets/location-icon.png'
import arrow from '../../assets/white-arrow.png'

export const Contacts = () => {

    const [name, setName] = React.useState('');
    const [phone, setPhone] = React.useState('');
    const [messageText, setMessageText] = React.useState('');
    const [result, setResult] = React.useState("");
    const [messageType, setMessageType] = React.useState('');

    const onSubmit = async (event) => {
        event.preventDefault();

        if (!name.trim()) {
            setResult("Please enter your name.");
            setMessageType('error')
            return;
          }
        
          if (!/^\+?\d{7,15}$/.test(phone)) {
            setResult("Please enter a valid phone number.");
            setMessageType('error')
            return;
          }
        
          if (!messageText.trim()) {
            setResult("Please enter a message.");
            setMessageType('error')
            return;
          }

        setResult("Sending....");
        setMessageType('correct');

        const formData = new FormData(event.target);

        formData.append("access_key", "27fc5ae0-1aa2-4f97-941f-539b418c9c2d");

        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData
        });

        const data = await response.json();

        if (data.success) {
            setResult("Form Submitted Successfully");
            setMessageType('correct');
            event.target.reset();
            event.target.reset();
            setName('');
            setPhone('');
            setMessageText('');
        } else {
            console.log("Error", data);
            setResult(data.message);
        }

        setTimeout(() => {
            setResult('')
        },5000)
    }
        return (
            <div className='contacts container'>
                <div className="contacts-left">
                    <h3>Send us a message<img src={message} alt="" /></h3>
                    <p>Feel free to reach out through contact form or find our contact information below. Your feedback, questions, and suggestions are important to us as we strive to provide exceptional service to our university community.</p>
                    <ul>
                        <li><img src={mail_icon} alt="" />Contact@GreatStack.dev</li>
                        <li><img src={phone_icon} alt="" />+1123-456-7890</li>
                        <li><img src={location_icon} alt="" />77 Massachusetts Ave, Cambrige <br />MA 02139, United States</li>
                    </ul>
                </div>
                <div className="contacts-right">
                    <form onSubmit={onSubmit}>
                        <label>Your name</label>
                        <input
                            type="text"
                            placeholder='Enter Your Name'
                            name='name'
                            onChange={(e) => setName(e.target.value)}
                            value={name}
                        />
                        <label>Phone Number</label>
                        <input
                            type="tel"
                            name='phone'
                            placeholder='Enter your mobile number'
                            onChange={(e) => setPhone(e.target.value)}
                            value={phone}
                        />
                        <label>Write your message here</label>
                        <textarea name="message"
                            rows={6}
                            resiz placeholder='Enter your message'
                            onChange={(e) => setMessageText(e.target.value)}
                            value={messageText}
                        ></textarea>
                        <button type='submit' className='btn campus-btn'>Submit now<img src={arrow} alt="" /></button>
                    </form>
                    <div className='feadback-holder'>
                    <span className={`sending-message ${messageType}`}>{result}</span>
                    </div>
                    </div>
            </div>
        )
    }

