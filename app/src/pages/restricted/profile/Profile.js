import React from 'react'

function Profile(props) {
    return (
        <div>
            {`Bonjour ${props.client.prenom} !`}
        </div>
    )
}

export default Profile
