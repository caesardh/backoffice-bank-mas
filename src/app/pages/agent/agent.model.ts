export class Agent {
    public agentId: string;
    public agentName: string;
    public agentDeviceId: string;
    public agentPhoneNumber: string;
    public agentEmail: string;
    public agentDepoId: string;
    public agentEscrowAccount: string;
    public agentrole: string;
    public agentStatus: string;
    public agentDateCreated: Date;
    public agentCreatedBy: string;

    constructor(
        agentId: string,
        agentName: string,
        agentDeviceId: string,
        agentPhoneNumber: string,
        agentEmail: string,
        agentDepoId: string,
        agentEscrowAccount: string,
        agentrole: string,
        agentStatus: string,
        agentDateCreated: Date,
        agentCreatedBy: string,
    ) {
        this.agentId = agentId;
    this.agentName = agentName;
    this.agentDeviceId = agentDeviceId;
    this.agentPhoneNumber = agentPhoneNumber;
    this.agentEmail = agentEmail;
    this.agentDepoId = agentDepoId;
    this.agentEscrowAccount = agentEscrowAccount;
    this.agentrole = agentrole;
    this.agentStatus = agentStatus;
    this.agentDateCreated = agentDateCreated;
    this.agentCreatedBy = agentCreatedBy;
}
}