import styled from 'styled-components/native'

export const Container = styled.View`
    display: flex;
    flex: 1;
    background-color: #FFFFFF;
    padding: 40px;
    justify-content: center;
    align-items: stretch;
`;

export const Title = styled.Text`
    font-weight: bold;
    text-align: center;
    margin-top: 10px;
    font-size: 20px;
    color: #000000;
    line-height: 21px;
`;

export const Button = styled.TouchableOpacity`
    background-color: #398AD7;
    border-radius: 3px;
    height: 44px;
    padding: 0px 20px;
    margin-top: 10px;
    justify-content: center;
    align-items: center;
`;

export const ButtonText = styled.Text`
    color: #FFFFFF;
    font-weight: bold;
    font-size: 14px;
`;