export interface Play {
    id: number;
    name: string;
    date: string;
    year?: number;
    month?: number;
}

export interface Days {
    [key: number]: Play[];
}

export interface Month {
    name: string;
    code: number;
    year?: number;
    days?: Days;
    loading?: boolean;
    loaded?: boolean;
}

export interface Months {
    [key: number]: Month;
}

export interface Playbill {
    months: Months;
    activeMonth: number;
    activeDay: number | string;
}

export interface View {
    code: string;
    name: string;
}

export interface Views {
    views: View[];
    activeView: string;
    toggleViews?: (code: string | number) => void;
}

export interface Action {
    type: string;
    payload: {
        [key: string]: any;
    };
}