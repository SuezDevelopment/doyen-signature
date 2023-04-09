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
