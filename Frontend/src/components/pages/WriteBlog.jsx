import React, { useState } from "react";
import ReactQuill from "react-quill";
import { useAuth0 } from "@auth0/auth0-react";
import "react-quill/dist/quill.snow.css"; // Import styles
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
import { hashtag } from "./form/data";

function AdvancedTextEditor() {
    const [editorContent, setEditorContent] = useState("");
    const { user, isAuthenticated } = useAuth0();
    const [formData, setFormData] = React.useState({
        title: "",
        hashTag: [],
    });
    console.log(editorContent);

    if (!isAuthenticated) {
        return (
            <>
                <div className=" min-h-screen flex items-center justify-center flex-col bg-slate-100">
                    <div
                        className="flex items-center p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-100 max-w-4xl  "
                        role="alert"
                    >
                        <svg
                            className="flex-shrink-0 inline w-4 h-4 mr-3"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                        >
                            <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z" />
                        </svg>
                        <span className="sr-only">Info</span>
                        <div>
                            <span className="font-medium">Danger alert!</span>{" "}
                            You can not create a Blog Until Login.
                        </div>
                    </div>
                    <a href="./signin" className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"> login now </a>
         
                </div>
            </>
        );
    }

    const handleSubmit = async (event) => {
        event.preventDefault();

        let finalData = {
            ...formData,
            email: user.email,
            content: editorContent,
        };

        try {
            const response = await fetch("http://localhost:5000/api/posts", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(finalData),
            });

            if (!response.ok) {
                throw new Error("Network response was not ok");
            }

            const data = await response.json();
            console.log("Server Response:", data);
        } catch (error) {
            console.error(
                "There was a problem with the fetch operation:",
                error.message
            );
        }
    };

    const modules = {
        toolbar: [
            [{ header: [1, 2, 3, 4, 5, 6, false] }],
            ["bold", "italic", "underline", "strike"], // toggled buttons
            [{ list: "ordered" }, { list: "bullet" }],
            ["blockquote", "code-block"],
            [{ color: [] }, { background: [] }],
            ["link", "image", "video"],
            [{ align: [] }],
            ["clean"],
        ],
    };

    const formats = [
        "header",
        "bold",
        "italic",
        "underline",
        "strike",
        "blockquote",
        "list",
        "bullet",
        "indent",
        "link",
        "image",
        "video",
        "color",
        "background",
        "align",
        "code-block",
    ];

    return (
        <div className="bg-slate-200">
            <div className=" max-w-4xl border bg-slate-50 p-16 m-auto ">
                <form onSubmit={handleSubmit}>
                    <div className="my-6">
                        <label className=" text-3xl">Title:</label>
                        <input
                            className="block w-full p-4 pl-10  text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 text-3xl "
                            type="text"
                            value={formData.title}
                            onChange={(e) =>
                                setFormData({
                                    ...formData,
                                    title: e.target.value,
                                })
                            }
                        />
                    </div>
                    <label className=" text-3xl">Content:</label>
                    <div className="  flex " style={{ minHeight: "300px" }}>
                        <ReactQuill
                            className=" "
                            value={editorContent}
                            onChange={setEditorContent}
                            modules={modules}
                            formats={formats}
                        />
                    </div>
                    <div className=" mt-24 mb-6">
                        {/* <label>Hashtag:</label> */}
                        <Autocomplete
                            multiple
                            id="tags-outlined"
                            onChange={(e, value) => {
                                // setHashTag(value);
                                setFormData({ ...formData, hashTag: value });
                            }}
                            options={hashtag}
                            getOptionLabel={(option) => option}
                            // defaultValue={[top100Films[13]]}
                            filterSelectedOptions
                            renderInput={(params) => (
                                <TextField
                                    {...params}
                                    label="Hashtag"
                                    placeholder="maximum 7"
                                />
                            )}
                        />
                    </div>
                    {/* <div className="mt-4">
                <h3>Editor Content:</h3>
                <div dangerouslySetInnerHTML={{ __html: editorContent }} />
            </div> */}
                    <button
                        type="submit"
                        className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
                    >
                        Submit
                    </button>
                </form>
            </div>
        </div>
    );
}

export default AdvancedTextEditor;
