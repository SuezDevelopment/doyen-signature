import React from 'react';
import { useLockedBody } from '.../hooks';
import {WrapperLayout} from './styles';
import {SidebarContext} from './context';
interface Props {
    children: React.ReactNode;
}

export default function AdminLayout(props:Props){
    return (
        <div>
            {props.children}
        </div>
    );
}
