import React from "react";
import css from './Works.module.scss'
import { motion } from "framer-motion";
import { fadeIn, staggerChildren, textVariant2, zoomIn } from "../../utils/motion";
import { workExp } from "../../utils/data";

const Works = () => {
    return (
        <motion.section
            initial="hidden"
            whileInView={'show'}
            variants={staggerChildren}
            viewport={{ once: false, amount: 0.25 }}
            className={` paddings ${css.wrapper}`}>
                <a className="anchor" id="work"></a>
            <div className={`flexCenter innerWidth ${css.container}`}>
                <span className="primaryText yPaddings">
                    My Work Experience
                </span>
                <div className={`flexCenter ${css.experience}`}>
                    {
                        workExp.map((exp, i) => {
                            return <motion.div
                                variants={textVariant2}
                                key={i} className={`flexCenter ${css.exp}`}>
                                <div className={css.post}>
                                    <h1>{exp.place}</h1>
                                    <p>{exp.tenure}</p>
                                </div>
                                <div className={css.role}>
                                    <h1>{exp.role}</h1>
                                    <p>{exp.detail}</p>
                                </div>
                            </motion.div>
                        })
                    }
                    <motion.div
                        variants={zoomIn(1, 1)}
                        className={css.progressBar}>
                        <motion.div
                            variants={fadeIn('down', 'tween', 2, 1.5)}
                            className={css.line}></motion.div>
                        <div><div className={css.circle} style={{ backgroundColor: "#286F6c" }}></div></div>
                        <div><div className={css.circle} style={{ backgroundColor: "#F2704E" }}></div></div>
                        <div><div className={css.circle} style={{ backgroundColor: "#EEC048" }}></div></div>
                    </motion.div>
                </div>
            </div>
        </motion.section>
    )
}


export default Works