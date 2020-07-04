import styled from "styled-components";

interface ColoursProps {
    orange: string,
    white: string,
    darkGrey: string,
    lightGrey: string
}

export const colours: ColoursProps = {
    orange: "#E78200",
    white: "#FFFFFF",
    darkGrey: "#707070",
    lightGrey: "#D2D2D2",
}

export const PageContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100vh;
`;