import React from "react";
// import './index.css';
import AnimatedBlogPost from "./AnimatedBlogPost";

function BlogCard({setBlogData}) {
    const [data, setData] = React.useState([]);

    // const [loading, setLoading] = useState(true);
    // const [error, setError] = useState(null);
    React.useEffect(() => {
        // Replace this URL with your desired API endpoint
        const apiUrl = "https://blog-website-tau-roan.vercel.app/api/posts";

        fetch(apiUrl)
            .then((response) => {
                if (!response.ok) {
                    throw new Error("Network response was not ok");
                }
                return response.json();
            })
            .then((data) => {
                setData(data);
                setBlogData(data)
                // setLoading(false);
                // console.log(data[0]._id)

            })
            .catch((error) => {
                console.log(error);
                // setError(error);
                // setLoading(false);
            });
    }, []); // The empty array means this useEffect will run once when the component mounts

    // if (loading) return <p>Loading...</p>;
    // if (error) return <p>Error: {error.message}</p>;
    return (
        <div className=" bg-gray-100">
            <div className="min-h-screen bg-gray-200   flex-wrap max-w-7xl m-auto  ">
                {data.map((data) => {
                    return (
                        <AnimatedBlogPost
                            key={data._id}
                            keya={data._id}
                            title={data.title}
                            hashtag={data.hashTag}
                        />
                    );
                })}
            </div>
        </div>
    );
}

export default BlogCard;

//     {/* <>

// <a href="#" className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
//     <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy technology acquisitions 2021</h5>
//     <p className="font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
// </a>

//     </> */}
//   );
// }

// export default BlogCard;
