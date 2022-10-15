import './profile.css';
import Heading from '../NavHeader/heading';
import LoggedOut from './LoggedOutProfile/loggedOutProfile';
function ProfilePage() {
  return (
    <>
      <Heading/>
      <LoggedOut/>
    </>
  );
}

export default ProfilePage;