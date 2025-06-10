// src/data/projects.ts
export const projects = [
  {
    slug: "sales-data-entry-automation",
    title: "Sales Data Entry Automation",
    overview: `Built a workflow that takes incoming CSV order files and…`,
    sections: [
      {
        heading: "Background",
        content: `Every week your sales team was manually importing hundreds of rows of orders…`
      },
      {
        heading: "Challenges",
        content: `Manual data entry was taking 5+ hours and errors were creeping in…`
      },
      {
        heading: "Solution",
        content: `I built an n8n workflow that watches your S3 bucket for new CSVs, parses them, validates the fields, then writes them directly into Google Sheets via the Sheets API. Errors fire an email alert.`
      },
      {
        heading: "Technical Details",
        content: `• n8n with the S3 node and CSV node  
• JavaScript function node for custom validation  
• Google Sheets node for upsert logic  
• EmailJS node for error notifications`
      },
      {
        heading: "Results",
        content: `Processing time dropped from 5 hours to under 5 minutes. Data errors fell by 98%.`
      }
    ],
    images: [
      { src: "/images/case-sales-flow.png", alt: "Workflow diagram" },
      { src: "/images/case-sales-dashboard.png", alt: "Final dashboard" }
    ],
  codeLink: "https://github.com/you/sales-data-entry-automation"
},
{
  slug: "crypto-price-monitor",
  title: "Crypto Price Monitor",
  overview: `Created a real-time price tracking system for BTC and ETH that…`,
  sections: [
    {
      heading: "Background",
      content: `With the crypto market's volatility, staying updated on prices is crucial…`
    },
    {
      heading: "Challenges",
      content: `Existing solutions were either too slow or lacked customization options…`
    },
    {
      heading: "Solution",
      content: `I built a Node.js service that aggregates prices from multiple exchanges, sends real-time updates via Telegram, and generates daily summaries.`
    },
    {
      heading: "Technical Details",
            content: `• Node.js with Axios for API calls`
          }
        ]
      }
      ];