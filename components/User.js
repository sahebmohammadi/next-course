const User = ({ user }) => {
  return (
    <div>
      Name : {user.name} - Status :{user.status}
    </div>
  );
};

export default User;
