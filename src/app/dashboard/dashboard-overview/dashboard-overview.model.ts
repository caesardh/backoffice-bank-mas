export class DashboardOverview {
    public name: string;
    public value: number;
    public isCurrency: boolean;

    constructor(name: string, value: number, isCurrency: boolean) {
        this.name = name;
        this.value = value;
        this.isCurrency = isCurrency;
    }
}