import React from 'react';
import { ViewPart } from './ViewPart';
import { useGlobal } from './store';

export const ViewPartA = () => {
    const [[x], { incrA }] = useGlobal(['a']);
    return <ViewPart state={x} onClick={incrA} />
}