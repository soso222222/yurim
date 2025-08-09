const Icons = {
    menu: {
        viewbox : "0 0 24 24",
        path : <g>
            <rect y="11" width="24" height="2"/>
            <rect y="4" width="24" height="2"/>
            <rect y="18" width="24" height="2"/>
        </g>,
    }, 
}

export const getIconInfo = (type) => {
    return Icons[type];
};
export const getIconPath = (type) => {
    return Icons[type].path;
};
export const getIconViewBox = (type) => {
    return Icons[type].viewbox;
};

export default Icons;
