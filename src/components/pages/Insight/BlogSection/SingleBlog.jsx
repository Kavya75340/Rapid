import React, { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";

const SingleBlog = () => {
    const { slug } = useParams();
    const location = useLocation();
    const [post, setPost] = useState(location.state?.post || null);

    useEffect(() => {
        if (!post) {
            fetch(
                `http://backend.local/wp-json/wp/v2/posts?slug=${slug}&_embed`
            )
                .then((res) => res.json())
                .then((data) => setPost(data[0]));
        }
    }, [slug, post]);

    if (!post) {
        return (
            <p className="text-center py-20 text-gray-500">Loading blog...</p>
        );
    }

    const image = post._embedded?.["wp:featuredmedia"]?.[0]?.source_url;

    return (
        <section className="max-w-4xl mx-auto px-6 py-20">
            {image && (
                <img
                    src={image}
                    alt={post.title.rendered}
                    className="w-full h-[420px] object-cover rounded-xl mb-10"
                />
            )}

            <p className="text-sm text-gray-500 mb-3">
                {new Date(post.date).toDateString()}
            </p>

            <h1
                className="text-4xl font-bold mb-8"
                dangerouslySetInnerHTML={{
                    __html: post.title.rendered,
                }}
            />

            <div
                className="prose max-w-none"
                dangerouslySetInnerHTML={{
                    __html: post.content.rendered,
                }}
            />
        </section>
    );
};

export default SingleBlog;
