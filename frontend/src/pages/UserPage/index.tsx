import ProfileInfo from "../../features/users/components/ProfileInfo";
import styles from "./Profile.module.css";


export default function Profile() {

  return (
    <main className={styles.page}>
         <ProfileInfo />
    </main>
  );
}
