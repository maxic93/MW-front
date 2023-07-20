import React, { createContext, useState } from 'react';
import { monstruos } from '../../DATA/dataMW';

// Creamos el contexto
const MonstruosContext = createContext();

const MonstruosProvider = ({ children }) => {
  const [dataMonstruos, setDataMonstruos] = useState(monstruos);
  

  // Método para filtrar los datos según el tipo
  const filterDataByElement = (tipo) => {
    const filtered = data.filter(item => item.tipo === tipo);
    setDataMonstruos(filtered);
  };

  return ( 
    <MonstruosContext.Provider value={{dataMonstruos,  filterDataByElement}}>
      {children}
      </MonstruosContext.Provider>
  )

};

export { MonstruosContext, MonstruosProvider };
