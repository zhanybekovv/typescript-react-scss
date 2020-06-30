import React, { useState } from "react";
import Card from '../Card/Card';
import { Car, Assistant } from '../../static';

const SideBar = () => {
    const [sideCards, setSideCards] = useState([
        {
            title: "Курс обмена валют:"
        },
        {
            logo: Car, 
            footer: "Кредиты Auto"
        },
        {
            logo: Assistant,
            footer: "Депозиты"
        }
    ]);
    return (
        <div className="mt-4">
            {sideCards.map( (card, i) => 
                <Card
                    key = {i} 
                    title={card.title} 
                    logo={card.logo} 
                    footer={card.footer} 
                    height="200px" 
                    width="100%" 
                    heightImg="174px" 
                    widthImg="100%"
                    hr={false} 
                />)}
        </div>
        )
}

export default SideBar;