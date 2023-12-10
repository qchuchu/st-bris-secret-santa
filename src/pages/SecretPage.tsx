import { useParams, Link } from 'react-router-dom';
import { secretSantaMapping } from '../mapping/secretSantaMapping';

const SecretPage = () => {
    const { memberName } = useParams();
    const selectedMember = secretSantaMapping[memberName as keyof typeof secretSantaMapping];

    return (
        <div style={{ padding: "2rem"}}>
            <p>{memberName}, tu dois faire un cadeau à ...</p>
            <h2>{selectedMember} !</h2>
            <p>N'hésite pas à demander à ses proches si jamais tu n'as pas d'idée ! Mais ne te fais pas découvrir...</p>
            <p>Une seule règle : ne pas dépasser un montant de 50€ !</p>
            <Link to="/"><button className="button-24">Retour à la page d'accueil</button></Link>
        </div>
    );
};

export default SecretPage;