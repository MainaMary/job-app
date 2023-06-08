import { useState } from "react";

const useVisibleHook = () => {
  const [visible, setVisible] = useState<boolean>(false);
  const handleVisible =(e:any) =>{
    setVisible(prev => !prev)
  }
  return { visible, handleVisible };
};
export default useVisibleHook;
