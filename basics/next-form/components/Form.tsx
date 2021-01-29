import { FormEvent, ReactNode } from "react"

interface Props {
    children?: ReactNode
    onSubmit: (e: FormEvent<HTMLFormElement>) => void
}

function Form(props: Props) {
    
    return (
        <form className='grid gap-4 grid-col-1' onSubmit={props.onSubmit}>
            {props.children}
        </form>
    )
}

export default Form