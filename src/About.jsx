import"./About.css"
import about_img from './assets/about.png'
import play_icon from './assets/play-icon.png'
export default function About()
{
    return(
        <div className="About">
            <div className="about-l">
                <img src={about_img} alt="" className="about-img" />
                <img src={play_icon} alt="" className="play-icon" />
            </div>

            <div className="about-r">
                <h3>About University</h3>
                <h2>Nurturing Tommorrow's Leaders Today</h2>
                <p>Embark on a transformative educational journey with our university's comprehensive education programs. Our cutting-edge curriculum is designed to empower students with the knowledge, skills, and experiences needed to excel in the dynamic field of education.</p>
                <p>With a focus on innovation, hands-on learning, and personalized mentorship, our programs prepare aspiring educators to make a meaningful impact in classrooms, schools, and communities.</p>     
                <p>Whether you aspire to become a teacher, administrator, changes counselor, or educational leader, our diverse range of programs offers the perfect pathway to achieve your goals and unlock your
                full potential in shaping the future of education.</p>
            </div>
        </div>
    );
}