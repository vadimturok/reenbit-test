import React, {FC} from 'react';
import styles from './InfoItem.module.css'

type InfoItemProps = {
    type: string;
    value: string
}

const InfoItem: FC<InfoItemProps> = ({type, value}) => {
    return (
        <div className={styles.infoItem}>
            <div className={styles.type}>{type}</div>
            <div className={styles.value}>{value}</div>
            <div className={styles.line}/>
        </div>
    );
};

export default InfoItem;