import React from "react";
import Moment from "react-moment";
import { useRouter } from "next/router";

const BlogList = ({ posts }: any) => {
    const router = useRouter();

    if (!posts) {
        return <div>No Posts</div>;
    }

    const break_tokens = [
        "\u003c/p\u003e\n\n\n\n\u003c!--nextpage--\u003e\n\n\n\n\u003cp\u003e",
        "\u003c/p\u003e\n\n\n\n\u003c!--more--\u003e\n\n\n\n\u003ch2\u003e",
        "<!--more-->",
    ];

    return (
        <div className={"flex flex-col space-y-6"}>
            {posts.map((post: any) => {
                const post_url = `/post/${post.id}`;
                let post_content: string = post.content.rendered;

                let has_break = false;
                break_tokens.forEach((break_token: string) => {
                    if (post_content.indexOf(break_token) !== -1) {
                        has_break = true;
                    }

                    post_content = post_content.split(break_token)[0];
                });

                const gotoPost = () => {
                    router.push(post_url);
                };

                return (
                    <div key={post.id} className={"my-8"}>
                        <h2 className={"text-3xl mt-5 text-left"}>
                            <a
                                dangerouslySetInnerHTML={{
                                    __html: post.title.rendered,
                                }}
                                href={post_url}
                                onClick={() => {
                                    gotoPost();
                                }}
                            ></a>
                            <div className={"text-lg text-gray-600"}>
                                <Moment
                                    date={post.date}
                                    format={"MMMM D, yyy"}
                                />
                            </div>
                        </h2>
                        <div
                            className={"text-lg"}
                            dangerouslySetInnerHTML={{
                                __html: post_content,
                            }}
                        ></div>

                        {has_break ? (
                            <div className={"bg-gray-100 px-8 py-5 text-right"}>
                                <a
                                    href={post_url}
                                    onClick={() => {
                                        gotoPost();
                                    }}
                                >
                                    Continue Reading
                                </a>
                            </div>
                        ) : (
                            <div
                                className={"bg-gray-100 px-2 py-5 text-right"}
                            ></div>
                        )}
                    </div>
                );
            })}
        </div>
    );
};
export default BlogList;
