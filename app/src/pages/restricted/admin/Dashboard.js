import React, { useState, useEffect } from 'react';
import { DataGrid } from '@material-ui/data-grid';
import { Link } from 'react-router-dom';
import Axios from "axios";
import UpdateForm from "./UpdateForm/UpdateForm";
const columns = [
  { field: 'id', headerName: 'ID', width: 70 },
  { field: 'email', headerName: 'E-Mail', width: 200 },
  { field: 'prenom', headerName: 'Prénom', width: 130 },
  { field: 'nom', headerName: 'Nom', width: 130 },
  { field: 'date_naissance', headerName: 'Date de naissance', type: 'date', width: 200 },
  { field: 'telephone', headerName: 'Age', type: 'number', width: 130 },
  { field: 'adresse', headerName: 'Adresse', width: 130 },
  { field: 'code_postal', headerName: 'Code Postal', type: 'number', width: 130 },
  { field: 'ville', headerName: 'Ville', width: 130 },
  { field: 'pays', headerName: 'Pays', width: 130 },
  { field: 'inscrit', headerName: 'Inscrit',  type: 'number', width: 130 },
  { field: 'admin', headerName: 'Admin',  type: 'number', width: 130 },
];

const Dashboard = (props) => {
  const [selectionModel, setSelectionModel] = useState();
  Axios.defaults.withCredentials = true;
  const [clients, setClients] = useState([]);
  const [client, setClient] = useState();
  const [url, setUrl] = useState(
    'http://localhost:5000/clients',
  );
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  
  const fetchClients = async () => {
    setIsError(false);
    setIsLoading(true);

    try {
      const result = await Axios(url);
      setClients(result.data);
      console.log(clients);
    } catch (error) {
      setIsError(true);
    }

    setIsLoading(false);
  };
  const fetchClient = async () => {
    if (selectionModel) {
      try {
        const result = await Axios(`${url}/${selectionModel}`);
        console.log(result);
        setClient(result.data);
      } catch (error) {
        setIsError(true);
      }
    }else{
      console.log(selectionModel);
      setClient("pas de client selectionné")
    }
  };
  useEffect(() => {
    fetchClients();
  }, [url]);
  return (
    <div>

        {isError && <div>Something went wrong ...</div>}
 
        {isLoading ? (
          <div>Loading ...</div>
        ) : (
          <div style={{ height: 400, width: '100%' }}>
              <DataGrid 
                rows={clients}
                columns={columns}
                pageSize={25}
                hideFooterPagination
                onSelectionModelChange={(newSelection) => {
                  setSelectionModel(newSelection.selectionModel);
                }}
                selectionModel={selectionModel}
              />
          </div>
        )}
        {
          selectionModel&&
          <div>
            <button onClick={fetchClient}>Modifier le client {selectionModel}</button>
          </div>
        }
        {
          client &&
          <UpdateForm client={client}/>
        }
        
    </div>
  )
};

export default Dashboard;