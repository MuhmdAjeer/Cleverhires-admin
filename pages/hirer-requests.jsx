import Navbar from '../components/sidebar/Navbar/Navbar'
import Sidebar from '../components/sidebar/Sidebar'
import HirerRequests from '../components/sidebar/HirerRequests'
import styles from '../styles/Home.module.css'

export default function Home() {
  
  return (
    <>
    <div className={styles.home} >
      <Sidebar active='jobs' />
      <div className={styles.home_container}>
      <Navbar/>
      <HirerRequests/>
      </div>
    </div>
    </>
  )
};


