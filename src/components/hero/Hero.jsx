import React from "react";
import css from './Hero.module.scss'
import { motion } from "framer-motion";
import { fadeIn, slideIn, staggerContainer } from "../../utils/motion";

const Hero = () => {
    return (
        <section className={`paddings ${css.wrapper}`}>
            <motion.div
                variants={staggerContainer}
                initial='hidden'
                whileInView='show'
                viewport={{ once: false, amount: 0.25 }}
                className={`innerWidth ${css.container}`}>
                {/* ----------UPPER ELEMENTS----------- */}
                <div className={css.upperElements}>
                    <motion.span
                        variants={fadeIn("right", "tween", 0.2, 1)}
                        className="primaryText">
                        Hey There, <br /> I'm Prince.</motion.span>
                    <motion.span
                        variants={fadeIn("left", "tween", 0.4, 1)}
                        className="secondaryText">
                        I design beautiful simple
                        <br />
                        things, And I love what I do
                    </motion.span>
                </div>
                {/* ------------PERSON IMAGE---------- */}
                <motion.div
                    variants={fadeIn("up", "tween", 0.3, 1)}
                    className={css.person}>
                    <motion.img
                        variants={slideIn("up", "tween", 0.5, 1.3)}
                        src="./person.png" alt="" />
                </motion.div>

                {/* --------EMAIL-------------------- */}
                <a href="mailto:princegarg8198@gmail.com" className={css.email}>
                    princegarg8198@gmail.com
                </a>
                {/* ---------LOWER ELEMENTS */}
                <div className={css.lowerElements}>
                    <motion.div
                        variants={fadeIn("right", "tween", 0.3, 1)}
                        className={css.experience}>
                        <div className="primaryText">1.4</div>
                        <div className="secodaryText">
                            <div>
                                Years
                            </div>
                            <div>
                                Experience
                            </div>
                        </div>
                </motion.div>
                <motion.div
                variants={fadeIn("left", "tween", 0.5, 1)}
                 className={css.certificate}>
                    <img src="./certificate.png" alt="" />
                    <span>CERTIFIED PROFATIONAL</span>
                    <span>SOFTWARE DEVELOPER</span>
                </motion.div>
            </div>
        </motion.div>
        </section >
    )
}

export default Hero