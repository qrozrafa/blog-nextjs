import { GithubIcon, LinkedinIcon } from '@/components/Icons';
import { MainNavType } from '@/models';

export const socialLinkConfig: MainNavType = {
  mainNav: [
    {
      title: 'Linkedin',
      href: 'https://www.linkedin.com/in/qrozrafa/',
      icon: <LinkedinIcon size={28} />
    },
    {
      title: 'Github',
      href: 'https://github.com/qrozrafa',
      icon: <GithubIcon size={28} />
    }
  ]
};
