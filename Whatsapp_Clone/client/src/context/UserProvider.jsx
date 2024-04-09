import React, { createContext, useState } from 'react';

export const UserContext = createContext();

const UserProvider = ({ children }) => {
    const [person, setPerson] = useState(null); // Initialize with null or an empty object

    return (
        <UserContext.Provider value={{ person, setPerson }}>
            {children}
        </UserContext.Provider>
    );
};

export default UserProvider;
