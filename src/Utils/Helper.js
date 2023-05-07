import { YOUTUBE_BASE_URL } from "./const"

export const getYoutubePopularVideo = async () => {

   let res = await fetch(YOUTUBE_BASE_URL);
   let data = await res.json();

   return data;

}

const nameList = [
   'Time', 'Past', 'Future', 'Dev',
   'Fly', 'Flying', 'Soar', 'Soaring', 'Power', 'Falling',
   'Fall', 'Jump', 'Cliff', 'Mountain', 'Rend', 'Red', 'Blue',
   'Green', 'Yellow', 'Gold', 'Demon', 'Demonic', 'Panda', 'Cat',
   'Kitty', 'Kitten', 'Zero', 'Memory', 'Trooper', 'XX', 'Bandit',
   'Fear', 'Light', 'Glow', 'Tread', 'Deep', 'Deeper', 'Deepest',
   'Mine', 'Your', 'Worst', 'Enemy', 'Hostile', 'Force', 'Video',
   'Game', 'Donkey', 'Mule', 'Colt', 'Cult', 'Cultist', 'Magnum',
   'Gun', 'Assault', 'Recon', 'Trap', 'Trapper', 'Redeem', 'Code',
   'Script', 'Writer', 'Near', 'Close', 'Open', 'Cube', 'Circle',
   'Geo', 'Genome', 'Germ', 'Spaz', 'Shot', 'Echo', 'Beta', 'Alpha',
   'Gamma', 'Omega', 'Seal', 'Squid', 'Money', 'Cash', 'Lord', 'King',
   'Duke', 'Rest', 'Fire', 'Flame', 'Morrow', 'Break', 'Breaker', 'Numb',
   'Ice', 'Cold', 'Rotten', 'Sick', 'Sickly', 'Janitor', 'Camel', 'Rooster',
   'Sand', 'Desert', 'Dessert', 'Hurdle', 'Racer', 'Eraser', 'Erase', 'Big',
   'Small', 'Short', 'Tall', 'Sith', 'Bounty', 'Hunter', 'Cracked', 'Broken',
   'Sad', 'Happy', 'Joy', 'Joyful', 'Crimson', 'Destiny', 'Deceit', 'Lies',
   'Lie', 'Honest', 'Destined', 'Bloxxer', 'Hawk', 'Eagle', 'Hawker', 'Walker',
   'Zombie', 'Sarge', 'Capt', 'Captain', 'Punch', 'One', 'Two', 'Uno', 'Slice',
   'Slash', 'Melt', 'Melted', 'Melting', 'Fell', 'Wolf', 'Hound',
   'Legacy', 'Sharp', 'Dead', 'Mew', 'Chuckle', 'Bubba', 'Bubble', 'Sandwich', 'Smasher', 'Extreme', 'Multi', 'Universe', 'Ultimate', 'Death', 'Ready', 'Monkey', 'Elevator', 'Wrench', 'Grease', 'Head', 'Theme', 'Grand', 'Cool', 'Kid', 'Boy', 'Girl', 'Vortex', 'Paradox'
];


export const generateName = () => {
   let finalName = nameList[Math.floor(Math.random() * nameList.length)];
   return finalName
};

export const generateMessage = (length) => {
   let result = '';
   const characters = 'ABCDEFG HIJKLMNOPQRSTUVWXYZ abcdefghijklmnopqrst uvwxyz0123456789 ';
   const charactersLength = characters.length;
   let counter = 0;
   while (counter < length) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
      counter += 1;
   }
   return result;
}

export const convertIntoShortNumber = (num) => {
   if (num.length > 3 && num.length <= 6) {
      num = num.replace(num.substr(-3), "K")
   }

   if (num.length > 6 && num.length <= 9) {
      num = num.replace(num.substr(-6), "M")
   }

   if (num.length > 9 && num.length <= 12) {
      num = num.replace(num.substr(-9), "B")
   }

   return num;

}

export const getPublishedAtSimplified = (publishedDate) => {

   let difference = new Date() - new Date(publishedDate)

   let allVariable = ["year", "months", "week", "days", "hours", "minutes", "seconds"];
   let allDifference = [];

   let differences = {
      year: difference / (1000 * 60 * 60 * 24 * 365),
      months: difference / (1000 * 60 * 60 * 24 * 30),
      week: difference / (1000 * 60 * 60 * 24 * 7),
      days: difference / (1000 * 60 * 60 * 24),
      hours: difference / (1000 * 60 * 60),
      minutes: difference / (1000 * 60),
      seconds: difference / (1000)
   }


   for (let i = 0; i < allVariable.length; i++) {
      let diffInObj = {
         type: allVariable[i],
         diff: Math.round(differences[allVariable[i]])
      }
      allDifference.push(diffInObj);
   }

   for (let i = 0; i < allDifference.length; i++) {
      if (allDifference[i].diff > 0) {
         return allDifference[i];
      }
   }

}
