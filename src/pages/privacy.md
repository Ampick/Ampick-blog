---
import Layout from '~/layouts/PageLayout.astro';
import Hero from '~/components/widgets/Hero.astro';

const metadata = {
  title: 'Privacy Policy - Ampick',
  description: 'Read the privacy policy of Ampick to understand how we collect, use, and protect your personal information.',
};
---

<Layout metadata={metadata}>
  <Hero
    tagline="Privacy Policy"
    title="Privacy Policy for Ampick"
    subtitle="Last updated: October 31, 2026"
  />

  <section class="px-4 py-16 sm:px-6 mx-auto lg:px-8 max-w-4xl prose dark:prose-invert">
    <p>
      At <strong>Ampick</strong>, accessible from <strong>https://www.ampick.xyz/</strong>, one of our main priorities is the privacy of our visitors. This Privacy Policy document contains types of information that is collected and recorded by Ampick and how we use it.
    </p>

    <p>
      If you have additional questions or require more information about our Privacy Policy, do not hesitate to contact us through our Contact page.
    </p>

    <h2>1. Information We Collect</h2>
    <p>
      We collect personal information that you voluntarily provide to us when you express an interest in obtaining information about us or our products and services, when you participate in activities on the website (such as filling out our contact form), or otherwise when you contact us.
    </p>
    <ul>
      <li><strong>Personal Information:</strong> Name, Email address, and message content submitted via contact forms.</li>
      <li><strong>Log Files:</strong> Ampick follows a standard procedure of using log files. These files log visitors when they visit websites. The information collected by log files include internet protocol (IP) addresses, browser type, Internet Service Provider (ISP), date and time stamp, referring/exit pages, and possibly the number of clicks.</li>
    </ul>

    <h2>2. Cookies and Web Beacons</h2>
    <p>
      Like any other website, Ampick uses 'cookies'. These cookies are used to store information including visitors' preferences, and the pages on the website that the visitor accessed or visited. The information is used to optimize the users' experience by customizing our web page content based on visitors' browser type and/or other information.
    </p>

    <h2>3. Google DoubleClick DART Cookie</h2>
    <p>
      Google is one of a third-party vendor on our site. It also uses cookies, known as DART cookies, to serve ads to our site visitors based upon their visit to www.ampick.xyz and other sites on the internet. However, visitors may choose to decline the use of DART cookies by visiting the Google ad and content network Privacy Policy at the following URL: <a href="https://policies.google.com/technologies/ads" target="_blank" rel="noopener noreferrer">https://policies.google.com/technologies/ads</a>
    </p>

    <h2>4. Our Advertising Partners</h2>
    <p>
      Some of advertisers on our site may use cookies and web beacons. Our advertising partners are listed below. Each of our advertising partners has their own Privacy Policy for their policies on user data.
    </p>
    <ul>
      <li>
        <strong>Google:</strong> <a href="https://policies.google.com/technologies/ads" target="_blank" rel="noopener noreferrer">https://policies.google.com/technologies/ads</a>
      </li>
    </ul>

    <h2>5. Third Party Privacy Policies</h2>
    <p>
      Ampick's Privacy Policy does not apply to other advertisers or websites. Thus, we are advising you to consult the respective Privacy Policies of these third-party ad servers for more detailed information. It may include their practices and instructions about how to opt-out of certain options.
    </p>

    <h2>6. Consent</h2>
    <p>
      By using our website, you hereby consent to our Privacy Policy and agree to its terms.
    </p>
  </section>
</Layout>
