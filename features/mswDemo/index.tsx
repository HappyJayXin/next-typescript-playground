import useFetch from '../../hooks/useFetch';

const mswDemo = () => {
  const { data: book, loading: isBookLoading } = useFetch(
    'https://example/book'
  );
  const { data: reviews, loading: isReviewsLoading } = useFetch('/reviews');

  if (isBookLoading || isReviewsLoading) return <div>Loading...</div>;

  return (
    <div>
      {book
        ? `Book Title: ${book.title}, Book Description: ${book.description}`
        : null}
      <hr />
      {reviews && reviews.length > 0
        ? reviews.map((review) => `Name: ${review.author}`)
        : null}
    </div>
  );
};

export default mswDemo;
