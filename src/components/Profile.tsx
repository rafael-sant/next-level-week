import { useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengesContext';
import styles from '../styles/components/Profile.module.css'

export function Profile() {

    const {level} = useContext(ChallengesContext);

    return (
        <div className={ styles.profileContainer }>
            <img src="https://lh3.googleusercontent.com/ogw/ADGmqu-FLLvckUe0rUoxgBBRs8AbdtQGyoQBTm5Yzey9iQ=s83-c-mo" alt="Rafael Barros"/>
            <div>
                <strong>Rafael Santos</strong>
                <p>
                    <img src="icons/level.svg" alt="Level"/>
                    Level {level}
                </p>
            </div>
        </div>  
    );
}