
// NAVIGATION LINK CONFIGURATION
import services_first from "../assets/images/home/untitled-design.png"
import services_second from "../assets/images/home/untitled-design-second.png"
import services_three from "../assets/images/home/untitled-design-three.png"
import services_fourth from "../assets/images/home/untitled-design-fourth.png"
import { ABOUT_LINK, CAREERS_LINK, CONTACT_LINK, FACEBOOK_LINK, INSTAGRAM_LINK, LINKEDIN_LINK, SERVICES_LINK, TWITTER_LINK } from "./constants";

export const NAVIGATION_LINK_LIST = [
    {
        title: "Home",
        url: "/",
    },
    {
        title: "About",
        url: ABOUT_LINK,
    },
    {
        title: "Careers",
        url: CAREERS_LINK,
    },
    {
        title: "Contact",
        url: CONTACT_LINK,
    },
    {
        title: "Service",
        url: SERVICES_LINK,
    },

]

export const FOOTER_NAVIGATION_LINK_LIST = [
    {
        title: "USEFUL LINKS",
        footerLinks: [
            {
                title: "Our Services",
                url: "/our-services",
            },
            {
                title: "Payment Methods",
                url: "/payment",
            },
            {
                title: "Services Guide",
                url: "/services",
            },
            {
                title: "FAQs",
                url: "/faqs",
            },
        ]
    },
    {
        title: "OUR SERVICES",
        footerLinks: [
            {
                title: "Cloud Services",
                url: "/our-services",
            },
            {
                title: "Tech Support",
                url: "/payment",
            },
            {
                title: "Data Security",
                url: "/services",
            },
            {
                title: "Software Dev",
                url: "/faqs",
            },
        ]
    },
    {
        title: "ABOUT",
        footerLinks: [
            {
                title: "About Us",
                url: "/our-services",
            },
            {
                title: "Send a Message",
                url: "/payment",
            },
        ]
    },
    {
        title: "OUR ADDRESS",
        address: "12345 Porto Blvd. Suite 1500 Los Angeles, California 90000",
    },
    {
        title: "OUR CONTACTS",
        address: "SUPPORT",
        sales: "SALES",
        number: "800-123-4567",
        salesNumber: "800-123-4568",
    },

];

export const SOCIL_MEDIA_LIST = [
    {
        icon: "facebook",
        url: FACEBOOK_LINK,
    },
    {
        icon: "instagram",
        url: INSTAGRAM_LINK,
    },
    {
        icon: "twitter",
        url: TWITTER_LINK,
    },
    {
        icon: "linkedin",
        url: LINKEDIN_LINK,
    },
];

export const OUR_SERVICES_CARD_DATA_LIST = [
    {
        title: 'Cloud Services',
        image: services_first,
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc viverra erat orci.',
    },
    {
        title: 'Tech Support',
        image: services_second,
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc viverra erat orci.',
    },
    {
        title: 'Data Security',
        image: services_three,
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc viverra erat orci.',
    },
    {
        title: 'Software Dev',
        image: services_fourth,
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc viverra erat orci.',
    },
]
export const OUR_SERVICES_THREE_CARD_DATA_LIST = [
    {
        title: 'BRAINSTORM',
        id: 1,
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    },
    {
        title: 'DEVELOPMENT',
        id: 2,
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    },
    {
        title: 'DELIVERY',
        id: 3,
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    },

]