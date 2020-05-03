import Link from "next/link";

const ExLink = item => {
    let src;

    if (/http|mailto/.test(item.path)) {
        src = <a href={item.path}>{item.name}</a>;
    } else {
        src = <Link href={item.path}><a>{item.name}</a></Link>
    }

    return src;
};

export default ExLink;