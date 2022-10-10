-3 layout made : Header , Section , Footer
-header simply used for name display.
-Cards are in Section.

-i got two components : CardList.js for not writing card twice , in CardList i used static data to pass it by props to render card two times.
(i allso passed diffrent colors)
-Card.js where all those props and styling comes together

-i used module.css for styling.
-in Card.js , body is for seting size of card.
-content is for seting two section of card next to each other(userSection and userDescription).

-moreInfo is to show more detail when hovering on card , i have seted its position absolute based on userDescription.(userDescription -> parent)
and i inline styled it to get colors from props.
-moreInfo by deafult is seted translateX(-100%) so its is hidden becuse body is overflow: hidden , so when body is hovered moreInfos transform is
seted translateX(0%) and it becomes visible.
