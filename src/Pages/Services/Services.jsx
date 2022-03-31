import React from "react";
import PageTitle from "../../Components/PageTitle/PageTitle";
import styles from "./Services.module.scss"
import reasonsBG from "../../Assets/images/Services/reasonsbg.jpg"

const Services = () => {
    return (
        <main>
            <PageTitle title={"Services"} />

            <section className={styles.reasons}>
                <div className={styles.reasons_content}>
                    <img src={reasonsBG} />
                    <div className={styles.reasons_value}>
                        <h1>Reasons</h1>
                        <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
                        <table>
                            <tr>
                                <td><h2>6385</h2><span>Project Success</span></td>
                                <td><h2>589</h2><span>Win Awards</span></td>
                            </tr>
                            <tr>
                                <td><h2>159</h2><span>Project Teams</span></td>
                                <td><h2>1596</h2><span>Customer Happy</span></td>
                            </tr>
                        </table>
                    </div>
                </div>
            </section>
            
        </main>
    )
}

export default Services;