import React from 'react';
import { ViewPart } from './ViewPart';
import { useGlobal } from './store';

export const ViewPartB = () => {
    const [[x], { incrB }] = useGlobal(['b']);
    return <ViewPart state={x} onClick={incrB} />;
}


