import { DataGrid } from '@mui/x-data-grid';
import { Box } from '@mui/system';
import { useJobs, useJobVisibility } from '../../../hooks/jobs';


const UserTable = () => {
  const {data:jobs,isLoading,status} = useJobs()
  const {mutate:changeVisibility} = useJobVisibility()


  const columns = [
    {
      field: 'index',
      headerName: 'Id',
      width: 50,
    },
    {
      field: 'jobRole',
      headerName: 'Job Role',
      width: 200,
    },
    {
      field : 'hirer',
      headerName : 'Hirer',
      width : 150
    },
    {
      field: 'location',
      headerName: 'Location',
      width: 150,
    },
    {
      field: 'workplace',
      headerName: 'Workplace',
      width: 150
    },
    {
      field : 'employmentType',
      headerName : 'Type',
      width : 100
    },
    {
      field : 'vaccancies',
      headerName : 'Vacancies',
      width : 100
    },
    {
      field : 'applicationCount',
      headerName : 'Applies',
      width : 100
    },
    {
      field : 'Options',
      headerName : 'Visibility',
      width : 100,
      renderCell : ({row})=>(
        <button onClick={()=>changeVisibility(row.id)} className={row.hidden ? 'block_btn' : 'unblock_btn'} >
          {row.hidden ? 'display' : 'hide'}
        </button>
      )
    },
  
  ];
  const row = jobs?.data.map((job,index)=>{
    return{
      id : job._id,
      index : index+1,
      ...job,
      applicationCount : job.applications.length,
      hirer : job.hirer.username,
    }
  })
  return (
    <div style={{ margin: '25px' }} >
      <Box boxShadow={5} borderRadius={20} sx={{ height: 400, width: '100%' }}>
        {console.log(jobs)}

        {
          status === 'success' && 

                  <DataGrid
                    loading={isLoading}
                    autoHeight
                    style={{width:'auto'}}
                    sx={{ textAlign:'center',borderRadius: '15px', boxShadow: '5px 5px 5px #fafafa' ,padding:'10px'}}
                    rows={row}
                    columns={columns}
                    disableSelectionOnClick
                    experimentalFeatures={{ newEditingApi: true }}
                  />
        }
      </Box>
    </div>
  )
}

export default UserTable