import { useRouter } from 'next/router';
import Link from 'next/link';
import PropTypes from 'prop-types';

export { NavLink };

NavLink.propTypes = {
    href: PropTypes.string.isRequired,
    exact: PropTypes.bool
};

NavLink.defaultProps = {
    exact: false
};

function NavLink({ href, exact, children, ...props }:any) {
    const { asPath } = useRouter();
    const isActive = exact ? asPath === href : asPath.startsWith(href);

    if (isActive) {
        props.className += 'bg-[red]';
    }

    return (
        <Link href={href??''}>
            <a {...props}>
                {children}
            </a>
        </Link>
    );
}
export default NavLink