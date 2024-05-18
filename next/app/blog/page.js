import Link from "next/link";

const BlogPage = () => {
  return (
    <div>
      <p>
        <Link href="blog/post1">post1</Link>
      </p>
      <p>
        <Link href="blog/post2">post2</Link>
      </p>
    </div>
  );
};

export default BlogPage;
