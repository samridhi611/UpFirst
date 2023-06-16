import Upnav from '../components/Upnav';
import Footer from "../components/Footer";

const Terms = () => {
    return (
        <>
            <Upnav/>
            <div className="upfirst about__padding">
               <h1>Terms & Conditions</h1>
               <p>Founded in August of 2008 and based in Gurgaon, Haryana, UpSurge is a trusted community marketplace for people to list, discover, and book unique accommodations around the world — online or from a mobile phone or tablet.</p>
               <p>Whether an apartment for a night, a castle for a week, or a villa for a month, UpSurge connects people to unique travel experiences, at any price point, in more than 65,000 cities and 191 countries. And with world-class customer service and a growing community of users, Airbnb is the easiest way for people to monetize their extra space and showcase it to an audience of millions.</p>
           </div>

           <div className="uptwo about__padding terms" >
                <h1>Content</h1>
                <div className='upline'></div>
                <p>
                   All text, graphics, user interfaces, visual interfaces, photographs, trademarks, logos, sounds, music, artwork and computer code (collectively, "Content"), including but not limited to the design, structure, selection, coordination, expression, "look and feel" and arrangement of such Content, contained on the Site is owned, controlled or licensed by or to UpSurge, and is protected by trade dress, copyright, patent and trademark laws, and various other intellectual property rights and unfair competition laws.
                </p>
                <p>
                   Except as expressly provided in these Terms of Use, no part of the Site and no Content may be copied, reproduced, republished, uploaded, posted, publicly displayed, encoded, translated, transmitted or distributed in any way (including "mirroring") to any other computer, server, Web site or other medium for publication or distribution or for any commercial enterprise, without UpSurge’s express prior written consent.
                </p>
                <p>
                You may use information on UpSurge products and services (such as data sheets, knowledge base articles, and similar materials) purposely made available by UpSurge for downloading from the Site, provided that you (1) not remove any proprietary notice language in all copies of such documents, (2) use such information only for your personal, non-commercial informational purpose and do not copy or post such information on any networked computer or broadcast it in any media, (3) make no modifications to any such information, and (4) not make any additional representations or warranties relating to such documents.
                </p>
           </div>
            <Footer/>
        </>
    )
}

export default Terms;