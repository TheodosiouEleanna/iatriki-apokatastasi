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

export const InputField = styled.input`
  background-color: #ffffff;
  border-color: #ebebeb;
  border-width: 2px;
  border-radius: 8px;
  min-height: 60px;
  padding: 8px 20px;
`;

export const Card = styled.div`
  display: grid;
  width: fit-content;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  padding: 32px;
  border-radius: 24px;
`;
