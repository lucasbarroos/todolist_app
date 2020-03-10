import styled from 'styled-components';

export const Container = styled.View`
  background-color: #25283f;
  height: 100%;
  position: relative;
`;

export const Title = styled.Text`
  font-size: 28px;
  letter-spacing: 2px;
  font-weight: 200;
  color: white;
  background-color: #313349;
  margin-top: 20px;
  padding-top: 10px;
  width: 50%;
  height: 100%;
  position: absolute;
  padding-left: 10px;
  top: 0px;
  left: 0px;
  border-top-right-radius: 10px;
`;

export const DateLabel = styled.View`
  margin-top: 20px;
  position: absolute;
  padding-right: 10px;
  padding-top: 10px;
  top: 0px;
  right: 0px;
  border-top-right-radius: 10px;
  display: flex;
  flex-direction: row;
`;

export const DateIcon = styled.Image`
  color: white;
  width: 30px;
  height: 30px;
`;

export const DateText = styled.Text`
  font-size: 16px;
  letter-spacing: 1px;
  color: white;
  padding-right: 5px;
  padding-top: 5px;
`;

export const CardContainer = styled.View`
  margin-top: 80px;
`;

export const Card = styled.View`
  margin: 5px;
  border-radius: 15px;
  padding: 20px;
  padding-left: 60px;
  background-color: #ffffff;
  position: relative;
`;

export const CardTitle = styled.Text`
  font-size: 16px;
  font-weight: 400;
  letter-spacing: 1px;
  text-shadow: 0px 0px 20px rgba(0, 0, 0, 0.2);
  color: black;
  text-align: justify;
  margin-top: 5px;
  margin-bottom: 5px;
`;

export const CardBackground = styled.Image`
  width: 30px;
  height: 30px;
  border-radius: 20px;
  position: absolute;
  top: 20px;
  left: 10px;
  z-index: 100;
`;

export const Details = styled.View`
  display: flex;
  flex-direction: column;
  position: relative;
  width: 100%;
`;

export const DetailsText = styled.Text`
  font-size: 16px;
  color: black;
  text-align: justify;
  letter-spacing: 1px;
  font-weight: 200;
  margin-bottom: 20px;
`;

export const DetailsButton = styled.View`
  display: flex;
  flex-direction: column;
  position: relative;
  width: 100%;
`;

export const EmptyListMessage = styled.Text`
  font-size: 14px;
  text-align: center;
  color: white;
  font-weight: 300;
  letter-spacing: 2px;
  background-color: rgba(255, 255, 255, 0.1);
  padding: 20px;
  border-radius: 10px;
  margin: 10px;
`;
