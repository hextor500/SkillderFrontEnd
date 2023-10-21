import { useState } from "react";

const ButtonComponent = ({comportamiento}) => {

    const [contador, setContador] = useState(0);

    

  return (
    <>
        <button onClick={comportamiento}>Click</button>

        <p>Contador: {contador}</p>
    </> 
  )
}

export default ButtonComponent
