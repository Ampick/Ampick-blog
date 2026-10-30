export interface Link {
  text: string;
  href: string;
  ariaLabel?: string;
  target?: string;
}

export interface MenuLink extends Link {
  links?: Array<Link>;
}

export interface FooterLink {
  title?: string;
  links: Array<Link>;
}

export const headerData = {
  links: [
    {
      text: 'Home',
      href: '/',
    },
    {
      text: 'Scholarship',
      href: '/category/scholarship',
    },
    {
      text: 'Sarkari Yojana',
      href: '/category/sarkari-yojana',
    },
    {
      text: 'Sarkari Job',
      href: '/category/sarkari-job',
    },
    {
      text: 'Result & Admit Card',
      href: '/category/result',
    },
    {
      text: 'Education',
      href: '/category/education',
    },
  ],
  actions: [{ text: 'Latest Posts', href: '#posts', target: '_self' }],
};

export const footerData = {
  links: [
    {
      title: 'Categories',
      links: [
        { text: 'Scholarship', href: '/category/scholarship' },
        { text: 'Sarkari Yojana', href: '/category/sarkari-yojana' },
        { text: 'Sarkari Job', href: '/category/sarkari-job' },
        { text: 'Result & Admit Card', href: '/category/result' },
        { text: 'Education / Career', href: '/category/education' },
      ],
    },
    {
      title: 'Company',
      links: [
        { text: 'About Us', href: '/about' },
        { text: 'Contact', href: '/contact' },
        { text: 'Privacy Policy', href: '/privacy' },
        { text: 'Terms & Conditions', href: '/terms' },
      ],
    },
  ],
  secondaryLinks: [
    { text: 'Privacy Policy', href: '/privacy' },
    { text: 'Terms & Conditions', href: '/terms' },
  ],
  socialLinks: [],
  footNote: `© 2026 Ampick. All Rights Reserved.`,
};
