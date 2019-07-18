import React from 'react';

import { storiesOf } from '@storybook/react';
import Workspace from '../src/containers/Workspace';
import Navbar from '../src/components/Navbar';
import Card from '../src/containers/Workspace/components/Card';

import './styles.css';

storiesOf('Screens|Workspace', module).add('Card', () => (
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
));

storiesOf('Screens|Workspace', module)
  .add('demo', () => <Workspace />);

storiesOf('Common', module)
  .add('NavBar', () => (
    <Navbar
      items={[
        { icon: "home" },
        { text: "Рабочий стол" },
      ]}
    />
  ));