import {tabLabels} from "./sharedConfig";

export const COLORS = ['rgb(116, 214, 229)', 'rgb(38, 163, 184)', 'rgb(22, 102, 119)']
export const labels = ['Mo', 'Di', 'Mi', 'Do', 'Fr', 'Sa', 'So'];
export const labelsMonth = Array.from(Array(30).keys()).map(item => item + 1)
export const labelsYear = ['Jan', 'Feb', 'Mär', 'Apr', 'Mai', 'Jun', 'Jul', 'Aug', 'Sep', 'Okt', 'Nov', 'Dez']
export const doughnutChartData = {
    labels: [],
    datasets: [
        {
            label: '# of Votes',
            data: [2, 9, 3],
            cutout: 47,
            backgroundColor: [
                COLORS[0],
                COLORS[1],
                COLORS[2],
            ],
            borderColor: [
                COLORS[0],
                COLORS[1],
                COLORS[2],
            ],
            borderWidth: 1,
        },
    ],
};

/*MOCK DATA for charts*/
export const DOUGHNUT = {
    [tabLabels[0]]: {
        totalAmount: 654.76,
        nightTariff: {
            value: 381.12,
            percentage: 72
        },
        lowTariff: {
            value: 141.51,
            percentage: 14
        },
        solar: {
            value: 132.13,
            percentage: 10
        }
    },
    [tabLabels[1]]: {
        totalAmount: 321.76,
        nightTariff: {
            value: 243.54,
            percentage: 67
        },
        lowTariff: {
            value: 65.23,
            percentage: 28
        },
        solar: {
            value: 43.18,
            percentage: 17
        }
    },
    [tabLabels[2]]: {
        totalAmount: 139.33,
        nightTariff: {
            value: 101.44,
            percentage: 81
        },
        lowTariff: {
            value: 21.19,
            percentage: 13
        },
        solar: {
            value: 12.52,
            percentage: 6
        }
    },
}