import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

import { Papa } from "ngx-papaparse";

import { Agent } from "./agent.model";

@Injectable({
    providedIn: 'root'
})
export class AgentService {
    agents: Agent[];

    constructor(
        private papa: Papa,
        private http: HttpClient
    ) { }

    fetchAgents() {
        return this.http.get<Agent[]>("https://backoffice-bank-mas-default-rtdb.asia-southeast1.firebasedatabase.app/agentList.json");
    }

    uploadFile(file: File) {
        const reader = new FileReader();
        reader.onload = () => {
            const csvData = reader.result as string;
            this.parseCsv(csvData);
        };
        reader.readAsText(file);
    }

    parseCsv(csvData: string) {
        this.papa.parse(csvData, {
            header: true,
            skipEmptyLines: true,
            complete: (result: any) => {
                this.agents = result.data;
                this.http.put("https://backoffice-bank-mas-default-rtdb.asia-southeast1.firebasedatabase.app/agentList.json", this.agents).subscribe(
                    res => {
                        console.log(res)
                    }
                )
            }
        })
    }
}