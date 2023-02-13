export default function Header(props) {
    return (
        <div className="w-full bg-uhigreen-secondary">
            <div className='container mx-auto py-5 flex justify-between items-center'>
                <h1>{props.header}</h1>
            </div>
        </div>
    )
}