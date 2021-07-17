import React from "react";

const BlogList = ({ posts }: any) => {
    if (!posts) {
        return <div>No Posts</div>;
    }

    const break_tokens = [
        "\u003c/p\u003e\n\n\n\n\u003c!--nextpage--\u003e\n\n\n\n\u003cp\u003e",
        "\u003c/p\u003e\n\n\n\n\u003c!--more--\u003e\n\n\n\n\u003ch2\u003e",
        "<!--more-->",
    ];

    return (
        <div>
            {posts.map((post: any) => {
                let post_content: string = post.content.rendered;

                let has_break = false;
                break_tokens.forEach((break_token: string) => {
                    if (post_content.indexOf(break_token) !== -1) {
                        has_break = true;
                    }

                    post_content = post_content.split(break_token)[0];
                });

                return (
                    <div key={post.id}>
                        <h2
                            className={"text-3xl my-5"}
                            dangerouslySetInnerHTML={{
                                __html: post.title.rendered,
                            }}
                        ></h2>
                        <div
                            className={"text-lg"}
                            dangerouslySetInnerHTML={{
                                __html: post_content,
                            }}
                        ></div>

                        {has_break ? (
                            <div className={"bg-gray-300 px-2 py-5 text-right"}>
                                Continue Reading
                            </div>
                        ) : null}
                    </div>
                );
            })}
        </div>
    );
};
export default BlogList;
