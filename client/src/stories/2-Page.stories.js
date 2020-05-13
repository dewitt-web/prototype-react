import React from 'react'
import { Page, Text } from '../presentation'

export default { title: 'Page', component: Page }

export const Basic = () => (
  <Page>
    <main>
      <Text>
        <p>
          A page can be as simple as this. Be sure to add the
          "main" element in here somewhere for better semantics
        </p>
      </Text>
    </main>
  </Page>
)

export const Header = () => (
  <Page
    header={<header>
      React Example App - Todos
      <Page.Nav>
        <nav>
          <ul>
            <li><a>Home</a></li>
            <li><a class="active">Todos</a></li>
          </ul>
        </nav>
      </Page.Nav>
    </header>}
  >
    <main>
      <Text>
        <p>
          A page typically needs a nav bar, so we have Page.Nav and a header "slot" for that.
          The header element will often make sense here and the anchor elements will probably come from react-router (Ex. NavLink).
        </p>
      </Text>
    </main>
  </Page>
)

export const Aside = () => (
  <Page
    aside={<aside>
      <Text>
        <p>Example Aside</p>
        <p><strong>NOTE</strong>: Styling will come later</p>
      </Text>
    </aside>}
  >
    <main>
      <Text>
        <p>A page can also have an aside section. The aside element will often make sense when used here.</p>
      </Text>
    </main>
  </Page>
)

export const Footer = () => (
  <Page
    children={<main>
      <Text>
        <p>
          A page can also have a footer section. The footer element will often make sense when used here.
          If you have a footer, it may be easier to read the code if you use the "children" prop for body content.
        </p>
      </Text>
    </main>}
    footer={<footer>
      <Text>
        <p>Example footer</p>
        <p><strong>NOTE</strong>: Styling will come later</p>
      </Text>
    </footer>}
  />
)

export const FullExample = () => (
  <Page
    header={<header>
      React Example App
      <Page.Nav>
        <nav>
          <ul>
            <li><a>Home</a></li>
            <li><a>Todos</a></li>
          </ul>
        </nav>
      </Page.Nav>
    </header>}

    aside={<aside>
      <Text><p>Example aside</p></Text>
    </aside>}

    children={<main>
      <Text><p>Example body</p></Text>
    </main>}

    footer={<footer>
      <Text><p>Example footer</p></Text>
    </footer>}
  />
)

FullExample.story = {
  name: 'Full Example',
}
