import styles from "./Sidebar.module.scss";
import DashboardIcon from "@mui/icons-material/Dashboard";
import {Work,AdminPanelSettings} from '@mui/icons-material'
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import SettingsApplicationsIcon from "@mui/icons-material/SettingsApplications";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";

import Link from "next/link";
// import { DarkModeContext } from "../../context/darkModeContext";
// import { useContext } from "react";

const Sidebar = ({active}) => {
  // const { dispatch } = useContext(DarkModeContext);
  return (
    <div className={styles.sidebar}>
      <div className={styles.top}>
        {/* <Link to="/" style={{ textDecoration: "none" }}> */}
          <span className={styles.logo}>CleverHires</span>
        {/* </Link> */}
      </div>
      <hr />
      <div className={styles.center}>
        <ul>
          <p className={styles.title}>MAIN</p>
          <li>
            <DashboardIcon className={styles.icon} />
            <span>Dashboard</span>
          </li>
          {/* <p className="title">LISTS</p> */}
          {/* <Link to="/users" style={{ textDecoration: "none" }}> */}
          <Link href='/users' >
            <li>
              <PersonOutlineIcon className={styles.icon} />
              <span>Users</span>
            </li>
          </Link>
          {/* </Link> */}
          {/* <Link to="/products" style={{ textDecoration: "none" }}> */}
          <Link href='/jobs' >
            <li>
              <Work className={styles.icon} />
              <span>Jobs</span>
            </li>
          </Link>
          {/* </Link> */}
          <li>
            <AdminPanelSettings className={styles.icon} />
            <span>Hirer Requests</span>
          </li>
          {/* <li>
            <LocalShippingIcon className={styles.icon} />
            <span>Delivery</span>
          </li> */}
          {/* <p className="title">USEFUL</p> */}
          {/* <li>
            <InsertChartIcon className={styles.icon} />
            <span>Stats</span>
          </li> */}
          <li>
            <NotificationsNoneIcon className={styles.icon} />
            <span>Notifications</span>
          </li>
          {/* <p className="title">SERVICE</p> */}
          {/* <li>
            <SettingsSystemDaydreamOutlinedIcon className={styles.icon} />
            <span>System Health</span>
          </li>
          <li>
            <PsychologyOutlinedIcon className={styles.icon} />
            <span>Logs</span>
          </li> */}
          <li>
            <SettingsApplicationsIcon className={styles.icon} />
            <span>Settings</span>
          </li>
          {/* <p className={styles.title}>USER</p> */}
          <li>
            <AccountCircleOutlinedIcon className={styles.icon} />
            <span>Profile</span>
          </li>
          <li>
            <ExitToAppIcon className={styles.icon} />
            <span>Logout</span>
          </li>
        </ul>
      </div>
      {/* <div className={styles.bottom}>
        <div
          className={styles.colorOption}
          onClick={() => dispatch({ type: "LIGHT" })}
        ></div>
        <div
          className={styles.colorOption}
          onClick={() => dispatch({ type: "DARK" })}
        ></div>
      </div> */}
    </div>
  );
};

export default Sidebar;