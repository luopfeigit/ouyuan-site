export interface Machine {
  slug: string;
  title: string;
  generationTag: string;
  modelNumber: string;
  screenSize: string;
  chambersCount: number;
  washMethod: string;
  powerConsumption: string;
  dimensions: string;
  netWeight: string;
  supportedPayments: string[];
}

export const MOCK_MACHINES: Machine[] = [
  {
    slug: "oytk2504-2",
    title: "4th Gen Flagship Series",
    generationTag: "4th Generation",
    modelNumber: "OYTK2504-2",
    screenSize: "21.5\" HD Touchscreen",
    chambersCount: 2,
    washMethod: "Pure Water + 6 Fragrances + UV + Ozone",
    powerConsumption: "2100W (40W Standby)",
    dimensions: "650(D) x 1790(H) x 550(W) mm",
    netWeight: "115 kg",
    supportedPayments: ["QRIS / QR", "NFC", "Coins", "Bills"]
  },
  {
    slug: "oytk2501-2",
    title: "High-Volume Commercial Series",
    generationTag: "High Volume",
    modelNumber: "OYTK2501-2",
    screenSize: "15.6\" HD Touchscreen",
    chambersCount: 2,
    washMethod: "Comprehensive Dry Cleaning + UV + Ozone",
    powerConsumption: "2100W (40W Standby)",
    dimensions: "650(D) x 1790(H) x 550(W) mm",
    netWeight: "115 kg",
    supportedPayments: ["QRIS / QR", "NFC", "Coins", "Bills"]
  },
  {
    slug: "oytk2501-1",
    title: "Entry-Level Commercial Series",
    generationTag: "Entry Level",
    modelNumber: "OYTK2501-1",
    screenSize: "15.6\" HD Touchscreen",
    chambersCount: 1,
    washMethod: "Comprehensive Dry Cleaning + UV + Ozone",
    powerConsumption: "1100W (40W Standby)",
    dimensions: "650(D) x 1790(H) x 550(W) mm",
    netWeight: "95 kg",
    supportedPayments: ["QRIS / QR", "NFC", "Coins", "Bills"]
  }
];