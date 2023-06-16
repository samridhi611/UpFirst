import "./FounderCard.css";

function FounderCard({ founder }) {
    return (
      <div className="aFounder">
        <img src={founder.image} alt={founder.name} />
        <div className="f_info">
                <h3>{founder.name}</h3>
                <h4>{founder.title}</h4>
                <p>{founder.bio}</p>
        </div>
      </div>
    );
  }

  export default FounderCard;