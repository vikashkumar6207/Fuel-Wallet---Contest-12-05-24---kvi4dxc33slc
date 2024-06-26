import React from "react";

function Users({ users, dispatch, setBalance, balance }) {
    function handleFuel() {
        dispatch({ type: "fuel", setBalance, balance });
    }
    return (
        <div>
            <button onClick={() => handleFuel()} id="fill-fuel">
                Fill Fuel
            </button>
            {users.map((user) => {
                return (
                    <div key={user.id} className="user">
                        {user.name}
                    </div>
                );
            })}
        </div>
    );
}

export default Users;
