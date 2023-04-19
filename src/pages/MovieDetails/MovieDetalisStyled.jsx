import styled from '@emotion/styled';

export const Button = styled.button`
  display: flex;
  align-items: center;
  width: auto;
  height: auto;
  gap: ${p => p.theme.space[3]}px;
  margin-bottom: ${p => p.theme.space[2]}px;
  background-color: ${p => p.theme.colors.buttonColor};
  border-radius: ${p => p.theme.radii.normal};
  border-color: ${p => p.theme.colors.borderColor};
  &:hover,
  :focus {
    background-color: ${p => p.theme.colors.buttonAccentColor};
  }
`;
