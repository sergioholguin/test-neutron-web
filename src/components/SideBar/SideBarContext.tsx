import {createContext, useState} from 'react';

type TypeSideBarContext = {
    sideBar: boolean;
    showSideBar: () => void;
}

const defaultValue = {
    sideBar: false,
}

export const SideBarContext = createContext<TypeSideBarContext >(defaultValue as TypeSideBarContext)

export function SideBarContextProvider(props: any) {
    const [sideBar, setSideBar] = useState(false);

    const showSideBar = () => {
        setSideBar(!sideBar)
    };

    return (
        <SideBarContext.Provider value={{sideBar, showSideBar}}>
            {props.children}
        </SideBarContext.Provider>
    )
}