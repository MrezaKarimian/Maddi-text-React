import React from "react";
import styles from "../Style/Card.module.css";
import profileImage from "../image/profile.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee, faGamepad, faTrophy, faUserGroup } from "@fortawesome/free-solid-svg-icons";

function Card({props}) {
    console.log(props)
  return (
    <div className={styles.body}>
      <div className={styles.content}>
        <div className={styles.userSection} style={{background: `linear-gradient(${props.color1},${props.color2})`}}>
          <div className={styles.UserSectionDetail}>
            <div className={styles.level}>
              <p>{props.level}</p>
            </div>
            <div className={styles.picture} style={{borderColor: `${props.color1}`}}>
              <img src={profileImage} alt=""/>
            </div>
            <div className={styles.points}>
              <p>{props.points}</p>
            </div>
          </div>
        </div>
        <div className={styles.userDescription}>
          <div className={styles.name}>
            <h1>{props.name}</h1>
          </div>
          <div className={styles.descriptionText}>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce a
              volutpat mauris, at molestie lacus. Nam vestibulum sodales odio ut
              pulvinar.
            </p>
          </div>
          <div className={styles.tip}>
            <p>Mouse over the card for more info</p>
          </div>
          <div className={styles.moreInfo} style={{background: `linear-gradient(${props.color1},${props.color2})`}}>
            <h1>{props.name}</h1>
            <div className={styles.coords}>
              <p>Group Name</p>
              <p>Joined January 2019</p>
            </div>
            <div className={styles.coords}>
              <p>Position/Role</p>
              <p>City, Country</p>
            </div>
            <div className={styles.status}>
              <div>
                <div>Awards</div>
                <FontAwesomeIcon icon={faTrophy} size="xl"/>
                <div className={styles.value}>{props.awards}</div>
              </div>
              <div>
                <div>Matches</div>
                <FontAwesomeIcon icon={faGamepad} size="xl"/>
                <div className={styles.value}>{props.matches}</div>
              </div>
              <div>
                <div>Pals</div>
                <FontAwesomeIcon icon={faUserGroup} size="xl"/>
                <div className={styles.value}>{props.pals}</div>
              </div>
              <div>
                <div>Coffee</div>
                <FontAwesomeIcon icon={faCoffee} size="xl"/>
                <div className={styles.value}>∞</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
