import { getPermalink, getBlogPermalink } from './utils/permalinks';

export const headerData = {
  links: [
    {
      text: 'Home',
      href: getPermalink('/'),
    },
    {
      text: 'Scholarship',
      href: getPermalink('scholarship', 'category'),
    },
    {
      text: 'Sarkari Yojana',
      href: getPermalink('sarkari-yojana', 'category'),
    },
    {
      text: 'Sarkari Job',
      href: getPermalink('sarkari-job', 'category'),
    },
    {
      text: 'Result & Admit Card',
      href: getPermalink('result', 'category'),
    },
    {
      text: 'Education',
      href: getPermalink('education', 'category'),
    },
  ],
  actions: [{ text: 'All Posts', href: getBlogPermalink() }],
};

export const footerData = {
  links: [
    {
      title: 'Categories',
      links: [
        { text: 'Scholarship', href: getPermalink('scholarship', 'category') },
        { text: 'Sarkari Yojana', href: getPermalink('sarkari-yojana', 'category') },
        { text: 'Sarkari Job', href: getPermalink('sarkari-job', 'category') },
        { text: 'Result & Admit Card', href: getPermalink('result', 'category') },
        { text: 'Education / Career', href: getPermalink('education', 'category') },
      ],
    },
    {
      title: 'Important Links',
      links: [
        { text: 'About Us', href: getPermalink('/about') },
        { text: 'Contact Us', href: getPermalink('/contact') },
        { text: 'Privacy Policy', href: getPermalink('/privacy') },
        { text: 'Terms & Conditions', href: getPermalink('/terms') },
        { text: 'Disclaimer', href: getPermalink('/disclaimer') },
      ],
    },
  ],
  secondaryLinks: [
    { text: 'Terms', href: getPermalink('/terms') },
    { text: 'Privacy Policy', href: getPermalink('/privacy') },
  ],
  socialLinks: [],
  footNote: `© 2026 Ampick. All rights reserved.`,
};
