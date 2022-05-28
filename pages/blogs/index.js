import axios from "axios";

const BlogList = ({ blogs }) => {
  return (
    <div>
      <h1>Blog List page</h1>
      <div>
        {blogs.map((blog) => {
          return (
            <h2 key={blog.id}>
              title : {blog.title} - category: {blog.category}
            </h2>
          );
        })}
      </div>
    </div>
  );
};

export default BlogList;

export async function getServerSideProps(context) {
  const { data } = await axios.get("http://localhost:4000/blogs");

  return {
    props: {
      blogs: data,
    },
  };
}
