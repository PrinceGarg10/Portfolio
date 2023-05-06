import React from "react";
import css from './People.module.scss'
import { motion } from "framer-motion";
import { footerVariants, staggerChildren } from "../../utils/motion";
import Slider from "react-slick";
import { comments, sliderSettings } from "../../utils/data";
const People = () => {
    return (
        <motion.section
            variants={staggerChildren}
            initial='hidden'
            whileInView={'show'}
            viewport={{ once: false, amount: 0.25 }}
            className={`paddings ${css.wrapper}`}>
            <motion.div 
            variants={footerVariants}
            className={`yPaddings innerWidth ${css.container}`}>
                <a className="anchor" id="people"></a>
                <div className={`flexCenter ${css.heading}`}>
                    <span className="primaryText">
                        People Talk about us
                    </span>
                    <p style={{ marginTop: "2rem" }}>
                        I got a job that was in accordance with the salary and fiedl of work.
                    </p>
                    <p>
                        The process of submitting an application was quite cosy
                    </p>
                </div>

                {/* carousal */}
                <div className={`yPaddings ${css.comments}`}>
                    <Slider
                        className={css.slider}
                        {...sliderSettings}
                    >
                        {
                            comments.map((comment, i) => {
                                return (
                                    <div className={`flexCenter ${css.comment}`}>
                                        <img src={comment.img} />
                                        <p>{comment.comment}</p>
                                        <div className={css.line}></div>
                                        <div className={css.bio}>
                                            <span>{comment.name}</span>
                                            <span>{comment.post}</span>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </Slider>
                </div>
            </motion.div>
        </motion.section>
    )
}


export default People