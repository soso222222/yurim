const Icons = {
    angleRight: {
        viewbox: "0 0 24 24",
        path : <path d="m6.733,23.888l-.707-.707,10.827-10.827c.095-.095.146-.22.146-.354s-.052-.259-.146-.354L6.026.819l.707-.707,10.827,10.827c.283.283.439.66.439,1.061s-.156.777-.439,1.061l-10.827,10.827Z"/>
    },
    cross: {
        viewbox : "0 0 24 24",
        path : <path d="M23.707.293h0a1,1,0,0,0-1.414,0L12,10.586,1.707.293a1,1,0,0,0-1.414,0h0a1,1,0,0,0,0,1.414L10.586,12,.293,22.293a1,1,0,0,0,0,1.414h0a1,1,0,0,0,1.414,0L12,13.414,22.293,23.707a1,1,0,0,0,1.414,0h0a1,1,0,0,0,0-1.414L13.414,12,23.707,1.707A1,1,0,0,0,23.707.293Z"/>
    },
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
