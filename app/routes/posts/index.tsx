import { useLoaderData } from "remix";

export const loader = () => {
  return [
    {
      slug: "my-first-post",
      title: "My First Post",
    },
    {
      slug: "90s-mixtape",
      title: "A Mixtape I Made Just For You",
    },
  ];
};

export default function Posts() {
const posts = useLoaderData();
  return (
    <div>
      <h1>Posts</h1>
      <p>Hey this is a paragraph</p>
    </div>
  );
}
