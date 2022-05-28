import axios from "axios";
import { useRouter } from "next/router";

const Product = ({ product }) => {
  const router = useRouter();

  if (router.isFallback) {
    return <div>Loading</div>;
  }

  return (
    <div>
      <h1>Product detail page</h1>
      <h2>
        title : {product.title} - price : {product.price}
      </h2>
      <p>{product.description}</p>
    </div>
  );
};

export default Product;

export async function getStaticPaths() {
  return {
    paths: [
      {
        params: { productId: "1" },
      },
    ],
    fallback: true,
  };
}

export async function getStaticProps({ params }) {
  const { data } = await axios.get(`http://localhost:4000/products/${params.productId}`);

  console.log(`generating the /product/${params.productId} page`);

  return {
    props: {
      product: data,
    },
    revalidate: 30,
  };
}
