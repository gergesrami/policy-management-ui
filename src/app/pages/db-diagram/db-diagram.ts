import { Component, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import mermaid from 'mermaid';

@Component({
  standalone: true,
  selector: 'app-db-diagram',
  templateUrl: './db-diagram.html',
  styleUrls: ['./db-diagram.css'],
  imports: [CommonModule]
})
export class DbDiagramComponent implements AfterViewInit {
  ngAfterViewInit(): void {
    mermaid.initialize({ startOnLoad: false });

    const graphDefinition = `
      erDiagram
        POLICY {
          GUID id PK
          STRING name
          STRING description
          DATETIME effectiveDate
          DATETIME expiryDate
          GUID policyTypeId FK
        }

        POLICYTYPE {
          GUID id PK
          STRING name
        }

        POLICY }o--|| POLICYTYPE : "belongs to"
    `;

    mermaid.render('db-diagram', graphDefinition).then(({ svg }) => {
      const container = document.getElementById('mermaid-container');
      if (container) container.innerHTML = svg;
    });
  }
}
