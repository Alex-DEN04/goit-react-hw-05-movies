import styled from '@emotion/styled';

export const Poster = styled.img`
  max-width: 350px;
  padding: ${p => p.theme.space[0]}px;
  margin: ${p => p.theme.space[0]}px;
`;
export const Overviev = styled.h3`
  padding: ${p => p.theme.space[0]}px;
  margin: ${p => p.theme.space[0]}px;
  margin-bottom: ${p => p.theme.space[3]}px;
`;

export const Text = styled.p`
  padding: ${p => p.theme.space[0]}px;
  margin: ${p => p.theme.space[0]}px;
  margin-bottom: ${p => p.theme.space[5]}px;
`;

export const Genres = styled.h3`
  padding: ${p => p.theme.space[0]}px;
  margin: ${p => p.theme.space[0]}px;
  margin-bottom: ${p => p.theme.space[3]}px;
`;

export const Genre = styled.li`
  display: block;
  list-style-type: none;
  margin-right: ${p => p.theme.space[3]}px;
`;
