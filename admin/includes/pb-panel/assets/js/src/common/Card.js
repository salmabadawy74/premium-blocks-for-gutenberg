const Card = (props) => {
    return <div id={props.id} className='pb-card'>
        <div className='card-body'>
            {props.children}
        </div>
    </div>
}

export default Card