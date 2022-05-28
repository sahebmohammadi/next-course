import axios from "axios";

const ProductList = ({ products }) => {
  return (
    <div>
      <h1>Product List page</h1>
      {products.map((p) => {
        return (
          <h2 key={p.id}>
            title : {p.title} - price : {p.price}
          </h2>
        );
      })}
    </div>
  );
};

export default ProductList;

export async function getStaticProps() {
  const { data } = await axios.get("http://localhost:4000/products");

  console.log(`generating the /products page`);

  return {
    props: {
      products: data,
    },
    revalidate: 30,
  };
}

// invalidate => 10 + new req comes in => * => new genrate ! ok
