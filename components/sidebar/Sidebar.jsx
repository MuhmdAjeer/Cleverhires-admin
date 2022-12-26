import styles from "./Sidebar.module.scss";
import DashboardIcon from "@mui/icons-material/Dashboard";
import {Work,AdminPanelSettings} from '@mui/icons-material'
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import SettingsApplicationsIcon from "@mui/icons-material/SettingsApplications";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";

import Link from "next/link";
import { useRouter } from "next/router";
import Cookies from "js-cookie";

const Sidebar = ({active}) => {
  const router = useRouter()
  const logout = ()=>{
    Cookies.remove('token')
    router.push('/login')
  }
  return (
    <div className={styles.sidebar}>
      <div className={styles.top}>

          <span className={styles.logo}>CleverHires</span>

      </div>
      <hr />
      <div className={styles.center}>
        <ul>
          <p className={styles.title}>MAIN</p>
          <li>
            <DashboardIcon className={styles.icon} />
            <span>Dashboard</span>
          </li>

          <Link href='/users' >
            <li>
              <PersonOutlineIcon className={styles.icon} />
              <span>Users</span>
            </li>
          </Link>

          <Link href='/jobs' >
            <li>
              <Work className={styles.icon} />
              <span>Jobs</span>
            </li>
          </Link>
          <Link href='/hirer-requests' >
          <li>
            <AdminPanelSettings className={styles.icon} />
            <span>Hirer Requests</span>
          </li>
          </Link>

          <li>
            <NotificationsNoneIcon className={styles.icon} />
            <span>Notifications</span>
          </li>

          <li>
            <SettingsApplicationsIcon className={styles.icon} />
            <span>Settings</span>
          </li>

          <li>
            <AccountCircleOutlinedIcon className={styles.icon} />
            <span>Profile</span>
          </li>
          <li onClick={logout} >
            <ExitToAppIcon className={styles.icon} />
            <span>Logout</span>
          </li>
        </ul>
      </div>

    </div>
  );
};

export default Sidebar;