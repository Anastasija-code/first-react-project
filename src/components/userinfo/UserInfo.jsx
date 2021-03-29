import React from 'react';


export const UserInfo = ({userName, userGender, userAge, yearsWorked}) => {
return (
    <list>
        <span> Имя: {userName}</span>
        <br/>
        <span> Пол: {userGender}</span>
        <br/>
        <span> Возраст: {userAge}</span>
        <br/>
        <span> Работает лет: {yearsWorked}</span>
        <br/>
        <span>Зарплата: {yearsWorked*10}</span>
        <hr/>
    </list>

)
}