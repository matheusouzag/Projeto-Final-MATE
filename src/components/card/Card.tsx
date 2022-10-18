import React from "react";

interface IProps {
    imgPeca: string;
    content: string;
}

const Card = ({ imgPeca, content, onClick }: IProps) => {
    return (
        <div className="card" onClick={onClick}>
            <div className="card-back ">
                <p className="p-2">{content}</p>
            </div>

            <div className="card-front">
                <picture>
                    <img className="" src={imgPeca} alt=""></img>
                </picture>
            </div>
        </div>
    );
};

export default Card;
