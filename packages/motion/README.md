# Motion

Motion design should derive from our core design principles. Inspiration for motion design is rooted in the design of the printing press — [the machine that brings our paper to life](https://www.youtube.com/watch?v=ryjcWzzGQXA).
 
The printing press has a sequence of motions that build upon each other to deliver the final product to the reader. Likewise, motion in our products should serve a purpose. Motion builds on the user experience through intelligent feedback and brings our products to life. Motion helps guide our users through their experience.

## Direction, Weight & Force

The various parts of the printing press — gears, knobs, and levers —  each have distinct ***direction*** *and* ***weight.*** They move along a fixed axis and connect to the overall machine which produces the paper. When designing for motion, think of the UI elements as physical objects, each with its own **force** applied to it.

## Weighted UI Types

The printing press's parts vary widely in size and shape. Some are small and move fast, while others are big and require great force to drive them. Some parts have a massive influence despite being quite small— these include elements like levers and switches. Parts are weighted by their importance and as a result act similar to heavier objects.

- **Direction** - is defined by the input from a user (drag, swipe, scroll).
- **Weight** - is defined size or influence of UI element.
- **Force** - is the relationship of weight and direction resulting in a motion.


## Timing & Delay

When adding timing to your animations, always use multiples of 100ms. The shortest duration should be 200ms. To increase duration, multiply 100ms by a "modifier". A modifier is a *whole number* — also known as an "integer." Read on to learn more about timing.

Timing in animation comes down to feel. Sometimes a short amount of time is desirable because it increases the *visual speed*. Sometimes a bit more time is better because it provides a more subtle transition. Whenever choosing the duration of timing and delays, always consider the following: 

### Delta size
Delta means "change." Ask yourself: How big is the change? How significantly is your object rotating, scaling, or moving from its original state? The larger the delta, the more time is likely needed to avoid a rough transition.

### Quantity of elements
How many elements are going to be moving at the same time? How many different directions will they be traveling in? If you have lots of elements moving at the same time, consider a longer duration. This helps to avoid visual overload and confusion.

### Sequence
If an element is a part of a sequence of motions, carefully consider whether more or less time is needed. Objects should move in a logical order and not move at a pace that overwhelms the user.

