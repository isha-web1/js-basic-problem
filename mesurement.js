/* . সিম্পল একটা ফাংশন লিখতে হবে। যেটার নাম হবে feetToInch এবং এই ফাংশন ইনপুট হিসেবে নিবে feet আর রিটার্ন করবে inch । অর্থাৎ এই ফাংশনকে কোন একটা ফিট বলে দিলে সে রিটার্ন হিসেবে বলে দিবে কত ইঞ্চি হয়।  */


function centiMeterToMeter(centimeter){
    const meter = centimeter * 100 ;
    return meter ;
}
const totalMeter = 5 ;
const result = centiMeterToMeter(totalMeter)
console.log(result);