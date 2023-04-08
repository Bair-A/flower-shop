export function normalizeArr(comingArr, helpArr, prevArr = []) {
   const resultArr = [];
   let currentIndex = 0;
   if (prevArr.length < helpArr.length) currentIndex += prevArr.length;
   if (prevArr.length > helpArr.length) currentIndex += prevArr.length % helpArr.length;

   for (let i = 0; i < comingArr.length; i++) {
      if (currentIndex + i >= helpArr.length) currentIndex -= helpArr.length;
      resultArr.push({...comingArr[i], ...helpArr[currentIndex + i]});
   }
   return resultArr
}

export function getPageCount() {
   
}