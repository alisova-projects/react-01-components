import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root'),
);

// ==============================================================================

// import paintings from './paintings.json';

// ==============================================================================
// не удобно столько писать руками:

// const elem1 = React.createElement('span', { children: 'Привет' });
// const elem2 = React.createElement('span', { children: 'мир' });

// const element = React.createElement('div', {
//   a: 5,
//   b: 10,
//   children: [elem1, ' ', elem2]
// })

// console.log(element);

// ReactDOM.render(element, document.querySelector('#root'))

// ========================================================
// воспользуемся JSX:

// const elem1 = <span>Привет</span>;
// const elem2 = <span>мир</span>;

// // const jsxElements = <div>Привет мир</div>;
// const jsxElements = (<div>{elem1} { elem2}</div>); // JSX-выражение, как инрерполяция
// console.log(jsxElements);

// ================================================
// компонент = это просто функция

// function Painting(props) {
//   console.log(props);
//   return (
//     <div>
//       <img src="" alt="" width="480" />
//       <h2></h2>
//       <p>Автор: <a href=""></a></p>
//       <p>Цена: кредитов</p>
//       <p>Доступность: заканчивается или есть в наличии</p>
//       <button type="button">Добавить в корзину</button>
//     </div>
//   );
// }

// // ReactDOM.render(<Painting a="5" b={10}/>, document.querySelector('#root'));
// ReactDOM.render(<Painting a="5" b={10} />, document.querySelector('#root'));


// если пытаемся зарендерить painting с маленькой буквы, то в разметке получим тег < painting > - нонсенс;
// если при рендере имя JSX-тега мы указываем с большой буквы, то для нас это имя переменной,
// которую он пытаеся найти в доступной области видимости - правильно.