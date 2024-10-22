import React from 'react'
import styled from 'styled-components'

function Button({name, icon, onClick, bg, bPad, color, bRad}) {
    return (
        <ButtonStyled style={{
            background: bg,
            padding: bPad,
            borderRadius: bRad,
            color: color,
        }} onClick={onClick}>
            {icon}
            {name}
        </ButtonStyled>
    )
}

const ButtonStyled = styled.button`
    outline: none;
    border: none;
    font-family: inherit;
    font-size: inherit;
    display: flex;
    align-items: center;
    gap: .5rem;
    cursor: pointer;
    transition: all .4s ease-in-out;
`;


export default Button

/*import React from 'react';

function Button({ name, icon, onClick, bg, bPad, color, bRad }) {
    const buttonStyle = {
        background: bg,
        padding: bPad,
        borderRadius: bRad,
        color: color,
        outline: 'none',
        border: 'none',
        fontFamily: 'inherit',
        fontSize: 'inherit',
        display: 'flex',
        alignItems: 'center',
        gap: '0.5rem',
        cursor: 'pointer',
        transition: 'all 0.4s ease-in-out'
    };

    return (
        <button style={buttonStyle} onClick={onClick}>
            {icon}
            {name}
        </button>
    );
}

export default Button;
 */