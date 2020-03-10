import React from 'react';
import {ScrollView, Button} from 'react-native';
import Accordion from '@dooboo-ui/native-accordion';
import moment from 'moment';
import {
  Container,
  Title,
  Card,
  CardBackground,
  CardTitle,
  CardContainer,
  DateLabel,
  DateText,
  DateIcon,
  Details,
  DetailsText,
  EmptyListMessage,
} from './styles';
import ActionButton from 'react-native-action-button';
import Check from '../../assets/check.png';
import Circle from '../../assets/circle.png';
import Calendar from '../../assets/calendar.png';

const testList = [
  {
    _id: 2,
    name: 'Praticar Nodejs com Typescript',
    check: false,
    date: new Date(),
    description: 'Utilizar Typecript com testes automatizados.',
  },
  {
    _id: 3,
    name: 'Verificar o MongoDB Atlas',
    check: false,
    date: new Date(),
    description: 'Acho que está instável.',
  },
];

const testDidList = [
  {
    _id: 1,
    name: 'Programar React Native',
    check: true,
    date: new Date(),
    description: 'Buscar vídeos no youtube com react hooks.',
  },
  {
    _id: 4,
    name: 'Fazer a feira do mês',
    check: true,
    date: new Date(),
    description: 'Lembrar de comprar ovos.',
  },
];

export default function Main() {
  const [date, setDate] = React.useState(new Date());
  const [dateLabel, setDateLabel] = React.useState('Today');
  const [todoList, setTodoList] = React.useState(testList);
  const [didList, setDidList] = React.useState(testDidList);

  React.useState(() => {
    if (date.getTime() === new Date().getTime()) {
      setDateLabel('Today');
    } else {
      setDateLabel(moment(date).format('DD/MM/YYYY'));
    }
  });

  const renderList = list => {
    return list.map((element, i) => (
      <Card>
        <CardBackground source={element.check ? Check : Circle} />
        <Accordion
          key={element._id}
          header={<CardTitle>{element.name}</CardTitle>}>
          <Details>
            <DetailsText>{element.description}</DetailsText>
          </Details>
          {element.check ? null : (
            <Button
              title="Check"
              color="#25283f"
              onPress={() => {
                const newTodoList = Object.assign([], list);
                newTodoList.splice(i, 1);
                setTodoList(newTodoList);

                const newDidList = Object.assign([], didList);
                element.check = true;
                newDidList.push(element);
                setDidList(newDidList);
              }}
            />
          )}
        </Accordion>
      </Card>
    ));
  };

  return (
    <Container>
      <ScrollView>
        <Title>To do list</Title>
        <DateLabel>
          <DateText>{dateLabel}</DateText>
          <DateIcon source={Calendar} />
        </DateLabel>
        <CardContainer>
          {todoList.length > 0 ? (
            renderList(todoList)
          ) : (
            <EmptyListMessage>
              Register a new activity for {dateLabel}
            </EmptyListMessage>
          )}
        </CardContainer>
        <CardContainer>{renderList(didList)}</CardContainer>
      </ScrollView>
      <ActionButton buttonColor="rgba(231,76,60,1)" />
    </Container>
  );
}
