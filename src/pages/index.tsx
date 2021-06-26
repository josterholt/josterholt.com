import Head from "next/head";
import BlogList from "../components/BlogList";
import Image from "next/image";
import styles from "../styles/Home.module.css";

export default function Home({ posts, total_posts, total_pages }) {
    return (
        <div className={styles.container}>
            <Head>
                <title>Create Next App</title>
                <meta
                    name="description"
                    content="Generated by create next app"
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main className={styles.main}>
                <h1 className={styles.title}>Justin Osterholt</h1>

                <p className={styles.description}>
                    Software Engineering Manager | Full Stack Engineer
                </p>

                <BlogList
                    posts={posts}
                    total_posts={total_posts}
                    total_pages={total_pages}
                />
            </main>

            <footer className={styles.footer}></footer>
        </div>
    );
}

const fetch_posts = async (page_num: number) => {
    const res = await fetch(
        "https://codersdesiderata.com/wp-json/wp/v2/posts?page=" + page_num
    );
    const fetched_posts = await res.json();
    const total_posts: number = parseInt(res.headers.get("X-WP-Total") || "");
    const total_pages: number = parseInt(
        res.headers.get("X-WP-TotalPages") || ""
    );

    console.log({ total_pages });

    return { fetched_posts, total_posts, total_pages };
};

export async function getStaticProps() {
    let page_num: number = 0;
    let posts: any = [];
    let total_pages: number = 1; // There is at least one page
    let total_posts: number = 0;

    console.table({ page_num, total_pages });
    while (page_num < total_pages) {
        page_num++;
        let fetched_posts = [];

        ({ fetched_posts, total_posts, total_pages } = await fetch_posts(
            page_num
        ));

        posts = posts.concat(fetched_posts);
    }
    console.log(posts.length);

    return {
        props: {
            posts,
            total_posts,
            total_pages,
        },
    };
}
