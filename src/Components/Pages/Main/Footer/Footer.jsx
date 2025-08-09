import { InfoContainer, InfoBox, Text, TextBox, Title, Wrapper, Copyright, Container } from "./styled.Footer";

function Footer() {
    return (
        <Wrapper id="footer">
            <Container>
                <InfoContainer>
                    <Title>INFO</Title>
                    <InfoBox>
                        <TextBox>
                            <Text>상호 : 유림조경</Text>
                            <Text>대표 : 오정식</Text>
                        </TextBox>
                        <Text>주소 : 제주특별자치도 제주시 고래소길7, 103동 208호 (도평동)</Text>
                        <TextBox>
                            <Text>사업자등록번호 : 888-42-01414</Text>
                            <Text>이메일 : yurim334@naver.com</Text>
                        </TextBox>
                        <Text>대표번호 : 00-3511-0482 </Text>
                    </InfoBox>
                </InfoContainer>
                <Copyright>COPYRIGHT ©유림조경. ALL RIGHTS RESERVED.</Copyright>
            </Container>
        </Wrapper>
    );
}

export default Footer;
