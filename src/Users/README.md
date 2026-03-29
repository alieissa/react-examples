
## Purpose
The `Users` and `UserForm` components show when a `useEffect` is needed beyond fetching data when a component mounts.
The `useEffect` in `UserForm` is used to sync its state with that of `User`. 

## Notes
By using `useEffect` the changes triggered in `UserForm` and ensuing renders are localized. For example, if the input
change events were handled in `Users`, i.e., the `Users` state was updated on every input change that would have caused
unnecessary renders of any component that was also in `Users`.

In this simple example, the `useEffect` is not strictly necessary. By passing a key to `UserForm` , it would have been 
remounted and its state re-initialized with the selected user. Using a key would have simplfied the code but with the cost of
mounting/unmounting `UserForm` for every user selection.
