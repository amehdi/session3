// Common functions
const fnCompose = (...fns: Function[]) => (value: any) =>
    fns.reduceRight((prevFn, currFn) => currFn(prevFn), value);

const fnPipe = (...fns: Function[]) => (value: any) =>
    fns.reduce((prevFn, currFn) => currFn(prevFn), value);

// WordCount Sample..
const strToWordArray = (str: string) => str.split(' ');

const arrayRemoveNonWords = (arr: string[]) => arr.reduce((acc, curr) => {
    if (curr.length > 1) acc.push(curr);
    return acc;
}, []);

const arrayLength = (arr: string[]) => arr.length;

const strWordCount = fnPipe(strToWordArray, arrayRemoveNonWords, arrayLength);

console.log(strWordCount('Hi, this is a simple text'));

//Shopping Cart sample: takes only categoryId as argument
interface ShoppingCartItem {
    productId: number,
    categoryId: number,
    count: number,
    fee: number,
}
interface ShoppingCart {
    items: ShoppingCartItem[];
}

const cart: ShoppingCart = {
    items: [
        {
            productId: 101,
            categoryId: 1,
            count: 2,
            fee: 200
        },
        {
            productId: 102,
            categoryId: 1,
            count: 1,
            fee: 300
        },
        {
            productId: 103,
            categoryId: 2,
            count: 3,
            fee: 50
        },
        {
            productId: 104,
            categoryId: 3,
            count: 4,
            fee: 100
        },
    ]
}

const filterCategory = (categoryId: number) => cart.items.filter(i => i.categoryId === categoryId);
const calculateItemsPrice = (items: ShoppingCartItem[]) => items.reduce((p, c) => p + (c.count * c.fee), 0);
const calculateCartTotalPrice = fnPipe(filterCategory, calculateItemsPrice);

console.log(calculateCartTotalPrice(1));

//Shopping Cart sample: takes two arguments: shopping cart and categoryId
// ????
