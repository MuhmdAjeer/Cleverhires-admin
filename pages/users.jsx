
import Navbar from '../components/sidebar/Navbar/Navbar'
import Sidebar from '../components/sidebar/Sidebar'
import UserTable from '../components/sidebar/user-table/UserTable'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <>
    <div className={styles.home} >
      <Sidebar active='users' />
      <div className={styles.home_container}>
      <Navbar/>
      <UserTable/>
      </div>
    </div>
    </>
  )
};


