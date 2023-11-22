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
    articles:[
        {
            title:'Secrets To An Amazing Role Playing Game',
            img:'/img/articles/blog-item-1.png'
        },
        {
            title:'Top 5 Most Important Aspects Of Your Game',
            img:'/img/articles/blog-item-5.png'
        },
        {
            title:'The Rise Of Fantasy Sports And Online Games',
            img:'/img/articles/blog-item-6.png'
        },
        {
            title:'Benefits Of Gaming - PC And Video Games',
            img:'/img/articles/blog-item-7.png'
        },
    ],
    social:[
        {
            name:'Youtube',
            icon:'fa-youtube'
        },
        {
            name:'Twitch',
            icon:'fa-twitch'
        },
        {
            name:'Facebook',
            icon:'fa-facebook'
        },
        {
            name:'Instagram',
            icon:'fa-instagram'
        }
    ],
    QuickLinks:[
        'Games',
        'Latest Tournament',
        'Shop',
        'Blog',
        'Contact',
    ],
    Help:[
        'Faqs',
        'Terms & Conditions',
        'Privacy',
    ],
    FollowUs:[
        'Facebook',
        'Twitter',
        'Instagram',
        'Youtube',
        'Github',
    ],
    

})