import styled from "@emotion/styled";
import Color from "../../../utils/color";

const ProfileStyled = styled.summary`
  word-break: initial;
  font-size: 1rem;
  padding: 1rem 0;

  h1 {
    margin: 0.5rem 0;
  }

  span {
    padding-right: 1rem;
  }

  h1,
  section > span {
    font-size: 2rem;
  }

  section:first-of-type {
    margin: 1rem 0;
  }

  p,
  section {
    margin: 0.5rem 0;
  }

  section > ul {
    padding-inline-start: 1rem;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;

    li {
      padding: 0.5rem;
      display: flex;
      align-items: center;
    }
  }

  mark {
    background: none;
    color: ${Color.alternative};
  }
`;

const SocialStyled = styled.p`
  padding: 1rem 0;

  a {
    text-decoration: none;
    color: unset;

    span:before {
      font-size: 2rem;
    }
  }
`;

export { ProfileStyled, SocialStyled };
