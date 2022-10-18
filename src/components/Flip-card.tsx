import React from "react";
import Card from "./card/Card";
import { CSSTransition } from "react-transition-group";
import { useState } from "react";

interface IProps {
    imgPeca: string;
    content: string;
}

const Flipcard = ({ imgPeca, content }: IProps) => {
    const [showFront, setShowFront] = useState(true);
    return (
        <div className="flip-card-container ">
            <CSSTransition in={showFront} timeout={300} classNames="flip">
                <Card
                    imgPeca={imgPeca}
                    content={content}
                    onClick={() => {
                        setShowFront((v) => !v);
                    }}
                />
            </CSSTransition>
        </div>
    );
};

export default Flipcard;
