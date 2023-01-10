import React from 'react';

const Params =(props)=>{
    console.log(props)
    
    return(
        <div>
            <div className='panel panel-success'>
                <div class='panel-heading'>
                    <h2>{props.match.params.topic}Params</h2>
                    </div>
                    <div className='panel-body'>
                        <h3>{props.match.params.topic}Params</h3>
                        <p>{props.match.params.topic}Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                 <h3>Your in page number {props.location.search.split('=')[1]}</h3>
                 </div>
            </div>
        </div>
    )
}
export default Params;