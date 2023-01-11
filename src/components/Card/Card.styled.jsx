import styled from "@emotion/styled";


export const CardCss = styled.li`
  position: relative;
  border: ${({ theme }) => `2px dashed ${theme.colors.black}`};
  padding: ${({ theme }) => `${theme.spacing(2)}px`};
  border-radius: 4px;
`;
export const TitleCss = styled.h2`
  margin-top: 0;
  font-size: 14px;
  line-height: 24px;
  font-weight: 700px;
  letter-spacing: 0.5px;
  text-transform: uppercase;
`;
export const InfoCss = styled.p`
  display: flex;
  align-items: center;
  margin-top: 0;
  margin-bottom: ${({ theme }) => `${theme.spacing(2)}px`};
  color: ${({ theme }) => `${theme.colors.primaryText}`};
  font-size: 16px;
  line-height: 24px;
  font-weight: 400;
  letter-spacing: 0.25px;
  transition: color 250ms ${({ theme }) => `${theme.colors.secondaryText}`};

  svg {
    display: block;
    margin-right: ${({ theme }) => `${theme.spacing(2)}px`};
    color: ${({ theme }) => `${theme.colors.secondaryText}`};

    transition: color 250ms ${({ theme }) => `${theme.utils.cubicBezier}`};
  }

  &:hover,
  &:focus {
    color: #000;

    svg {
      color: #000;
    }
  }
`;
const setBgColor = ({cardType, theme}) => {
    switch (cardType) {
      case "free":
        return theme.colors.green;
      case "paid":
        return theme.colors.blue;
      case "vip":
        return theme.colors.red;
        default:
            return theme.colors.black;
    }
}
export const ChipCss = styled.span`
  position: absolute;
  top: 4px;
  right: 4px;
  padding: ${({ theme }) => `${theme.spacing(1)}px`}
    ${({ theme }) => `${theme.spacing(2)}px`};
  border-radius: 4px;
  text-transform: uppercase;
  background-color: #000;
  color: #fff;

  ${(props) => {
    console.log(props.type);
    console.log(props.a);
    console.log(props.b);
  }}

  background-color: ${setBgColor}
`;