import { Fragment, ReactNode } from "react";

interface Props {
    children?: ReactNode
    type: "button" | "submit" | "reset" | undefined
}

function Button(props: Props) {
    
    return (
        <Fragment>
            <button className='py-2 mt-4 text-xl text-white bg-green-700 rounded' type={props.type}>
                {props.children}
            </button>
        </Fragment>
    )
}

export default Button