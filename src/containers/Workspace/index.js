import React from 'react';
import { Container, Row, Col } from 'react-grid-system';
import Card from './components/Card';

import './styles.css';
import Navbar from "../../components/Navbar";

export class Workspace extends React.PureComponent {
  render() {
    return (
      <div className="Workspace">
        <Navbar
          items={[
            { icon: "home" },
            { text: "Рабочий стол" },
          ]}
        />

        <Container>
          <Row className="Row">
            <Col sm={4}>
              <div className="Title">Сделки</div>
              <Card
                items={[{
                  label: 'Основная воронка',
                  children: [
                    { label: 'Новые контакты', value: 10 },
                    { label: 'Заявка на мероприятие', value: 5 },
                    { label: 'Ожидаем оплаты', value: 3 },
                  ]
                }, {
                  label: 'Новогодний праздник',
                  children: [
                    { label: 'Новые контакты', value: 7 },
                    { label: 'Заявка на участие', value: 25 },
                    { label: 'Забронировали', value: 18 },
                  ]
                }]}
              />
            </Col>
            <Col sm={4}>
              <div className="Title">Мероприятия</div>
              <Card
                items={[{
                  label: 'Основная воронка',
                  children: [
                    { label: 'Новые контакты', value: 10 },
                    { label: 'Заявка на мероприятие', value: 5 },
                    { label: 'Ожидаем оплаты', value: 3 },
                  ]
                }, {
                  label: 'Новогодний праздник',
                  children: [
                    { label: 'Новые контакты', value: 7 },
                    { label: 'Заявка на участие', value: 25 },
                    { label: 'Забронировали', value: 18 },
                  ]
                }]}
              />
            </Col>
            <Col sm={4}>
              <div className="Title">Задачи</div>
              <Card
                items={[{
                  label: 'Основная воронка',
                  children: [
                    { label: 'Новые контакты', value: 10 },
                    { label: 'Заявка на мероприятие', value: 5 },
                    { label: 'Ожидаем оплаты', value: 3 },
                  ]
                }, {
                  label: 'Новогодний праздник',
                  children: [
                    { label: 'Новые контакты', value: 7 },
                    { label: 'Заявка на участие', value: 25 },
                    { label: 'Забронировали', value: 18 },
                  ]
                }]}
              />
            </Col>
          </Row>
          <Row className="Row">
            <Col sm={4}>
              <div className="Title">Дни рождения</div>
              <Card
                items={[{
                  label: 'Основная воронка',
                  children: [
                    { label: 'Новые контакты', value: 10 },
                    { label: 'Заявка на мероприятие', value: 5 },
                    { label: 'Ожидаем оплаты', value: 3 },
                  ]
                }, {
                  label: 'Новогодний праздник',
                  children: [
                    { label: 'Новые контакты', value: 7 },
                    { label: 'Заявка на участие', value: 25 },
                    { label: 'Забронировали', value: 18 },
                  ]
                }]}
              />
            </Col>
            <Col sm={4}>
              <div className="Title">На сегодня</div>
              <Card
                items={[{
                  label: 'Основная воронка',
                  children: [
                    { label: 'Новые контакты', value: 10 },
                    { label: 'Заявка на мероприятие', value: 5 },
                    { label: 'Ожидаем оплаты', value: 3 },
                  ]
                }, {
                  label: 'Новогодний праздник',
                  children: [
                    { label: 'Новые контакты', value: 7 },
                    { label: 'Заявка на участие', value: 25 },
                    { label: 'Забронировали', value: 18 },
                  ]
                }]}
              />
            </Col>
            <Col sm={4}>
              <div className="Title">На неделю</div>
              <Card
                items={[{
                  label: 'Основная воронка',
                  children: [
                    { label: 'Новые контакты', value: 10 },
                    { label: 'Заявка на мероприятие', value: 5 },
                    { label: 'Ожидаем оплаты', value: 3 },
                  ]
                }, {
                  label: 'Новогодний праздник',
                  children: [
                    { label: 'Новые контакты', value: 7 },
                    { label: 'Заявка на участие', value: 25 },
                    { label: 'Забронировали', value: 18 },
                  ]
                }]}
              />
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Workspace;
