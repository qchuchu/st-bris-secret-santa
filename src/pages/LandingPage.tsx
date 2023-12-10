import { ChangeEventHandler, useState } from 'react';
import { Link } from 'react-router-dom';
import "./LandingPage.css";
import { members } from '../scripts/members';

const LandingPage = () => {
  const [selectedMember, setSelectedMember] = useState('');

  const handleSelectChange:ChangeEventHandler<HTMLSelectElement> = ({target: { value }}) => {
    setSelectedMember(value);
  };

  return (
    <div className='container'>
      <h1>Bienvenue sur la page du Secret Santa de Saint-Bris 2023 !</h1>
      <img className="rotate-image"  src="/christmas-elf.png" alt="Christmas" />
      <div>
        <label style={{textAlign: "center"}}>Qui es-tu ?</label>
        <select value={selectedMember} onChange={handleSelectChange}>
          <option value="" disabled>Choisi ton prénom</option>
          {members.map((member) => (
            <option key={member} value={member}>{member}</option>
          ))}
        </select>
      </div>
      {selectedMember && (
        <Link to={`/secret/${selectedMember}`}>
          <button className="button-24">Découvre à qui tu dois faire un cadeau !</button>
        </Link>
      )}
    </div>
  );
};

export default LandingPage;