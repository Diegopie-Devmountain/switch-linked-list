# Nintendo Switch Linked List

Use a linked list to show the home row of games on this digital Nintendo Switch. We should only ever see 10 games on the home screen.

New games append to the left of the screen and the oldest game is removed when a 10th game is added.

The JSX is mostly done for you. You just have to interact with the `handleGameInstall` function to add a new node to your list. You'll see that the data you will use is already stored in a gameData variable

## Step One: Create Your Linked List Class

In order to have any of this work, you will need to write the `prepend` method and the `toArray` method in `/data/linked-list.js`

Once you have that working, you can update the `handleGameInstall` to interact with your list

## Step Two: Update State

With a working list, you will need to:

* use `gameList.current` to interact with your linked list class
* Use the toArray method to convert your list into an array
* And update `yourGames` state to render the game you just installed

This will get you most of the way there! There are two things to consider, however. How to handle when a user tries to install the same game and how to limit the linked list to only show 10 games on the home screen.

These will be problems to solve at the end

## Step Three: Remove Games

The `handleRemove` function is used to delete a selected game when clicking it's 'X' button. You can see that the data parameter is giving you the game data already.

You will need to create the `remove` method on your linked list and then call it in this function to remove the game from the screen:

* Create `remove` method on list
* Call remove method in `handleRemove`
* Call `toArray` to get new list
* Update `yourGames` state