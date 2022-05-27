import axios from "axios";
import User from "../../components/User";

const UsersList = ({ usersList }) => {
  return (
    <div>
      <h1>UsersList page</h1>
      {usersList.results.map((user) => {
        return <User user={user} key={user.id} />;
      })}
    </div>
  );
};

export default UsersList;

export async function getStaticProps() {
  const { data } = await axios.get("https://rickandmortyapi.com/api/character");
  return {
    props: {
      usersList: data,
    },
  };
}
