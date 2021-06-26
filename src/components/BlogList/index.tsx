import React from "react";

const BlogList = ({ posts }: any) => {
    if (!posts) {
        return <div>No Posts</div>;
    }

    const break_tokens = [
        "\u003c/p\u003e\n\n\n\n\u003c!--nextpage--\u003e\n\n\n\n\u003cp\u003e",
        "\u003c/p\u003e\n\n\n\n\u003c!--more--\u003e\n\n\n\n\u003ch2\u003e",
    ];

    return (
        <div>
            {posts.map((post: any) => {
                let post_content: string = post.content.rendered;

                break_tokens.forEach((break_token: string) => {
                    post_content = post_content.split(break_token)[0];
                });

                return (
                    <div key={post.id}>
                        <h2>{post.title.rendered}</h2>
                        <div
                            dangerouslySetInnerHTML={{
                                __html: post_content,
                            }}
                        ></div>
                        <hr />
                    </div>
                );
            })}
        </div>
    );
};
export default BlogList;
