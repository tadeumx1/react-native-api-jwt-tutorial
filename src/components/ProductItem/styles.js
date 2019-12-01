import styled from 'styled-components/native'

export const Container = styled.View`
  flex: 1;
  background-color: #eeeeee;
  elevation: 3;
  flex-direction: row;
  border-radius: 3px;
  margin: 10px;
  padding: 10px;
`;

export const ProductImage = styled.Image`
  height: 50px;
  width: 50px;
  border-radius: 50px;
  align-self: center;
`;

export const InfoContainer = styled.View`
  flex-direction: column;
  margin-top: 5px;
  margin-left: 10px;
`;

export const ProductName = styled.Text`
  font-weight: bold;
  font-size: 14px;
`;
