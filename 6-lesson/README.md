Vue, Meteor, Angular, React - component approach
Wordpress, Joomla, Bitrix, OpenCart - PHP -> Server side rendering

Liqpay, Stripe, Paypal

React frontend

App -> Main component
    Header
        Logo
        Nav
        Menu 
    Main
        Cards -> делает запрос на сервер
                 получает информацию о карточках -> JSON -> {
                     cards: [
                         { title: 'title 1', img: 'img1' }
                         { title: 'title 2', img: 'img2' }
                         { title: 'title 3', img: 'img3' }
                         { title: 'title 4', img: 'img4' }
                     ]
                 }
                 создает карточки

            Card -> принимают title и img -> возвращают верстку
    Footer
        Logo
        Nav
        Contacts