import React from 'react';
import classNames from 'classnames';
import Tab from '../tab';
import './styles.css';

interface TabListProps {
    tabs: Tab[];
    toggleTabs: (code: string | number) => void;
    activeCode: string | number;
    extraClassNames?: string;
}

const TabsList: React.FC<TabListProps> = ({
    tabs,
    toggleTabs,
    activeCode,
    extraClassNames
}) => {
    const listClass = classNames({
        'tabs-list': true
    }, extraClassNames);
    const itemClass = classNames({
        'tabs-list__item': true
    });

    const items = tabs.map((tab) => (
        <li key={tab.code} className={itemClass}>
            <Tab tab={tab} isActive={activeCode === tab.code} toggleTabs={toggleTabs} />
        </li>
    ));

    return <ul className={listClass}>{ items }</ul>;
};

export default TabsList;