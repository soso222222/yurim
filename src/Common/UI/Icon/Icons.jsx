const Icons = {
    menu: {
        viewbox : "0 0 24 24",
        path : <g>
            <rect y="11" width="24" height="2"/>
            <rect y="4" width="24" height="2"/>
            <rect y="18" width="24" height="2"/>
        </g>,
    }, 
    cross: {
        viewbox : "0 0 24 24",
        path : <path d="M23.707.293h0a1,1,0,0,0-1.414,0L12,10.586,1.707.293a1,1,0,0,0-1.414,0h0a1,1,0,0,0,0,1.414L10.586,12,.293,22.293a1,1,0,0,0,0,1.414h0a1,1,0,0,0,1.414,0L12,13.414,22.293,23.707a1,1,0,0,0,1.414,0h0a1,1,0,0,0,0-1.414L13.414,12,23.707,1.707A1,1,0,0,0,23.707.293Z"/>
    }
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
