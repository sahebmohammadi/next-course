import { useRouter } from "next/router";

const Blog = () => {
  const router = useRouter();
  const { params } = router.query;
  console.log(params);

  return <h1>catch all routes page {JSON.stringify(params)}</h1>;
};

export default Blog;

// post : => 1,2,3,4 => dynamic routes
// nested dynamic routes => posrs/1/review/1

//? blogs/2020/1/a
//* blog/a/b/c

// blog : 2000 -2020 => year : 20 * day : 10 =>  200
// year => [dayId].js => 1 * 10
//          [dayId] * [year]  ==> [a] * [b] * [c] = 1
