/* একদম ফাংশন এর নাম হুবহু centimeterToMeter নাম দিয়ে একটা ফাংশন লিখবে। এই ফাংশনে ইনপুট হিসাবে কেউ সেন্টিমিটার দিবে আর সেই সেন্টিমিটার কে মিটার এ কনভার্ট করে রেজাল্ট রিটার্ন করবে। 
 */

function centiMeterToMeter(centimeter){
    const meter = centimeter * 100 ;
    return meter ;
}
const totalMeter = 5 ;
const result = centiMeterToMeter(totalMeter)
console.log(result);