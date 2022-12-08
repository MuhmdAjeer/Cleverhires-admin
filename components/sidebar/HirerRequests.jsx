import { DataGrid } from '@mui/x-data-grid';
import { Box } from '@mui/system';
import {useRouter} from 'next/router'
import Image from 'next/image';
import { useApproveHirer, useDeclineHirer, useHirerRequests } from '../../hooks/jobs';


const UserTable = () => {
  const {data:requests,isLoading,status} = useHirerRequests()
  const {mutate:approve} = useApproveHirer()
  const {mutate : decline} = useDeclineHirer()


  const columns = [
    {
      field: 'index',
      headerName: 'Id',
      width: 50,
    },
    {
      field : 'profileImage',
      headerName : 'Image',
      renderCell : ({row})=>(
        <Image style={{borderRadius:'50%'}} width={40} height={40} src={row.profileImage} />
      )
    },
    {
      field: 'username',
      headerName: 'Username name',
      sortable: false,
      width: 200
    },
    {
      field : 'company',
      headerName : 'Company',
      width : 200
    },
    {
      field : 'country',
      headerName : 'Country',
      width : 250
    },
    {
      field : 'industry',
      headerName : 'Industry',
      width : 250
    },
    {
      field: 'options',
      headerName: 'Options',
      width: 260,
      renderCell: ({row}) => (
        <>
        <button style={{marginRight:'5px'}} className='block_btn' onClick={()=>approve(row.id)} >Approve</button>
        <button className='unblock_btn' onClick={()=>decline(row.id)} >Deny</button>
        </>
      )
    },
  
  ];
  const router = useRouter()
  const row = requests?.data.map((user,index)=>{
    return{
      id : user._id,
      index : index+1,
      company : user.hiring.company,
      country : user.hiring.country,
      industry : user.hiring.industry,
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