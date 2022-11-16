import styled, { css } from "styled-components";
const blue = "#1a76d1";

export const StyledButton = styled.button`
  transition: 0.3s;

  ${(props: {
    variant: "primary" | "secondary" | "default" | "error" | "transparent";
  }) => {
    if (props.variant === "secondary")
      return css`
        border: 1px solid ${blue};
        color: ${blue};
        border-radius: 8px;
        background-color: white;
        padding: 10px 20px;

        :hover {
          background-color: ${blue};
          color: #ffffff;
        }
      `;

    return css`
      color: #ffffff;
      border-radius: 8px;
      background-color: ${blue};
      padding: 10px 20px;

      :hover {
        color: white;
        background-color: black;
      }
    `;
  }}
`;
