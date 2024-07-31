import './Title.css'

interface ITitleProps {
    title: string
}
export default function Title(props: ITitleProps) {

    return (
        <>
        <h1 className='Title'>
            {props.title}
        </h1>
        <hr />
        </>
    )
}
