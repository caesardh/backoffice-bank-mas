export class DashboardDetail {
    public agentId: string;
    public agentName: string;
    public agentTotalTrans: number;
    public crmTotal: number;
    public cashierTotal: number;
    public agentBalance: number;
    public agentMinus: number;
    public depo100: number;
    public depo50: number;
    public depoStatus: string;
    public balanceStatus: string;
    public finalStatus: string;
    public isOpen: boolean;
    public date: Date;
    public approval: string;

    constructor(
        agentId: string,
        agentName: string,
        agentTotalTrans: number,
        crmTotal: number,
        cashierTotal: number,
        agentBalance: number,
        agentMinus: number,
        depo100: number,
        depo50: number,
        depoStatus: string,
        balanceStatus: string,
        finalStatus: string,
        isOpen: boolean,
        date: Date,
        approval: string,
    ) {
        this.agentId = agentId;
        this.agentName = agentName;
        this.agentTotalTrans = agentTotalTrans;
        this.crmTotal = crmTotal;
        this.cashierTotal = cashierTotal;
        this.agentBalance = agentBalance;
        this.agentMinus = agentMinus;
        this.depo100 = depo100;
        this.depo50 = depo50;
        this.depoStatus = depoStatus;
        this.balanceStatus = balanceStatus;
        this.finalStatus = finalStatus;
        this.isOpen = isOpen;
        this.date = date;
        this.approval = approval;
    }
}
