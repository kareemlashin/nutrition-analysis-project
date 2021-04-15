export interface Nutrition {
    uri:                string;
    calories:           number;
    totalWeight:        number;
    dietLabels:         string[];
    healthLabels:       string[];
    cautions:           string[];
    totalNutrients:     { [key: string]: TotalDaily };
    totalDaily:         { [key: string]: TotalDaily };
    totalNutrientsKCal: TotalNutrientsKCal;
}

 interface TotalDaily {
    label:    string;
    quantity: number;
    unit:     Unit;
}

 enum Unit {
    Empty = "%",
    G = "g",
    Kcal = "kcal",
    Mg = "mg",
    Μg = "µg",
}

 interface TotalNutrientsKCal {
    ENERC_KCAL:  TotalDaily;
    PROCNT_KCAL: TotalDaily;
    FAT_KCAL:    TotalDaily;
    CHOCDF_KCAL: TotalDaily;
}
