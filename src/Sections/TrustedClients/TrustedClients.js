import React from 'react'
import TrustedClientCard from '../../Components/TrustedClientCard/TrustedClientCard'
import avatar1 from '../../Images/avatar1.jpg'
import avatar2 from '../../Images/avatar2.jpg'
import avatar3 from '../../Images/avatar3.jpg'
function HappyClients() {
    return (
        <div className="trusted-clients">
            <header className="trusted-clients__header">Trusted by clients</header>

            <div className="row">
                <TrustedClientCard occupation={"Designer"} name={"Perrin"} avatar={avatar1}/>
                <TrustedClientCard occupation={"React Developer"} name={"Emmanuel"} avatar={avatar2}/>
                <TrustedClientCard occupation={"Software Engineer"} name={"Joseph"} avatar={avatar3}/>
            </div>
        </div>  
    )
}

export default HappyClients
