import React from 'react'

const Home = ({ accountID }) => {
    return (
        <div className="home">
            {accountID? (
                <h1>Welcome {accountID}</h1>
            ) : (
                <h1>Please login to continue</h1>
            )}
        </div>
    )
}

export default Home
