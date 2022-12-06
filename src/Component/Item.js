import { AnimatePresence, motion } from "framer-motion"
import { useState } from "react"
import styled from "styled-components";

const Motionli = styled(motion.li)`
    background-color: white;
    border-radius: 10px;
    padding: 20px;
    margin-bottom: 20px;
    overflow: hidden;
    cursor: pointer;    

    .avatar {
        width: 100%;
        height: 150px;
        background-color: #666;
        border-radius: 20px;
        /* overflow: hidden; */
        
        img {
            width: 100%;
            /* height: 100%; */
        }
    }

    .row {
        width: 100%;
        height: 50px;
        background-color: #999;
        border-radius: 10px;
        margin-top: 40%;
    }
`

function Item() {

    const [isOpen, setIsOpen] = useState(false);
    const toggleOpen = () => setIsOpen(!isOpen);

    return (
        <Motionli layout onClick={toggleOpen} initial={{ borderRadius: 10 }}>

            <motion.div className="avatar" layout>
                <img src="img/bbb.PNG" />
            </motion.div>

            <AnimatePresence>{isOpen && <motion.div
                layout
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
            >
                <div className="row" />
            </motion.div>}</AnimatePresence>
        </Motionli>
    )
}

export default Item;