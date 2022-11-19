import { Card } from "antd";
import styled from "styled-components";

export const HeroContainer = styled.section`
  min-height: 80vh;
  background-color: #333;
  background-image: url("./house.jpeg");
  display: grid;
  align-items: center;
  position: relative;
  padding: 6rem;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 80vh;
    background-color: rgba(0, 0, 0, 0.4);
    z-index: 0;
  }
`;

export const HeroContent = styled(Card)`
  max-width: 60rem;
  padding: 1rem;
  background: rgba(255, 255, 255, 0.4);
  border-radius: 16px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);
  border: 1px solid rgba(255, 255, 255, 0.3);
`;

export const WaveContainer = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  overflow: hidden;
  line-height: 0;
  transform: rotate(180deg);
`;

export const SVGWave = styled.svg`
  position: relative;
  display: block;
  width: calc(100% + 1.3px);
  height: 150px;

  .shape-fill {
    fill: #ffffff;
  }
`;
