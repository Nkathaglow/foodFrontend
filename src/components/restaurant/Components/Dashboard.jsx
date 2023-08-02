import React, {useEffect, useState} from "react";
import './dashboard.css'
import NavR from "../../utility/NavR";

export default function Dashboard({user, setUser, setLogin, login}) {
    

    return(
        <div className="eDashboard">
            {/* Header */}
            <NavR/>

            {/* Main */}
            <div id="eDashContent">
                {/* SideBar */}
                <div id="eDashSide">
                    <div className="eDashBest">
                        <div className="eBestHeader">
                            <h3>Best Selling Categories</h3>
                        </div>
                        <div className="eBestRank"></div>
                    </div>
                    <div className="eDashBest">
                        <div className="eBestHeader"></div>
                        <div className="eBestRank"></div>
                    </div>
                </div>

                {/* Graphics */}
                <div id="eDashGraph">
                    <div className="eMainGraph"></div>
                    <div className="eMainGraph"></div>
                </div>
            </div>
        </div>
    )
}