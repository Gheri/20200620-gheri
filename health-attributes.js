
// Underweight Normal weight Overweight Moderately obese Severely obese Very severely obese
const bmiRangeVsCategory = new Map()
bmiRangeVsCategory.set("18_4_AND_BELOW", "Underweight")
bmiRangeVsCategory.set("BETWEEN_18_5_AND_24_9", "Normal weight")
bmiRangeVsCategory.set("BETWEEN_25_AND_29_9", "Overweight")
bmiRangeVsCategory.set("BETWEEN_30_AND_34_9", "Moderately obese")
bmiRangeVsCategory.set("BETWEEN_35_AND_39_9", "Severely obese")
bmiRangeVsCategory.set("40_AND_ABOVE", "Very severely obese")

// Malnutrition risk, Low risk, Enhanced risk, Medium risk, High risk Very high risk
const bmiRangeVsHealthRisk = new Map()
bmiRangeVsHealthRisk.set("18_4_AND_BELOW", "Malnutrition risk")
bmiRangeVsHealthRisk.set("BETWEEN_18_5_AND_24_9", "Low risk")
bmiRangeVsHealthRisk.set("BETWEEN_25_AND_29_9", "Enhanced risk")
bmiRangeVsHealthRisk.set("BETWEEN_30_AND_34_9", "Medium risk")
bmiRangeVsHealthRisk.set("BETWEEN_35_AND_39_9", "High risk")
bmiRangeVsHealthRisk.set("40_AND_ABOVE", "Very high risk")


function getBMIIndex(item) {
    const heightInMetre = item.HeightCm / 100;
    const bmiIndex = item.WeightKg / heightInMetre;
    return Math.round((bmiIndex + Number.EPSILON) * 100) / 100;
}

function decorateWithHealthAttributes(item) {
    const bmiIndex = getBMIIndex(item);
    const bmiRange = getRangeOfBMIIndex(bmiIndex);
    const bmiCategory = bmiRangeVsCategory.get(bmiRange);
    const healthRisk = bmiRangeVsHealthRisk.get(bmiRange);
    return Object.assign(item, {BmiIndex: bmiIndex, BmiCategory: bmiCategory, HealthRisk: healthRisk});
}

function getRangeOfBMIIndex(bmiIndex) {
    if (bmiIndex <= 18.4) {
        return "18_4_AND_BELOW"
    }
    if (bmiIndex>=18.5 && bmiIndex<=24.9) {
        return "BETWEEN_18_5_AND_24_9"
    }
    if (bmiIndex>=25 && bmiIndex<=29.9) {
        return "BETWEEN_25_AND_29_9"
    }
    if (bmiIndex>=30 && bmiIndex<=34.9) {
        return "BETWEEN_30_AND_34_9"
    }
    if (bmiIndex>=35 && bmiIndex<=39.9) {
        return "BETWEEN_35_AND_39_9"
    }
    if (bmiIndex>=40) {
        return "40_AND_ABOVE"
    }
}

module.exports = decorateWithHealthAttributes
