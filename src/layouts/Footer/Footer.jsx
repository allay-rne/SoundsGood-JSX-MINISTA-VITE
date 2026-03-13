import './Footer.scss'
import Socials from "@/components/Socials";

const Footer = () => {
  const menuItems = [
    {
      title: 'Home',
      links: ['Add Release', 'Streaming Platforms', 'Pricing', 'FAQ']
    },

    {
      title: 'Music',
      links: ['Genres', 'Trending', 'New Release', 'Popular']
    },

    {
      title: 'Artists',
      links: ['Popular', 'Trending', 'Foreigners', 'Russians']
    },

    {
      title: 'Support',
      links: ['Contact Us']
    },

    {
      title: 'Subscription',
      links: ['Plans', 'SFeatures']
    },

    {
      title: 'Connect With Us',
      socialLinks: [
        {
          label: 'Gmail',
          iconName: 'gmail',
        },

        {
          label: 'Telegram',
          iconName: 'telegram',
        },

        {
          label: 'Vk',
          iconName: 'vk',
        },
      ]
    },

  ]

  const extraLinks = ['Terms of Use', 'Privacy Policy', 'Cookie Policy']

  return (
    <footer className="footer">
      <div className="footer__inner container">
        <nav className="footer__menu">
          {menuItems.map(({ title, links, socialLinks }, index) => (
            <div className="footer__menu-column" key={index}>
              <a
                className="footer__menu-title h6"
                href="/"
              >
                {title}
              </a>
              {links?.length > 0 && (
                <ul className="footer__menu-list">
                  {links.map((link, index) => (
                    <li className="footer__menu-item" key={index}>
                      <a
                        className="footer__menu-link"
                        href="/"
                      >
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              )}
              {socialLinks?.length > 0 && (
                <Socials className="footer__soc1als" links={socialLinks}/>
              )}
            </div>
          ))}
        </nav>
        <div className="footer__extra">
          <p className="footer__copyright">
            @<time dateTime="2026">2026</time> soundsgood, All Rights Reserved
          </p>
          <div className="footer__extra-links">
            {extraLinks.map((link, index) => (
              <a
                className="footer__extra-link"
                href="/"
                key={index}
              >
                {link}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
