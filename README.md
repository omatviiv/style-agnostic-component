React template compatible with style agnostic components approach.

# style agnostic component approach
Component is implemented in a way that in its JSX structure all tags and styles
are coming from one single conponent property `theme`.
Thanks to [styled-components](https://styled-components.com/) we can
create a map (`theme` property object) of styled components where each will
represent a specific node in the JSX structure of the component.

Thus when following the rule above we are achieving complete style separation
from the component structure and logic.

# Build setup notes
The component is provided as is without any bundling or transformation.
It is responsibility of the destination project to build it and bundle.
Which means that this approach will only work in the infrastructure where
all projects share same eslint rules and build configuration.

This particular project also contains a component demo for convenience of
development and testing. And the demo project is very similar to 
[react-template](https://github.com/omatviiv/react-template#setup-notes).
Except that its buildable src/ is demo/ and stores not the component itself
but demo pages for the component.

# node & npm versions
Project created with node 18 and npm 8.
