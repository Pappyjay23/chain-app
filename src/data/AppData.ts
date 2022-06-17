import Icon1 from "../images/service-icon-01.png";
import Icon1H from "../images/service-icon-hover-01.png"
import Icon2 from "../images/service-icon-02.png";
import Icon2H from "../images/service-icon-hover-02.png"
import Icon3 from "../images/service-icon-03.png";
import Icon3H from "../images/service-icon-hover-03.png"
import Icon4 from "../images/service-icon-04.png";
import Icon4H from "../images/service-icon-hover-04.png"

import PricingBgd1 from "../images/regular-table-top.png";
import PricingBgd2 from "../images/regular-table-bottom.png";
import PricingBgd3 from "../images/pro-table-top.png";
import PricingBgd4 from "../images/pro-table-bottom.png";

export const ServiceData = [
    {
        icon: Icon1,
        iconHover: Icon1H,
        title: 'App Maintenance',
        desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
        link: 'Read More'
    },
    {
        icon: Icon2,
        iconHover: Icon2H,
        title: 'Rocket Speed of App',
        desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
        link: 'Read More'
    },
    {
        icon: Icon3,
        iconHover: Icon3H,
        title: 'Multi Workflow Idea',
        desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
        link: 'Read More'
    },
    {
        icon: Icon4,
        iconHover: Icon4H,
        title: '24/7 Help & Support',
        desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
        link: 'Read More'
    }
]

export const AboutData = [
    {
        title: "Maintenance Problems",
        desc: "We help with good maintenance"
    },
    {
        title: "24/7 Help & Support",
        desc: "We are always available to help"
    },
    {
        title: "Fixing Issues About",
        desc: "We fix pending issues"
    },
    {
        title: "Co. Development",
        desc: "We work together to grow and develop"
    },
]

export const ClientData = [
    {
        name: 'David Martino Co',
        date:'30 November 2021',
        rating: '4.8',
        field: 'Financial Apps',
    },
    {
        name: 'Jake Harris Nyo',
        date:'29 November 2021',
        rating: '4.5',
        field: 'Digital Business',
    },
    {
        name: 'May Catherina',
        date:'27 November 2021',
        rating: '4.7',
        field: 'Business & Economics',
    },
    {
        name: 'Mark Amber Doe',
        date:'21 November 2021',
        rating: '4.3',
        field: 'Web Development',
    },
]

export const PriceCardData = [
    {
        price: '$12',
        title: "Standard Plan App",
        desc: ['1 week free maintenance', '20TB of storage'],
        descDone: ['Life time support', 'Premium Add ons', "Fastest Network", 'More options'],
        bgdTop: PricingBgd1,
        bgdBottom: PricingBgd2,
    },
    {
        price: '$25',
        title: "Business Plan App",
        desc: ['2 weeks free maintenance', '50TB of storage', 'Life time support', 'Premium Add ons',],
        descDone: [ "Fastest Network", 'More options'],
        bgdTop: PricingBgd3,
        bgdBottom: PricingBgd4,
    },
    {
        price: '$66',
        title: "Premium Plan App",
        desc: ['1 month free maintenance', '120TB of storage', 'Life time support', 'Premium Add ons', "Fastest Network", 'More options'],
        descDone: [],
        bgdTop: PricingBgd3,
        bgdBottom: PricingBgd4,
    },
]

export const FooterLinks = [
    {
        title: "Contact Us",
        links: ["Rio de Janeiro - RJ, 22795-008, Brazil", "010-020-0340", "info@company.co"]
    },
    {
        title: "About Us",
        links: ['Home', 'Services', 'About', 'Testimonials', 'Pricing']
    },
    {
        title: "Useful Links",
        links: ['Free Apps', 'App Engine', 'Programming', 'Development', 'App News', 'App Dev Team', 'Digital Web', 'Normal Apps']
    },
]