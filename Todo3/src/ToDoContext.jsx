import { createContext,useState }from 'react';
export const ToDoContext=createContext();
export const ToDoProvider=({Children})=>{
    const [count, setCount] = useState(0);
    const [list,setList]=useState(["ab","ac"]);
    const HandleClick=()=>{
        setList([...list,count])
          }
          const onDel=(index)=>{
            const tempList=[...list];
            tempList.splice(index,1);
            setList(tempList)
          }      
  return (
   <ToDoContext.Provider value={{list,count,HandleClick,onDel}}>
    {Children}
   </ToDoContext.Provider>
  )
}
export default ToDoContext
