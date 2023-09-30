import styled from "styled-components";

const Wrapper = styled.div`
  height: 30px;
  width: 30px;
`;

const Icon = styled.svg`
  width: 100%;
  height: 100%;
  cursor: pointer;
  fill: #282828;

  &:hover {
    transition: 0.3s ease-out all;
    fill: #ff46ae;
  }
`;

export const Instagram = () => {
  return (
    <Wrapper>
      <Icon
        width="30"
        height="30"
        viewBox="0 0 30 30"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M21.2498 2.49978C22.906 2.50472 24.4929 3.16484 25.664 4.33595C26.8352 5.50707 27.4953 7.09402 27.5002 8.75022V21.2498C27.4953 22.906 26.8352 24.4929 25.664 25.664C24.4929 26.8352 22.906 27.4953 21.2498 27.5002H8.75022C7.09402 27.4953 5.50707 26.8352 4.33595 25.664C3.16484 24.4929 2.50472 22.906 2.49978 21.2498V8.75022C2.50472 7.09402 3.16484 5.50707 4.33595 4.33595C5.50707 3.16484 7.09402 2.50472 8.75022 2.49978H21.2498ZM21.2498 0H8.75022C3.9375 0 0 3.9375 0 8.75022V21.2498C0 26.0625 3.9375 30 8.75022 30H21.2498C26.0625 30 30 26.0625 30 21.2498V8.75022C30 3.9375 26.0625 0 21.2498 0Z" />
        <path d="M23.1 8.77654C22.7289 8.77654 22.3661 8.66649 22.0576 8.46032C21.749 8.25415 21.5085 7.96111 21.3665 7.61826C21.2245 7.27541 21.1874 6.89815 21.2598 6.53418C21.3322 6.17022 21.5109 5.83589 21.7733 5.57348C22.0357 5.31108 22.37 5.13238 22.734 5.05998C23.0979 4.98758 23.4752 5.02474 23.818 5.16675C24.1609 5.30876 24.4539 5.54926 24.6601 5.85781C24.8663 6.16637 24.9763 6.52913 24.9763 6.90023C24.9768 7.14678 24.9287 7.39101 24.8346 7.61889C24.7405 7.84677 24.6023 8.05382 24.4279 8.22816C24.2536 8.4025 24.0465 8.54068 23.8187 8.63479C23.5908 8.7289 23.3466 8.77707 23.1 8.77654ZM14.9696 10.027C15.9592 10.027 16.9266 10.3204 17.7495 10.8702C18.5723 11.42 19.2137 12.2015 19.5924 13.1158C19.9711 14.0301 20.0702 15.0362 19.8771 16.0068C19.6841 16.9775 19.2075 17.869 18.5077 18.5688C17.8079 19.2686 16.9164 19.7452 15.9458 19.9382C14.9751 20.1313 13.9691 20.0322 13.0547 19.6535C12.1404 19.2748 11.359 18.6334 10.8092 17.8106C10.2593 16.9877 9.96588 16.0203 9.96588 15.0307C9.96729 13.704 10.4949 12.4321 11.433 11.4941C12.3711 10.556 13.6429 10.0284 14.9696 10.027ZM14.9696 7.52544C13.4852 7.52544 12.0341 7.96562 10.7999 8.7903C9.56567 9.61498 8.60371 10.7871 8.03566 12.1585C7.46761 13.5299 7.31898 15.039 7.60857 16.4949C7.89816 17.9507 8.61296 19.288 9.66259 20.3377C10.7122 21.3873 12.0495 22.1021 13.5054 22.3917C14.9613 22.6813 16.4703 22.5326 17.8417 21.9646C19.2131 21.3965 20.3853 20.4346 21.2099 19.2003C22.0346 17.9661 22.4748 16.5151 22.4748 15.0307C22.4748 13.0402 21.6841 11.1312 20.2766 9.72367C18.8691 8.31617 16.9601 7.52544 14.9696 7.52544Z" />
      </Icon>
    </Wrapper>
  );
};