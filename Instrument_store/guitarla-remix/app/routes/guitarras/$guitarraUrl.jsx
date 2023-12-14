import React from 'react'

export async function loader({request, params}){
    console.log(request);
    console.log(params);
    return [{}]
}

function Guitarra() {
    return (
        <div>
            $guitarraUrl
        </div>
    )
}

export default Guitarra
