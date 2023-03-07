import React, {useEffect} from 'react';
import styles from './Character.module.css'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import InfoItem from "../../components/InfoItem/InfoItem";
import {useAppDispatch, useAppSelector} from "../../hooks";
import {useNavigate, useParams} from "react-router-dom";
import {setSelectedCharacter} from "../../store/reducers/characters/charactersSlice";

const Character = () => {
    const {selectedCharacter, characters} = useAppSelector(state => state.characters)
    const dispatch = useAppDispatch()
    const navigate = useNavigate()
    const {characterId} = useParams()

    useEffect(() => {
        dispatch(setSelectedCharacter(Number(characterId)))
    }, [characterId, dispatch, characters])
    return (
        <div className={styles.character}>
            {Object.keys(selectedCharacter).length > 0 &&
                <>
                    <div onClick={() => navigate('/')} className={styles.backWrapper}>
                        <ArrowBackIcon className={styles.backIcon}/>
                        <span>Go back</span>
                    </div>
                    <img className={styles.characterImage} src={selectedCharacter.image} alt="Character image"/>
                    <h1 className={styles.name}>{selectedCharacter.name}</h1>
                    <div className={styles.infoText}>Informations</div>
                    <div className={styles.info}>
                        <InfoItem type={'Gender'} value={selectedCharacter.gender || 'Unknown'}/>
                        <InfoItem type={'Status'} value={selectedCharacter.status || 'Unknown'}/>
                        <InfoItem type={'Specie'} value={selectedCharacter.species || 'Unknown'}/>
                        <InfoItem type={'Origin'} value={selectedCharacter.origin.name || 'Unknown'}/>
                        <InfoItem type={'Type'} value={selectedCharacter.type || 'Unknown'}/>
                    </div>
                </>
            }
        </div>
    );
};

export default Character;