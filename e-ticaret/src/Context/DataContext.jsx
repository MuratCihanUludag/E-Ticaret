import { createContext,useState } from "react";

const DataContext = createContext();

export const DataProvider =({children})=>{
    const [settings,setSetings] = useState({
        toggle:false
    })
    const values ={
        settings,
        setSetings
    }
    return <DataContext.Provider value={values} >{children}</DataContext.Provider> 
}
export default DataContext