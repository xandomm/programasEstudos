import React from 'react'


export default props => {
    return(
        <section className='content-header'>
            <h1>{props.title}<small>{props.small}</small></h1>
        </section>
    )
}