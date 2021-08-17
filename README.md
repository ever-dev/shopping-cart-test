### Overview

There's a product list where you can add to cart, and offers list that you can check or not.
Once you add the products to the cart, they will be shown under the shopping cart list and you can remove one by one.
You can see the total price of the shopping cart in real-time depending on the products in shopping cart and chosen offers.

### Technical choices made
- Created components for each sections.
- Used objects rather than array for products and offers so that they can be accessed in a faster way.
- Since the app was quite simple, I didn't use any of those state management approaches like Redux, MobX, or Context API. Instead, I used a local state inside App component.
- Checked prop types
- The time complexity of the algorithm to calculate the price is O(n).


### Trade-offs
- I would use TypeScript for better typing.
- I would write unit-tests