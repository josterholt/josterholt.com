import Link from "next/link";

export default function MainNavigation() {
    return (
        <nav
            className={
                "border-solid border-t-2 border-b-2 border-gray-400 mb-9"
            }
        >
            <ul className={"flex py-3 justify-center"}>
                <li className={"mr-6"}>
                    <Link href="/">
                        <a>Home</a>
                    </Link>
                </li>
                <li className={"mr-6"}>
                    <Link href="/">
                        <a>Engineering</a>
                    </Link>
                </li>
                <li className={"mr-6"}>
                    <Link href="/">
                        <a>Gaming</a>
                    </Link>
                </li>
                <li className={"mr-6"}>
                    <Link href="/">
                        <a>Journey</a>
                    </Link>
                </li>
                <li className={"mr-6"}>
                    <Link href="/">
                        <a>Learning</a>
                    </Link>
                </li>
                <li className={"mr-6"}>
                    <Link href="/">
                        <a>Portfolio</a>
                    </Link>
                </li>
                <li className={"mr-6"}>
                    <Link href="/">
                        <a>About</a>
                    </Link>
                </li>
            </ul>
        </nav>
    );
}
