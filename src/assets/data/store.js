import {reactive} from 'vue';
export const store= reactive ({
    menu:[
        {title: 'Home',
        sublinks: null,
        },
        {title: 'Games',
        sublinks: [
            'Games',
            'Games Details',
            'Match details',
        ]
        },
        {title: 'Shop',
        sublinks: [
            'Shop Single',
            'Shop Single 2',
            'Shop Single 3',
            'Shop Single 4',
        ]
        },
        {title: 'Pages',
        sublinks: [
            'About Us',
            'Team',
            'Player',
            'Upcoming Matches',
            'FAQs',
            'Privacy Policy',
            'Terms',
            'Error',
        ]
        },
        {title: 'Blog',
        sublinks: [
            'Blog',
            'Blog Single',
        ]
        },
        {title: 'Contact',
        sublinks: null,
        },

    ],
    menuShow: false,
    playVideo:false,
    features:[
        {
            title: 'Live Streaming',
            text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero fugit placeat nostrum tempor incididunt ut labor.',
            img: '/img/features/features-icon-1.png'
        },
        {
            title: 'Great Tournament',
            text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero fugit placeat nostrum tempor incididunt ut labor.',
            img: '/img/features/features-icon-2.png'
        },
        {
            title: 'Gaming News',
            text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero fugit placeat nostrum tempor incididunt ut labor.',
            img: '/img/features/features-icon-3.png'
        },
    ],
    quickFacts:[
        {
            number: 575,
            label:'Twitch streams'
        },
        {
            number: 87,
            label:'Total Games'
        },
        {
            number: 234,
            label:'Youtube streams'
        },
        {
            number: 42,
            label:'Pro Team'
        },
    ],
    testimonials:[
        {
            name:'Merle Fisher',
            from:'United States',
            
            img:'/img/testimonials/testimonials-image-1.png'
        },
        {
            name:'Garry Francis',
            from:'Kiribati',
            img:'/img/testimonials/testimonials-image-2.png'
        },
        {
            name:'Kim Ramos',
            from:'Serbia',
            img:'/img/testimonials/testimonials-image-3.png'
        },
    ],
    articles:[
        {
            title:'Secrets To An Amazing Role Playing Game',
            img:'/img/articles/blog-item-1.png'
        },
        {
            title:'Top 5 Most Important Aspects Of Your Game',
            img:'/img/articles/blog-item-2.png'
        },
        {
            title:'The Rise Of Fantasy Sports And Online Games',
            img:'/img/articles/blog-item-3.png'
        },
        {
            title:'Benefits Of Gaming - PC And Video Games',
            img:'/img/articles/blog-item-4.png'
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