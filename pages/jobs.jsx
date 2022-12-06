import Navbar from '../components/sidebar/Navbar/Navbar'
import Sidebar from '../components/sidebar/Sidebar'
import JobsTable from '../components/sidebar/jobs/JobsTable'
import styles from '../styles/Home.module.css'

export default function Home() {
  
  return (
    <>
    <div className={styles.home} >
      <Sidebar active='jobs' />
      <div className={styles.home_container}>
      <Navbar/>
      <JobsTable/>
      </div>
    </div>
    </>
  )
};


