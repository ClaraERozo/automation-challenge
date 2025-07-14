//export const Mi Cuenta = 'Mi Cuenta';
//export const accountMenuLink = 'a[href="/Mi-Cuenta"]'; // or cy.contains('Mi Cuenta') if no href
export const accountMenuLink = 'a:contains(“Mi Cuenta”)'
//export const ordersListLinks = '.order-number a'; // selector for clickable order numbers
export const orderDetailsTitle = 'h2'; // or adjust to match 'Detalles del pedido'
//export const ordersListLinks = 'a:contains(“Ver detalles”):first';
//export const ordersListLinks = 'a[href^=“/my-account/order/“]';
//export const ordersListLinks = 'a:contains(“Ver detalles”)';
//export const firstOrderDetailsLink = 'a:contains(“Ver detalles”)';
export const ordersListLinks = 'a:contains(“Ver detalles”)';
export const firstOrderDetailsLink = () => cy.contains('a', 'Ver detalles');
export const detalles = 'h1.text-4xl.font-bold';