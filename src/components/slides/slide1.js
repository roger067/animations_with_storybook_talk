import styled from "styled-components";

export const slide_0 = {
  alignItems: "center",
  background: "#19223c",
  children: (
    <Flex flexDirection="column">
      <h1>Como criar sua biblioteca animada</h1>
      <h2>com Storybook.</h2>
    </Flex>
  ),
};

export const slide_1 = {
  children: "Teste 1",
};

export const slide_2 = {
  children: "Teste 2",
};

const Flex = styled.div``;

const section_1 = [slide_0, slide_1, slide_2];

export default section_1;
