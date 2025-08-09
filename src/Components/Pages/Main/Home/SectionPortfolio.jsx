import { Gallery, GalleryImg, GalleryImgItem, MainPortfolioContainer, SectionMainPortfolio } from "./styled.Home";
import { Title } from "../../../../Common";
import { useEffect, useRef } from "react";

function SectionPortfolio() {
    const containerRef = useRef(null);

    const setImgColumns = () => {
        const items = containerRef.current.querySelectorAll(".gallery-item");

        items.forEach(item => {
            const img = item.querySelector('img');
            const imageLoaded = () => { // 이미지가 로드될 때까지 기다립니다.
                const aspectRatio = img.naturalWidth / img.naturalHeight;

                if (aspectRatio >= 1.3) {
                    item.classList.add('wide');
                }
            };

            // 이미지 로딩 이벤트 리스너를 추가합니다.
            if (img.complete) { // 이미지가 이미 로드된 경우 바로 실행
                imageLoaded();
            } else { // 이미지가 로드되지 않은 경우 이벤트 리스너 추가
                img.addEventListener('load', imageLoaded);
            }

            // 컴포넌트 언마운트 시 이벤트 리스너를 정리합니다.
            return () => {
                img.removeEventListener('load', imageLoaded);
            };
        });

    };

    useEffect(() => { // 컴포넌트가 마운트될 때 실행됩니다.
        setImgColumns();
  }, []); // 빈 배열을 두어 컴포넌트가 처음 렌더링될 때만 실행되도록 합니다.

    return (
        <SectionMainPortfolio>
            <MainPortfolioContainer>
                <Title title={"작업 포트폴리오"} subTxt={"portfolio"} subColor={"light"} titleSize={42} subSize={24} align={"center"} margin={"0 0 40rem 0"} />
                <Gallery className="gallery" ref={containerRef}>
                    <GalleryImgItem className="gallery-item"><GalleryImg alt="portfolio image4" src="/images/main/p-2-1.jpg"  /></GalleryImgItem>
                    <GalleryImgItem className="gallery-item"><GalleryImg alt="portfolio image1" src="/images/main/p-1-1.jpg"  /></GalleryImgItem>
                    <GalleryImgItem className="gallery-item"><GalleryImg alt="portfolio image2" src="/images/main/p-1-2.jpg"  /></GalleryImgItem>
                    <GalleryImgItem className="gallery-item"><GalleryImg alt="portfolio image3" src="/images/main/p-1-3.jpg"  /></GalleryImgItem>
                    <GalleryImgItem className="gallery-item"><GalleryImg alt="portfolio image5" src="/images/main/p-2-2.jpg"  /></GalleryImgItem>
                </Gallery>
            </MainPortfolioContainer>
        </SectionMainPortfolio>
    );
}
export default SectionPortfolio;
