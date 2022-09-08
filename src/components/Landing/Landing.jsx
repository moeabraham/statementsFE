import React from 'react';
import WAVES from "../../assets/waves.svg";
import STATEMENTS from "../../assets/statements.svg";
import HANDSHAKES from "../../assets/handshake.svg";
import styles from "./Landing.module.css";
import {FcDocument} from 'react-icons/fc';
import {FcApproval} from 'react-icons/fc';
import {FcPlus} from 'react-icons/fc';
import {Link} from 'react-router-dom';

function LandingPage() {
  return (
    <div>
        <Link className={styles.container} to='viewstatements'>
        <article className={styles.viewArticle}>
            <figure className={styles.figCard}>
                <h1 className={styles.headers}>View All my Statements</h1>
                <img src={STATEMENTS} className={styles.statementsIcon} />
                {/* <FcApproval className={styles.viewStatements }  /> */}
            </figure>
        </article>
        </Link>
        <div>

        </div>
        <Link className={styles.container} to='createproposal'>
        <article className={styles.viewArticle}>
            <figure className={styles.figCard}>
                <h1 className={styles.headers}>Create a new proposal</h1>
                {/* <FcPlus className={styles.viewStatements }  /> */}
                <img src={HANDSHAKES} className={styles.statementsIcon} />

            </figure>
        </article>
        </Link>
    </div>
  )
}

export default LandingPage