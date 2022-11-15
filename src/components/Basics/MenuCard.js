import React from 'react'

const MenuCard = ({ menuData }) => {
    // console.log(menuData);
    return (
        <>
            <section className="main-card--cointainer">
                {menuData.map((curEle) => {

                    const {id,name,category,image,description} = curEle;

                    return (
                        <div className="card-container" key={id}>
                            <div className="card">
                                <div className="card-body">
                                    <span className="card-number card-circle subtle">{id}</span>
                                    <span className='card-author subtle'>{name}</span>
                                    <h2 className="card-title">{name}</h2>
                                    <span className="card-description subtle">{description}</span>
                                    <div className="card-read">Read</div>
                                </div>
                                <div className="card-img">
                                    <img src={image} alt="images" className="" />
                                </div>

                                <span className="card-tag subtle">Order Now</span>
                            </div>
                        </div>
                    )
                })}
            </section>

        </>
    )
}

export default MenuCard;