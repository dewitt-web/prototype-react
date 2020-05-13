# Contribution Guidelines

## Git Workflow
Please follow [GitHub flow](https://guides.github.com/introduction/flow/) - create a branch for each new feature, fix, etc, then submit a pull request (PR) to merge into the `master` branch. When merging PRs, use squash merge to ensure a flat branch and ensure the merge title follows the [Conventional Commit](https://www.conventionalcommits.org/en/v1.0.0/) specification for future changelog and release automation.

## Docker-based Environment Setup (Optional)
This is optional, but if you'd prefer to use Docker, you can simply run these two commands to use the provided `Dockerfile`:
- `docker build -t prototype-react .`
- `docker run --rm -it -p 3000:3000 -p 9229:9229 -p 9009:9009 -v $(pwd):/prototype-react prototype-react`
  - NOTE: If using PowerShell or CMD, replace `$(pwd)` - `$(pwd).Path` for PowerShell or `%CD%` for CMD
- Run your terminal commands as needed
- `exit` when done

## Creating Components
Storybook has been added as visual documentation of presentation components. Use this tool (use `npm run storybook`) when creating any type of component. For presentation components, it provides a place to visually test and document your work. For non-presentation components, it shows the presentation component options - similar to how bootstrap or semantic ui components are documented.

### "Leaky" Presentation Components
**Avoid using CSS or exposing element, component, or prop names related to design outside of the presentation folder.** This not only helps some developers stay blissfully separated from design (just don't touch the presentation folder), but also avoids duplication throughout the code base - making design changes that span the full application far easier for a web designer to perform. Though I've tried to make this fairly comprehensive, design-related names include but aren't limited to:
- display/hide/show/autohide/visible/invisible/grow/shrink (Instead, expose a state like "collapsed", "open/closed", "on/off")
- animation/transitions/delays/fade (or anything else related to motion design)
- positioning/placement/scroll behavior (Ex. "left/right/top/bottom", "fixed", "sticky")
- layout/flow/alignment/justification (Ex. "grid", "inline", "block", "table", "column", "row", "center")
- orientation/stacking/direction (Ex. "horizontal/vertical")
- color/contrast (Ex. "light", "dark", "blue")
- border
- background/foreground/"striped"
- sizing (Ex. "small/big", "xs/sm/m/lg/xl")
- font (Ex. font-family, font-style)
- hover (when used to turn on/off hover styling)
- "responsive"
- "sr-only"

Documentation for many pre-built component libraries (bootstrap, semantic ui, etc) encourage you to use these details all throughout your code base, but this represents a [leaky abstraction](https://en.wikipedia.org/wiki/Leaky_abstraction). To mitigate the problems that come with a leaky abstraction, we can simply wrap/decorate the offending code with another class, function, etc. This allows us to make parts of an interface private again. In React (and other web component libraries), we can do this with a wrapper component (similar to an [HOC](https://reactjs.org/docs/higher-order-components.html#convention-pass-unrelated-props-through-to-the-wrapped-component)). For example, if we want to use React Bootstrap's `<Button>`, we can wrap it with our own presentation component like this:
```js
import RBButton from 'react-bootstrap/Button'

const Button = ({ variant, size, block, ...props }) => {
  // "light" & "dark" are bad variants to pass in from the outside,
  // but we could still use them inside this function
  // For example, "light" can be our default coloration:
  const nonLeakyVariant = !['light', 'dark'].includes(variant) ? variant : 'light'

  // Since size & block were destructured above, they aren't included in the props below
  return <RBButton variant={nonLeakyVariant} {...props} />
}

export default Button
```

Button's possible `variant` values are mostly semantic, except "light" and "dark". Also "size" and "block" props represent design details/decisions that encourage developers to pass them in from the outside. One way to prevent that is to simply not pass them along (and/or set them to a static value). We could also use [proptypes](https://reactjs.org/docs/typechecking-with-proptypes.html) to re-define the API and simply pass everything on to the inner component like `<RBButton { ...props}/>
