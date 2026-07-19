# Portfolio Layout Diagram

This diagram shows the page structure used in `index.html`.

```
+-------------------------------------------------------------+
| header.topbar                                               |
|  +-------------------------------------------------------+  |
|  | profile photo | name | quote                          |  |
|  +-------------------------------------------------------+  |
+-------------------------------------------------------------+
|                                                             |
|  +--------------------------+  +---------------------------+ |
|  | aside.sidebar            |  | main.content-panel        | |
|  |                          |  |                           | |
|  |  - sidebar-name          |  |  section#home             | |
|  |  - sidebar-title         |  |    - title / intro        | |
|  |  - nav.sidebar-nav       |  |    - hero card            | |
|  |    (Home, About, Skills, |  |      - photo              | |
|  |      Projects, Contact)  |  |      - buttons            | |
|  |  - sidebar-social links  |  |  section#about            | |
|  |                          |  |    - about text/cards     | |
|  |                          |  |  section#skills           | |
|  |                          |  |    - skill groups         | |
|  |                          |  |  section#projects         | |
|  |                          |  |    - project cards        | |
|  |                          |  |  section#contact          | |
|  |                          |  |    - contact info         | |
|  |                          |  |    - contact form         | |
|  +--------------------------+  +---------------------------+ |
|                                                             |
+-------------------------------------------------------------+
```

## Notes

- `header` is the page top bar.
- `aside` is the sidebar navigation and social links.
- `main` contains the five content sections.
- Each `section` groups a page area: Home, About, Skills, Projects, Contact.
- `nav` is the set of sidebar buttons that switch between sections.
