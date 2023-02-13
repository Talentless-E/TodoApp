import uuid from "react-uuid";
export const getRandomColor = () => {
   let hue = Math.floor(360 * Math.random());
   return "hsl(" + hue + ", 100%, 55%)";
};

export const isToday = (date) => {
   const today = new Date()
      .toLocaleDateString("ru")
      .slice(0, -5)
      .replace(".", "/");

   return today === date;
};
export const isTomorrow = (date) => {
   let tomorrow = new Date();
   tomorrow.setDate(tomorrow.getDate() + 1);
   tomorrow = tomorrow.toLocaleDateString("ru").slice(0, -5).replace(".", "/");

   return tomorrow === date;
};
export const initialState = [
   {
      id: uuid(),
      date: "09/02",
      data: [
         {
            id: uuid(),
            title: "cooking",
            text: "blabla",
            completed: true,
            color: "hsl(27, 100%, 55%)",
         },
         {
            id: uuid(),
            title: "gaming",
            text: "ne blabla",
            completed: false,
            color: "hsl(47, 100%, 55%)",
         },
      ],
   },
   {
      id: uuid(),
      date: "10/02",
      data: [
         {
            id: uuid(),
            title: "baking",
            text: "bla baking",
            completed: false,
            color: "hsl(17, 100%, 55%)",
         },
         {
            id: uuid(),
            title: "do something",
            text: "bla doing",
            completed: true,
            color: "hsl(91, 100%, 55%)",
         },
      ],
   },
];
