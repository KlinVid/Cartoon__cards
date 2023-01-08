
let myCard = [

    {
        poster: 'poster1.png',
        type: 'blu-ray.png',
        sale: 'promotion.png',
        title1: 'Тайная жизнь',
        title2: 'домашних животных 2',
        price: 50,
        sale_percent: 10,
        currency: 'руб.',
        rating: 2.5, //1...5 (.4)
        button: 'order.png',
        promotion: true
    },


    {
        poster: 'poster2.png',
        type: 'blu-ray.png',
        sale: 'promotion.png',
        title1: 'История игрушек 4',
        title2: 'Приключение Вилкинса',
        price: 60,
        sale_percent: 10,
        currency: 'руб.',
        rating: 4.5, //1...5 (.4)
        button: 'order.png',
        promotion: true
    },

    {
        poster: 'poster3.png',
        type: 'blu-ray.png',
        sale: 'promotion.png',
        title1: 'Фердинанд',
        title2: 'Побег из коровника',
        price: 40,
        sale_percent: 10,
        currency: 'руб.',
        rating: 3.5, //1...5 (.4)
        button: 'order.png',
        promotion: true
    }
];

//Перебор массива myCard, состоящий из трех элементов
for (i=0; i<myCard.length; i++){

    // // Перебор объектов внутри массива myCard
    // for (let key in myCard[i]){

    // }


    //Формат полной стоимости
    let fullPrice = `${myCard[i].price},00 ${myCard[i].currency}`;

    //Формат скидки
    let salePrice = myCard[i].price - (myCard[i].sale_percent*myCard[i].price/100);
    salePrice = `${Math.round(salePrice)},00 ${myCard[i].currency}`;

    //расчет рейтинга
    let rank = '';

    switch(myCard[i].rating){

        case 1:
            rank = 'star star_border star_border star_border star_border ';
            break;

        case 1.5:
            rank = 'star star_half star_border star_border star_border ';
            break;

        case 2:
            rank = 'star star star_border star_border star_border ';
            break;

        case 2.5:
            rank = 'star star star_half star_border star_border ';
            break;

        case 3:
            rank = 'star star star star_border star_border ';
            break;

        case 3.5:
            rank = 'star star star star_half star_border ';
            break;

        case 4:
            rank = 'star star star star star_border ';
            break;

        case 4.5:
            rank = 'star star star star star_half ';
            break;

        case 5:
            rank = 'star star star star star ';
            break;

        default:
            rank = 'star_border star_border star_border star_border star_border'
            break;


    }

    //Цена со скидкой
    let divPrice = '', vis = '';
    if (myCard[i].promotion){
        divPrice = `
        <div>${salePrice}</div>
        <div>${fullPrice}</div>
        `;

        vis = '1';
    } 
    // без скидки
    else {
        divPrice = `
        <div>${fullPrice}</div>
        `;
        
        vis = '0';

    }

        let s = `
    <div class="card">
        <div class="poster">
            <img src="images/${myCard[i].poster}" alt=""> 

            <img style="opacity: ${vis} ;"src="images/${myCard[i].sale}" alt="">
            <img src="images/${myCard[i].type}" alt="">
        </div>

        <div class="title">
            <div>${myCard[i].title1}</div>
            <div>${myCard[i].title2}</div>
        </div>

        <div class="price">
            ${divPrice}
        </div>  

        <div class="rating">
            <span class="material-icons">
                ${rank}
            </span>

        </div>

        <div class="order">
            <img src="images/${myCard[i].button}" alt="">
        </div>


    </div>


    `;

    document.querySelector('#cards').innerHTML += s;

}