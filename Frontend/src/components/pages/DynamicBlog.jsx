import React from "react";
import { useParams } from "react-router-dom";
const DynamicBlog = ({ blogData }) => {
    const params = useParams();
    const blogId = params.blogId;

    console.log(blogData);

    return (
        <div>
            {blogData.map((blog) => {
                if (blogId == blog._id) {
                    return (
                        <>
                            <div className="  m-auto max-w-4xl p-5 sm:p-14 bg-slate-100 ">
                                <header className="mb-4 lg:mb-6 not-format">
                                    <h1 className="mb-4 text-3xl font-extrabold leading-tight text-gray-900 lg:mb-6 lg:text-4xl ">
                                        {blog.title}
                                    </h1>
                                    {blog.hashTag.map((data, index) => {
                                        return (
                                            <span
                                                key={index}
                                                className="bg-blue-100 text-blue-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded "
                                            >
                                                {data}
                                            </span>
                                        );
                                    })}
                                </header>
                                <article>
                                    <div
                                        dangerouslySetInnerHTML={{
                                            __html: blog.content,
                                        }}
                                    />
                                </article>
                            </div>
                        </>
                    );
                }
            })}
        </div>
    );
};

export default DynamicBlog;
