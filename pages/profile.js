import axios from "axios";
import { useEffect, useReducer, useState } from "react";

const Profile = () => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState(null);

  useEffect(() => {
    axios
      .get(" http://localhost:4000/profile")
      .then((res) => {
        setLoading(false);
        setData(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  if (loading) return <h2>loading...</h2>;

  return (
    <div>
      <h1>Profile page</h1>
      <h2>
        name : {data.name} - transactions : {data.transactions} - balaance: {data.balance}
      </h2>
    </div>
  );
};

export default Profile;
