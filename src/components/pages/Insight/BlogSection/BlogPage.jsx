import { useState } from "react";
// import { useNavigate } from "react-router-dom";
import BlogHero from "./sections/BlogHero";
import BlogIndustryShowcase from "./sections/BlogIndustryShowcase";
import Featured from "../Featured";
import BlogFilter from "./sections/BlogFilter";
import BlogGrid from "./sections/BlogGrid";
import ExpertiseSection from "../ExpertiseSection";

const BlogPage = () => {
    // const [posts, setPosts] = useState([]);
    // const [loading, setLoading] = useState(true);
    // const navigate = useNavigate();

    // useEffect(() => {
    //     fetch("http://backend.local/wp-json/wp/v2/posts?_embed&per_page=10")
    //         .then((res) => res.json())
    //         .then((data) => {
    //             setPosts(
    //                 Array.isArray(data) && data.length ? data : dummyPosts
    //             );
    //             setLoading(false);
    //         })
    //         .catch(() => {
    //             setPosts(dummyPosts);
    //             setLoading(false);
    //         });
    // }, []);

    const [filters, setFilters] = useState({
        industry: "All Industries",
        solution: "All Solutions",
        search: "",
    });

    return (
        <>
            <BlogHero />
            <BlogFilter onFilterChange={setFilters} />
            <Featured />
            <BlogIndustryShowcase />
            <BlogGrid filters={filters} />
            <ExpertiseSection />
        </>
    );
};
export default BlogPage;
