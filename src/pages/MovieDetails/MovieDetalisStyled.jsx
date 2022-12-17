import styled from '@emotion/styled';

export const Poster = styled.img`
  max-width: 350px;
  padding: ${p => p.theme.space[0]}px;
  margin: ${p => p.theme.space[0]}px;
`;
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
export const Genres = styled.h3``;

export const Genre = styled.li`
  display: block;
  list-style-type: none;
  margin-right: ${p => p.theme.space[3]}px;
`;
