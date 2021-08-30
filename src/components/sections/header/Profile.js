//author: @David
// In here, we pass in the user object with some defaults
// notice we wil pass this from the call in Header
// understand what's being called here ....
// this is another way we can do this:
// const Profile = (props) => {}
const Profile = ({
  user = {
    email: "guest@email.com",
    firstName: "Anonymous",
    username: "anon"
  }
}) => {
  return (
    // we're using ther prop, default we passed in...
    <p>Hi, {user.firstName}</p>
  );
};

export default Profile;
