import React, { useState } from "react";
import Card from './Card';
import { Car, Assistant } from './static';

function SideBar(){
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
            {sideCards.map( card => <div className =" "><Card title={card.title} logo={card.logo} footer={card.footer} height="200px" width="100%" heightImg="150px" widthImg="145px" /> </div>)}
        </div>
        )
}

export default SideBar;