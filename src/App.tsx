import './App.css'

import Grid from '@mui/material/Grid2'
import DishTable from './components/DishTable'
import Student from './components/Student'
import React from 'react'

// PENDIENTE: Cree la interfaz
import {type Dish} from './interface/Dish'

function App() {

  let url = "https://raw.githubusercontent.com/aavendan/datos/refs/heads/main/tasteatlas/bestdishes100-2425.json"

  // Variable de estado y la función de modificación.
  const [dishes, setDishes] = React.useState<Dish[]>([]);



  // PENDIENTE: 
  // Realizar una petición asíncrona a la URL. La respuesnta es un JSON. 
  // Al recibir la respuesta, actualice la variable de estado.
  React.useEffect(() => {
    fetch(url)
      .then(response => response.json())
      .then(data => setDishes(data))
      .catch(error => console.error(error));
  }, []);




  return (
    <Grid container spacing={5}>

      {/* Student */}
      <Grid size={{ xs: 12 }}>

        {/* PENDIENTE: Envíe sus datos (apellidos, nombres y paralelo) como props del componente */}
        <Student lastName="Gaona Gallo" firstName="Beker Samuel" parallel="2"></Student>

      </Grid>

      {/* DishTable */}
      <Grid size={{ xs: 12 }}>

        {/* PENDIENTE: Envíe la variable de estado como prop */}
        <DishTable data={dishes}></DishTable>

      </Grid>


    </Grid>
  )
}

export default App
