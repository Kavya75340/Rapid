import { useEffect, useState } from "react";

const Blogs = () => {
    const [blogs, setBlogs] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch("/wp/wp-json/wp/v2/posts?_embed")
            .then((res) => {
                if (!res.ok) {
                    throw new Error("HTTP error " + res.status);
                }
                return res.json();
            })
            .then((data) => {
                setBlogs(data);
                setLoading(false);
            })
            .catch((err) => {
                console.error("API Error:", err);
                setLoading(false);
            });
    }, []);

    if (loading) return <p>Loading blogs...</p>;

    return (
        <div>
            <h1>Blogs</h1>

            {blogs.map((blog) => (
                <div key={blog.id}>
                    {/* Title */}
                    <h2>{blog.title.rendered}</h2>

                    {/* Featured Image */}
                    {blog._embedded?.["wp:featuredmedia"] && (
                        <img
                            src={
                                blog._embedded["wp:featuredmedia"][0].source_url
                            }
                            alt={blog.title.rendered}
                            width="300"
                        />
                    )}

                    {/* Content */}
                    <div
                        dangerouslySetInnerHTML={{
                            __html: blog.content.rendered,
                        }}
                    />
                </div>
            ))}
        </div>
    );
};

export default Blogs;
