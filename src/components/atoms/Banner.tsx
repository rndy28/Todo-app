import styled from 'styled-components';

const Banner = styled.div`
  transition: background 200ms ease;
  background: url(${(p) => p.theme.banner}) center no-repeat;
  background-size: cover;
  object-fit: cover;
  max-width: 100%;
  min-height: 15rem;
  @media (min-width: 800px) {
    background-image: url(${(p) => p.theme.banner});
    min-height: 20rem;
  }
`;

export default Banner;
