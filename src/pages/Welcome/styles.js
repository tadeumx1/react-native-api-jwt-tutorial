import styled from 'styled-components/native'

export const Container = styled.View`
    display: flex;
    flex: 1;
    background-color: #444A5A;
    padding: 40px;
    justify-content: center;
    align-items: stretch;
`;

export const Title = styled.Text`
    text-align: center;
    color: #FFFFFF;
    font-size: 24px;
    font-weight: bold;
`;

export const TextInformation = styled.Text`
    text-align: center;
    margin-top: 10px;
    font-size: 14px;
    color: #DDDDDD;
    line-height: 21px;
`;

export const Error = styled.Text`
    color: #E37A7A;
    text-align: center;
    margin-top: 10px;
`;

export const Form = styled.View`
    margin-top: 20px;
`;

export const Input = styled.TextInput`
    background-color: #FFFFFF;
    border-radius: 3px;
    height: 44px;
    /*
    
        top and bottom paddings are 0px
        right and left paddings are 20px
    */
    /* paddingHorizontal: metrics.basePadding */
    /* paddingHorizontal: 20 */
    padding: 0px 20px;
    margin-bottom: 10px;
    
`;

export const Button = styled.TouchableOpacity`
    background-color: #7A91CA;
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