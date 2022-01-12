import React, { useEffect, useState } from 'react'
import { Paper } from '@material-ui/core';
import '../../styles/CustomTabs.scss'

const CustomTabs = ({ tabs, hide, vertical, label, small, reloadConsistency, defaultTab }) => {
    const [value, setValue] = useState(0);
    if (!hide) hide = []

    if (window.innerWidth < 600) {
        vertical = false;
    }

    useEffect(() => {
        if (!reloadConsistency) return
        let hash = window.location.hash;
        let defaultTab = parseInt(hash.split('#')[1]);
        let totalTabs = tabs && tabs.length;
        if (totalTabs < (defaultTab + 1)) {
            setValue(0);
            return
        }
        defaultTab && setValue(defaultTab);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    useEffect(() => {
        if (!reloadConsistency) return
        window.location.hash = `#${value}`
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [value])

    useEffect(() => {
        if (defaultTab) {
            setValue(defaultTab)
        }
    }, [defaultTab])

    return (
        <div className={`noselect ${vertical ? 'vertical-customTabs' : 'customTabs'} ${small && 'small'}`}>
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
                        {tab.IconActive && <div className="iconContainer">
                            {(value === index ? <tab.IconActive className='icon' /> : <tab.IconInactive className='icon' />)}
                        </div>}
                        <p className={`${tab.IconActive ? 'tabItem_Iconlabel' : 'tabItem_label'}`}>{tab.label}</p>
                    </div>
                )}
            </Paper>
            <div className="tabData">
                {vertical &&
                    <Paper elevation={0} className="tabData__header">
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

export default CustomTabs
