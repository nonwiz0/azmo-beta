---
blocks:
  - body: Testing in put
    author: Author input test
    color: tint
    _template: verse
  - quote: >-
      There are only two hard things in Computer Science: cache invalidation and
      naming things.zcvzxcvx
    author: Phil Karlton
    color: primary
    _template: testimonial
  - tagline: '#12312312'
    headline: Welcome to Azmo
    text: >
      This project is set up to show you the basics of working with Tina. You're
      looking at the landing page, which pulls content from
      `content/pages/home.md`, components from `components/blocks`, and puts
      them all together in `pages/[filename].tsx`, all based on a schema defined
      in `.tina/schema.ts`.
    actions:
      - label: Get Started
        type: button
        icon: true
        link: /posts
      - label: Read Blog
        type: link
        icon: false
        link: /posts
    image:
      src: >-
        http://res.cloudinary.com/azmo/image/upload/v1637292688/vlog_journey_yen6eo.png
      alt: Tina
    color: default
    _template: hero
  - items:
      - icon:
          color: red
          style: float
          name: code
        title: Amazing Feature
        text: >-
          Aliquam blandit felis rhoncus, eleifend ipsum in, condimentum nibh.
          Praesent ac faucibus risus, eu lacinia enim.
      - icon:
          color: primary
          style: float
          name: like
        title: This Is a Feature
        text: Vestibulum ante ipsum primis in faucibus orci luctus et ultrices.
      - icon:
          color: green
          style: float
          name: palette
        title: Configurable Theme
        text: >-
          Edit global theme configuration with Tina. Change your theme's primary
          color, font, or icon set.
    color: tint
    _template: features
---

