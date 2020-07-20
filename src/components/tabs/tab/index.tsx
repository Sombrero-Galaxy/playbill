import React from 'react';
import classNames from 'classnames';
import './styles.css';

interface Tab {
    code: string | number;
    name: string;
}

interface TabProps {
    tab: Tab;
    toggleTabs: (code: string | number) => void;
    isActive?: boolean;
}

const Tab: React.FC<TabProps> = ({
    tab,
    toggleTabs,
    isActive
}) => {
    const tabClass = classNames({
        'tab': true,
        'tab--active': isActive
    });

    const handleClick = (ev: React.MouseEvent): void => {
        if (isActive) return;
        
        toggleTabs(tab.code);
    };

    return <button className={tabClass} onClick={handleClick}>{tab.name}</button>;
};

export default Tab;