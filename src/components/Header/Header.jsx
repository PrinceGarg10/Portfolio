import React, { useRef, useState } from "react";
import { BiMenuAltLeft, BiPhoneCall } from 'react-icons/bi'
import css from './Header.module.scss'
import { motion } from "framer-motion";
import { getMenuStyles, headerVariants } from '../../utils/motion'
import useHeaderShadow from "../../hooks/useHeaderShadow";
import useOutsideAlerter from "../../hooks/useOutsideAlerter";

const Header = () => {
    const [menuOpened, setMenuOpened] = useState(false);
    const headerShadow = useHeaderShadow()
    const menuRef = useRef()
    useOutsideAlerter(
        {
            menuRef,
            setMenuOpened
        }
    )
    return (
        <motion.div
            initial="hidden"
            whileInView='show'
            variants={headerVariants}
            viewport={{ once: false, amount: 0.25 }}
            className={`bg-primary paddings ${css.wrapper}`}
            style={{ boxShadow: headerShadow }}
        >
            <div className={`flexCenter innerWidth ${css.container}`}>
                <div className={css.name}>
                    Prince Garg
                </div>
                <ul
                    ref={menuRef}
                    style={getMenuStyles(menuOpened)}
                    className={`flexCenter ${css.menu}`}>
                    <li><a href="#expertise">Services</a></li>
                    <li><a href="#work">Experience</a></li>
                    <li><a href="#portfolio">Portfolio</a></li>
                    <li><a href="#people">Testimonials</a></li>
                    <li className={`flexCenter ${css.phone}`}>
                        <p>+91 8198971208</p>
                        <BiPhoneCall size={"40px"} />
                    </li>
                </ul>
                <div className={css.menuIcon}
                    onClick={() => setMenuOpened((prev) => !prev)}
                >
                    <BiMenuAltLeft size={'30px'} />
                </div>
            </div>
        </motion.div>
    )
}

export default Header