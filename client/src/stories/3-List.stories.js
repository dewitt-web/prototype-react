import React from 'react'
import { Page, Text, List } from '../presentation'

export default { title: 'List', component: List }

export const Basic = () => {
  const numArray = [1, 2, 3]
  return (
    <Page>
      <main>
        <Text>
          <p><strong>Ensure that ul/ol is inside the List, while li is outside List.Item for valid HTML.</strong></p>
        </Text>

        <List>
          <ul>{numArray.map((num, idx) =>
            <li><List.Item key={idx}>{num}</List.Item></li>
          )}</ul>
        </List>
      </main>
    </Page>
  )
}
