import "./Body.css"
import dark_arrow from './assets/dark_arrow.png'

export default function Body()
{
    return(
        <div className="Body container">
            <div className="Body-text">
                <h1>We Ensure better education for a better world </h1>
                <p>
                    Our cutting-edge curriculum is designed to empower students
                    with the knowledge, skills, and experiences needed to excel 
                    the dynamic fiels of education
                </p>
                <div>
                <button className="btn">Explore more <img src={dark_arrow} alt="" /></button>
                </div>
                
            </div>
        </div>
    );
}