import { DataGrid } from '@mui/x-data-grid';
import { Box } from '@mui/system';
import {useRouter} from 'next/router'
import { useRestrict, useUsers } from '../../../hooks/user';


const UserTable = () => {
  const {mutate:restrict} = useRestrict()
  const {data:users,isLoading,status} = useUsers()


  const columns = [
    {
      field: 'index',
      headerName: 'Id',
      width: 50,
    },
    {
      field: 'firstName',
      headerName: 'First name',
      width: 250,
    },
    {
      field: 'lastName',
      headerName: 'Last name',
      width: 250,
    },
    {
      field: 'username',
      headerName: 'Username name',
      sortable: false,
      width: 250
    },
    {
      field : 'email',
      headerName : 'Email',
      width : 250
    },
    {
      field : 'phone',
      headerName : 'Phone',
      width : 250
    },
    {
      field: 'Options',
      headerName: 'Options',
      width: 260,
      renderCell: ({row}) => (
        row.blocked ? 
        <button className='block_btn' onClick={()=>restrict(row.id)} >Unblock</button>
        :
        <button className='unblock_btn' onClick={()=> restrict(row.id)}>Block</button>
      )
    },
  
  ];
  const router = useRouter()
  const row = users?.data.map((user,index)=>{
    return{
      id : user._id,
      index : index+1,
      ...user
      
    }
  })
  return (
    <div style={{ margin: '25px' }} >
      <Box boxShadow={5} borderRadius={20} sx={{ height: 400, width: '100%' }}>

        {
          status === 'success' && 
          
                  <DataGrid
                    loading={isLoading}
                    autoHeight
                    style={{width:'auto'}}
                    sx={{ textAlign:'center',borderRadius: '15px', boxShadow: '5px 5px 5px #fafafa' ,padding:'10px'}}
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