import { Paper } from '@material-ui/core';
import React, { useEffect, useState } from 'react'
import './BottomTabs.scss'

const BottomTabs = ({ tabs, hide, vertical, label }) => {
    const [value, setValue] = useState(0);
    if (!hide) hide = []

    // useEffect(() => {
    //     let hash = window.location.hash;
    //     let defaultTab = parseInt(hash.split('#')[1]);
    //     let totalTabs = tabs && tabs.length;
    //     if (totalTabs < (defaultTab + 1)) {
    //         setValue(0);
    //         return
    //     }
    //     defaultTab && setValue(defaultTab);
    // }, [])

    // useEffect(() => {
    //     window.location.hash = `#${value}`
    // }, [value])

    return (
        <div className={`noselect bottomTabs`}>
            <Paper elevation={5} className="tabs">
                {(vertical && label) && <div
                    className={`tabItem tabItem_header`}
                >
                    <p>{label}</p>
                </div>}
                {tabs.map((tab, index) =>
                    !hide.includes(tab.label) &&
                    <div
                        key={index}
                        className={`tabItem ${value === index ? 'active' : ''}`}
                        index={index}
                        onClick={() => setValue(index)}
                    >
                        <div className="iconContainer">
                            {tab.IconActive && (value === index ? <tab.IconActive className='icon' /> : <tab.IconInactive className='icon' />)}
                        </div>
                        <p>{tab.label}</p>
                    </div>
                )}
            </Paper>
            <div className="tabData">
                {vertical && <Paper elevation={0} className="tabData__header">
                    <p>{tabs[value].label}</p>
                </Paper>}
                <div className="tabData__space"></div>
                {tabs.map((tab, index) =>
                    value === index && <div key={index} value={value} index={index}>
                        {tab.component}
                    </div>
                )}
            </div>
        </div>
    )
}

export default BottomTabs
