import axios from "axios";

const BlogList = ({ blogs, category }) => {
  return (
    <div>
      <h1>Blogs for category: {category}</h1>
      <div>
        {blogs.map((blog) => {
          return (
            <div key={blog.id}>
              <h2>title : {blog.title}</h2>
              <p>{blog.description}</p>
              <hr />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default BlogList;

export async function getServerSideProps(context) {
  const { params, query } = context; // req,res, query

  // console.log({ query });

  const { category } = params;
  const { data } = await axios.get(`http://localhost:4000/blogs?category=${category}`);

  // console.log(`genrating category page`);

  return {
    props: {
      category,
      blogs: data,
    },
  };
}
