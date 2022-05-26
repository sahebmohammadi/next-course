import { useRouter } from "next/router";

const Review = () => {
  const router = useRouter();
  const { reviewId, postId } = router.query;
  console.log(router.query);
  return (
    <h1>
      Review {reviewId} for post {postId}
    </h1>
  );
};

export default Review;
