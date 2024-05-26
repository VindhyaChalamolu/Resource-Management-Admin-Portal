import React from 'react';

const Card = ({data}) => {
    return <div className='card'>
        <div className='icon'>
            <img src={data.icon_url} alt="icon" />
            <div>
                <p style={{margin: "0px"}}>{data.title}</p>
                <span className='font'>{data.category}</span>
            </div>
        </div>
        <a className='font' href={data.link}>{data.link}</a>
        <p className='font'>{data.description}</p>
    </div>;
}

export default Card;