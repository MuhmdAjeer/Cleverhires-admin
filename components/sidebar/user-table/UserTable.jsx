import { DataGrid } from '@mui/x-data-grid';
import { Box } from '@mui/system';
import { useQuery } from 'react-query';
import axios from 'axios';
import {useRouter} from 'next/router'




const columns = [
  // { field: '_id', headerName: 'ID', width: 90 },
  {
    field: 'firstName',
    headerName: 'First name',
    width: 150,
  },
  {
    field: 'lastName',
    headerName: 'Last name',
    width: 150,
  },
  {
    field: 'username',
    headerName: 'Usename name',
    sortable: false,
    width: 160,
  },
  {
    field: 'Options',
    headerName: 'Options',
    width: 160,
    renderCell: (value) => (
      value.row.blocked ? 
      <button>{value.row.blocked}</button>
      :
      <button>{value.row.blocked}</button>
    )
  },

];


const UserTable = () => {
  const router = useRouter()
  const fetchUsers = async () => {
    const { data } = await axios.get('http://localhost:5000/api/v1/user')
    return data
  }
  const { data, isLoading, isError, refetch ,status} = useQuery('ALL_USERS', fetchUsers)
  const row = data?.map((user)=>{
    return{
      id : user._id,
      firstName : user.firstName,
      lastName : user.lastName,
      username : user.username,
    }
  })
  console.log(data);
  return (
    <div style={{ margin: '25px' }} >
      <button onClick={()=>router.push('/login')} >dd</button>
      <Box boxShadow={5} borderRadius={20} sx={{ height: 400, width: '100%' }}>

        {

          status === 'success' && 
          
                  <DataGrid
                    loading={isLoading}
                    autoHeight
                    style={{width:'auto'}}
                    sx={{ textAlign:'center',borderRadius: '15px', boxShadow: '5px 5px 5px #fafafa' }}
                    rows={row}
                    columns={columns}
                    // pageSize={5}
                    // rowsPerPageOptions={[5]}
                    // checkboxSelection
                    disableSelectionOnClick
                    experimentalFeatures={{ newEditingApi: true }}
                  />
        }
      </Box>
    </div>
  )
}

export default UserTable