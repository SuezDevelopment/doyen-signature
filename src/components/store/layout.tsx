import React from 'react';
interface Props {
    children: React.ReactNode;
}
const StoreLayout = (props: Props) =>{
    return (
        <div>
            {props.children}
        </div>
    );
};

export default StoreLayout