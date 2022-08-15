const calculateWeightLostInAMonth = (cycling, running, swimming, extraCalorieInTake) => {
   let weightLostInAMonth = 0;

   // write logic here
   if (running == 0 && swimming == 0) {
      weightLostInAMonth = -1
      return weightLostInAMonth
   }
   else {
      cycling = cycling * 4 * 2
      swimming = swimming * 4 * 2
      running = running * 4 * 2

      extraCalorieInTake = extraCalorieInTake * 30

      weightLostInAMonth = ((cycling + swimming + running) - (extraCalorieInTake)) / 1000

      return weightLostInAMonth
   }



}

module.exports = calculateWeightLostInAMonth

