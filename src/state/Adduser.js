import React,{useSelector} from 'react-redux'

const Adduser = () => {
    const name = useSelector((state) =>state.venkat.users)
    return (
        <div>
            {
                name.map(cars => 
                    <li key={cars}>{cars}</li>
                )
            }
        </div>
    )
}

export default Adduser


