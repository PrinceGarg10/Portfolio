import React from "react";
import css from './Expertise.module.scss'
import { WhatDoIHelp, projectExperience } from '../../utils/data'
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
                    {
                        WhatDoIHelp.map((p, i) => {
                            return (
                                <span key={i} className="secondaryText">
                                    {p}
                                </span>
                            )
                        })
                    }
                    <div className={`flexCenter ${css.stats}`}>
                        <div className={`flexCenter ${css.stat}`}>
                            <span className="primaryText">285+</span>
                            <span className="secondaryText">Projects Completed</span>

                        </div>
                        <div className={`flexCenter ${css.stat}`}>
                            <span className="primaryText">190+</span>
                            <span className="secondaryText">Happy Clients</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}


export default Expertise