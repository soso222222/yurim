import { forwardRef } from "react";
import { Wrapper } from "./styled.Button";
import { useNavigate } from "react-router-dom";
import Icon from "../Icon/Icon";

const Button = forwardRef(
    (
        {
            children,
            themeName = "normal",
            onClick,
            className,
            size = "md",
            width,
            to,
            bg,
            icon,
        },
        ref
    ) => {
        const navigate = useNavigate();
        return (
            <Wrapper
            className={className}
            themeName={themeName}
            size={size}
            width={width}
            bg={bg}
            iconType={icon}
            onClick={(e) => {
                to ? navigate(to) : onClick && onClick(e);
                e.stopPropagation();
            }}
        >
            {icon ? <Icon type={icon} size={size} /> : children}
            </Wrapper>
        );
    }
);

Button.defaultProps = {
    Theme: false,
    fill: false,
    color: null,
    onClick: () => {},
    disabled: false,
    className: null,
    type: "button",
    loading: false,
    leftIcon: false,
    rightIcon: false,
};
export default Button;
