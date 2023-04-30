import React from "react";
import css from './Expertise.module.scss'
import { projectExperience } from '../../utils/data'
const Expertise = () => {
    return (
        <section className={css.wrapper}>
            <div className={`paddings yPaddings flexCenter innerWidth ${css.container}`}>
                <div className={css.leftSide}>
                    {
                        projectExperience.map((exp, i) => {
                            return (
                                <div key={i} className={css.exp}>
                                    <div className="flexCenter" style={{ background: exp.bg }}>
                                        <exp.icon size={25} color="white" />
                                    </div>
                                    <div>
                                        <span>
                                            {exp.name}</span>
                                        <span className="secodaryText">
                                            {exp.projects} Projects
                                        </span>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
                <div className={css.rightSide}>
                    <span className="primaryText">
                        What do I help?
                    </span>
                </div>
            </div>
        </section>
    )
}


export default Expertise