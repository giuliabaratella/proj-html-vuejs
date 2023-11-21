import {reactive} from 'vue';
export const store= reactive ({
    quickFacts:[
        {
            number: 5000,
            label:'Twitch streams'
        },
        {
            number: 85,
            label:'Total Games'
        },
        {
            number: 2000,
            label:'Youtube streams'
        },
        {
            number: 100,
            label:'Pro Team'
        },
    ],

})