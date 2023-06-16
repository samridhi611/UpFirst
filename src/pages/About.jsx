import Upnav from '../components/Upnav';
import './Pages.css';
import Footer from "../components/Footer";
import FounderCard from '../components/FounderCard';
import Rishabh from '../images/Rishabh.png';
import Pankaj from '../images/Pankaj.png';

const founders = [
    {
      id: 1,
      name: 'Rishabh Ranjan Pathak',
      title: 'CEO & Co Founder',
      bio: 'Rishabh is the CEO and head of Community at UpSurge. He drives the company’s vision, strategy and growth as it provides interesting and unique ways for people to travel, as well as representing the interests of the millions of UpSurge hosts around the World.Under Rishabh’s leadership, UpSurge stands at the forefront of the sharing economy, and has expanded to over 3 million+ listings in more than 191 countries, as well as expanding into other areas of travel with UpSurge Trips. Rishabh met co-founder Pankaj Sharma at the Rhode Island School of Design (RISD) where he received a Bachelor of Fine Arts in Industrial Design.',
      image: Rishabh,
    },
    {
      id: 2,
      name: 'Pankaj Sharma',
      title: 'CTO & Co-Founder ',
      bio: 'Pankaj is the CTO and Co Founder at UpSurge. He drives the company’s vision, strategy and growth as it provides interesting and unique ways for people to travel, as well as representing the interests of the millions of UpSurge hosts around the World.Under Brian’s leadership, UpSurge stands at the forefront of the sharing economy, and has expanded to over 3 million+ listings in more than 191 countries, as well as expanding into other areas of travel with UpSurge Trips.',
      image: Pankaj,
    },
    // Add more founders here
  ];

const About = () => {

    return(
        <>
           <Upnav/>
           <div className="upfirst about__padding">
               <h1>About Us</h1>
               <p>Founded in August of 2008 and based in Gurgaon, Haryana, UpSurge is a trusted community marketplace for people to list, discover, and book unique accommodations around the world — online or from a mobile phone or tablet.</p>
               <p>Whether an apartment for a night, a castle for a week, or a villa for a month, UpSurge connects people to unique travel experiences, at any price point, in more than 65,000 cities and 191 countries. And with world-class customer service and a growing community of users, Airbnb is the easiest way for people to monetize their extra space and showcase it to an audience of millions.</p>
           </div>

           <div className="uptwo about__padding">
                <h1>Our Founders</h1>
                <div className='upline'></div>
                <div className="founderList">
                {founders.map((founder) => (
                        <FounderCard founder={founder} />
                ))}
                </div>
           </div>
           <Footer/>
        </>
    )
}

export default About;