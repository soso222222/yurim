import Icon from "../Icon/Icon";
import { CardBox, CardImage, CardItem, CardText } from "./styled.Card";

const Card = ({ 
    list,
    columns = 2,
    size,
}) => {
    return (
        <CardBox columns={columns}>
            {list.map(({ text, leftIcon, RightIcon, leftImg, rightImg }, idx) => {
                return (
                    <CardItem
                    key={idx}
                    >
                        {leftIcon && <Icon type={leftIcon} size={size} />}
                        {leftImg && <CardImage alt="card image" src={`/images/about/${leftImg}.svg`} />}
                        <CardText>{text}</CardText>
                        {RightIcon && <Icon type={RightIcon} size={size} />}
                        {rightImg && <CardImage alt="card image" src={`/images/about/${rightImg}.svg`} />}
                    </CardItem>
                );
            })}
        </CardBox>
    );
};

export default Card;