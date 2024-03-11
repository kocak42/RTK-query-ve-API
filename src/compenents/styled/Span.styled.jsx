import styled from "styled-components";

export const StyledSpan = styled.span`
  
  background-color: ${ ({theme})=> theme.colors.bgColor };
  border-bottom: 1px ${ ({theme})=> theme.colors.silver };
  span {
          background-color: ${ ({theme})=> theme.colors.blue };
          color: ${ ({theme})=> theme.colors.bgColor };

          &:hover {
            background-color: ${ ({theme})=> theme.colors.darkBlue };
            color: ${ ({theme})=> theme.colors.blue };
          }
        }

/* 
  &:hover {
   
          text-decoration: none;
          color: ${ ({theme})=> theme.colors.linkColor };
          padding: 8px 12px;
          border-radius: 4px;
  
          &:hover {
            color: ${ ({theme})=> theme.colors.linkColorHover };
            background-color: ${ ({theme})=> theme.colors.silver };
          }
        
     } */
`;