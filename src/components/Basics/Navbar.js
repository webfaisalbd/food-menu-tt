import React from 'react'

const Navbar = ({ filterItem, menuList }) => {
    return (
        <>
            <nav className="navbar">
                <div className="btn-group">

                    {
                        menuList.map((curEle, i) => {
                            return (
                                <button key={i} className="btn-group__item" onClick={() => filterItem(curEle)}>{curEle}</button>
                            )
                        })
                    }

                </div>
            </nav>
        </>
    )
}

export default Navbar