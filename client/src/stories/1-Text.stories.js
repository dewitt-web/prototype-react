import React from 'react'
import { Text } from '../presentation'

export default { title: 'Text', component: Text }

export const Basic = () => <Text>
  <h1>Default styling for text</h1>
  <p>
    Other components fight against default styling for text elements (h1-6, p, etc).
    As a result, it's often easier to do a "CSS reset" and give these elements a single, dedicated place for default styling.
  </p>
  <p>
    Typical page body content aside, the Text component can be especially useful with tools that auto-generate
    html (like Markdown generators or headless CMS data)
  </p>
</Text>
