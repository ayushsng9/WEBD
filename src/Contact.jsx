import './Contact.css'
import msg_icon from './assets/msg-icon.png'
import mail_icon from './assets/mail-icon.png'
import phone_icon from './assets/phone-icon.png'
import location_icon from './assets/location-icon.png'
import white_arrow from './assets/white-arrow.png'


export default function Contact()
{
    return (
        <div className='Contact'>
            <div className="contact-col">
                <h3>Reach Out To Us <img src={msg_icon} alt="" /></h3>
                <p>Feel free to reach out through contact form or find our contact information below. Your feedback, questions, and suggestions are important to us as we strive to provide exceptional service to our
                    university community.
                </p>
                <ul>
                    <li><img src={mail_icon} alt="" />Educity@info.edu</li>
                    <li><img src={phone_icon} alt="" />+1 124-423-5498/4976</li>
                    <li><img src={location_icon} alt="" />Edusity, Trinity Lane, Edusity ES2 1TN, United Kingdom</li>
                </ul>
            </div>
            <div className="contact-col">
            <form action="">
                <label htmlFor="">Name</label>
                <input type="text" name='name' placeholder='Enter your name' required />
                <label htmlFor="">Phone Number</label>
                <input type="tel" name='phone' placeholder='Enter your mobile number' required/>
                <label htmlFor="">Write to Us...</label>
                <textarea name="message" id="" cols="30" rows="6" placeholder='Add a comment'></textarea>
                <button type='submit' className='btn dark-btn'>Submit <img src={white_arrow} alt="" /></button>
            </form>
            </div>
        </div>
    );
}