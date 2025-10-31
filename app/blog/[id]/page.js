import Image from "next/image";
import blogs from "../../../data/blogs";

export default function BlogPage({ params }) {
  const blog = blogs.find((b) => b.id === params.id);

  if (!blog) {
    return <div className="p-10 text-center">Blog not found</div>;
  }

  return (
    <div className="px-10 md:px-20 py-20 bg-[#FAF3E0] min-h-screen">
      <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-lg p-8">
        <Image
          src={blog.img}
          alt={blog.title}
          width={800}
          height={400}
          className="rounded-lg mb-6"
        />
        <h1 className="text-4xl font-bold text-[#4b2e2e] mb-2">{blog.title}</h1>
        <p className="text-gray-600 mb-6">{blog.date}</p>
        <div className="text-lg text-gray-800 leading-relaxed whitespace-pre-line">
          {blog.content}
        </div>
      </div>
    </div>
  );
}
