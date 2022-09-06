const Warning = (props) => {
    return <span className='pb-section-info-warning'>
        <i className="dashicons dashicons-info-outline" />
        {props.title}
    </span>
}

export default Warning