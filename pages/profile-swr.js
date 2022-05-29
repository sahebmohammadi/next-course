import axios from "axios";
import useSWR from "swr";

async function fetcher() {
  const { data } = await axios.get("http://localhost:4000/profile");
  return data;
}

const ProfileSWR = () => {
  const { data, error } = useSWR("getUserData", fetcher);

  if (error) return <div>failed to load</div>;
  if (!data) return <div>loading...</div>;

  return (
    <div>
      <h1>Profile SWR Page</h1>
      <h2>
        name : {data.name} - transactions : {data.transactions} - balaance: {data.balance}
      </h2>
    </div>
  );
};

export default ProfileSWR;
