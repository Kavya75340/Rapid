import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

/* 🔹 Dummy Data (Testing ke liye) */
const dummyPosts = [
    {
        id: "d1",
        date: "2024-01-10",
        title: { rendered: "Boost your conversion rate" },
        _embedded: {
            "wp:featuredmedia": [
                {
                    source_url:
                        "https://images.unsplash.com/photo-1587614382346-4ec70e388b28?auto=format&fit=crop&w=1200&q=80",
                },
            ],
        },
    },
    {
        id: "d2",
        date: "2024-01-12",
        title: { rendered: "How to use SEO to drive sales" },
        _embedded: {
            "wp:featuredmedia": [
                {
                    source_url:
                        "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1200&q=80",
                },
            ],
        },
    },
    {
        id: "d3",
        date: "2024-01-15",
        title: { rendered: "Improve your customer experience" },
        _embedded: {
            "wp:featuredmedia": [
                {
                    source_url:
                        "https://images.unsplash.com/photo-1483058712412-4245e9b90334?auto=format&fit=crop&w=1200&q=80",
                },
            ],
        },
    },
    {
        id: "d4",
        date: "2024-01-18",
        title: { rendered: "Modern product design strategies" },
        _embedded: {
            "wp:featuredmedia": [
                {
                    source_url:
                        "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=80",
                },
            ],
        },
    },
];

const Blog = () => {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();

    useEffect(() => {
        fetch("http://backend.local/wp-json/wp/v2/posts?_embed&per_page=10")
            .then((res) => res.json())
            .then((data) => {
                setPosts(
                    Array.isArray(data) && data.length ? data : dummyPosts
                );
                setLoading(false);
            })
            .catch(() => {
                setPosts(dummyPosts);
                setLoading(false);
            });
    }, []);

    if (loading) {
        return (
            <p className="text-center py-20 text-gray-500">Loading blogs...</p>
        );
    }

    return (
        <div className="w-full py-20 px-6 flex justify-center bg-gray-50">
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 max-w-7xl w-full">
                {posts.map((post) => {
                    const image =
                        post._embedded?.["wp:featuredmedia"]?.[0]?.source_url;

                    return (
                        <div
                            key={post.id}
                            onClick={() =>
                                navigate(`/blog/${post.slug || post.id}`, {
                                    state: { post },
                                })
                            }
                            className="relative h-[60vh] rounded-2xl overflow-hidden shadow-lg cursor-pointer group"
                        >
                            {image && (
                                <img
                                    src={image}
                                    alt={post.title.rendered}
                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                />
                            )}

                            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/55 transition-all duration-300" />

                            <div className="absolute bottom-0 p-6 text-white">
                                <p className="text-sm opacity-90 mb-1">
                                    {new Date(post.date).toDateString()}
                                </p>

                                <h2
                                    className="text-xl font-bold leading-snug max-w-xs"
                                    dangerouslySetInnerHTML={{
                                        __html: post.title.rendered,
                                    }}
                                />

                                <span className="block mt-3 text-sm underline opacity-0 group-hover:opacity-100 transition">
                                    Explore →
                                </span>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default Blog;
