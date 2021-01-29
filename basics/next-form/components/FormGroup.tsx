import { ReactNode } from "react"

interface Props {
    children?: ReactNode
}

function FormGroup(props: Props) {
    
    return (
        <div className='grid gap-2 grid-col-1'>
            {props.children}
        </div>
    )
}

export default FormGroup