import React from 'react'

export const Menu = ({title, children}) => {
    return (
        <div className="item">
            <div className="header">{title}</div>
            <div className="menu">
                {children}
            </div>
        </div>
    );
};
