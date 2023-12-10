import { useParams, Link } from 'react-router-dom';
import { secretSantaMapping } from '../mapping/secretSantaMapping';

const SecretPage = () => {
    const { memberName } = useParams();
    const selectedMember = secretSantaMapping[memberName as keyof typeof secretSantaMapping];

    return (
        <div>
            <p>{memberName}, tu dois faire un cadeau à ...</p>
            <h2>{selectedMember} !</h2>
            <Link to="/"><button className="button-24">Retour à la page d'accueil</button></Link>
        </div>
    );
};

export default SecretPage;