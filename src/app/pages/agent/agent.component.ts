import { Component, OnInit } from '@angular/core';

import { Agent } from './agent.model';
import { AgentService } from './agent.service';

interface UploadCategory {
  option: string;
}

@Component({
  selector: 'app-agent',
  templateUrl: './agent.component.html',
  styleUrl: './agent.component.css'
})
export class AgentComponent implements OnInit {
  filterBar: boolean = false;
  agentIdFilter: string;
  agentNameFilter: string;
  agentPhoneNumberFilter: string;

  uploadBar: boolean = false;
  uploadCategory: UploadCategory[];
  selectedUploadCategory: UploadCategory;

  agents: Agent[];

  constructor(private agentService: AgentService) {

  }

  ngOnInit() {
    this.uploadCategory = [
      { option: 'Upload Agen' }
    ]

    this.getAgents()
  }

  getAgents() {
    this.agentService.fetchAgents().subscribe(
      res => {
        this.agents = res;
      }
    )
  }

  applyFilter() {
    if (!this.agentIdFilter && !this.agentNameFilter && !this.agentPhoneNumberFilter) {
      this.getAgents();
      return;
    } else {
      this.agentService.fetchAgents().subscribe(
        res => {
          this.agents = res.filter(data => {
            const idMatch = !this.agentIdFilter || data.agentId.includes(this.agentIdFilter);
            const nameMatch = !this.agentNameFilter || data.agentName.toLowerCase().includes(this.agentNameFilter.toLowerCase());
            const phoneMatch = !this.agentPhoneNumberFilter || data.agentPhoneNumber.includes(this.agentPhoneNumberFilter);

            return idMatch && nameMatch && phoneMatch;
          })
        }
      );
    }
  }

  onFileUpload(event) {
    const file = event.target.files[0];
    this.agentService.uploadFile(file);
    this.getAgents();
  }
}
