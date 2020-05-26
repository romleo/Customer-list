const random = (arr) => {
    return arr[Math.floor(Math.random() * arr.length)];
};

const surName = () => {
    return random(['Smith', 'Oliynuk', 'Juliani', 'Ivanov', 'Petrov', 'Sidorchuk','Rusinchyk']);
};

const name = () => {
    return random(['Ivan', 'Greg', 'Bob', 'Olga', 'Nikolay' ,'Zlata']);
};

const city = () => {
    return random([
        'London',
        'Paris',
        'Lviv',
        'Kyiv',
        'Stokcgolm',
        'Melburn',
        'Havana',
        'Minsk',
        'Berlin',
        'Mosckov'
    ]);
};

const email = () => {
    return random([
        '',
        'Cardigans@yahoo.com',
        'Crew_and_Scoop@gmail.com',
        'V_Neck@ukr.net',
        'Shoesiser@yandeks.ru',
        'Cowl&Turtleneck@gmail.com'
    ]);
};

const subscription = () => {
    return Math.floor(Math.random() * 10000);
};

function generate(count) {
    const data = [];
    for(let i = 0; i < count; i++) {
        const currentName = name();
        const currentSurName = surName();
        const currentEmail = email();
        const currentCity = city();
        const currentSubscription = subscription();

        data.push({
            name: `${currentName} ${currentSurName}`,
            firstName: currentName,
            surName: currentSurName,
            city: currentCity,
            email: currentEmail,
            subscription: currentSubscription,
            salesSubscription: currentSubscription * .8
        });
    }
    return data;
}

export default generate