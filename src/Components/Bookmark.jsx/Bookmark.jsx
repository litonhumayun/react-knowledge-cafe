const Bookmark = ({ bookmark }) => {
  const { post_name } = bookmark;
  return (
    <div className="m-4 p-4 rounded bg-gray-100 shadow-md">
      <h3 className="text-xl">{post_name}</h3>
    </div>
  );
};

export default Bookmark;
