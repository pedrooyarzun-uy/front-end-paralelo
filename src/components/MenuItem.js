import React from 'react';
import { Link } from './Link';

export const MenuItem = (props) => {
    return (
        <Link className="item" href={props.link}>{props.text}</Link>
    )
}
