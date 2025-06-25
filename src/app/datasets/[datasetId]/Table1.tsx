import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

export default function Table1() {
  return (
    <Table className="bg-bg-secondary">
      <TableHeader>
        <TableRow>
          <TableHead className="w-24 pl-12"></TableHead>
          <TableHead className="w-[100px]">SKU</TableHead>
          <TableHead>Location</TableHead>
          <TableHead>Product hierarchy Level 1</TableHead>
          <TableHead>Product hierarchy Level 2</TableHead>
          <TableHead className="text-right">Sales (units)</TableHead>
          <TableHead className="text-right">Product cost</TableHead>
          <TableHead className="text-right">Selling price</TableHead>
          <TableHead>Period</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {products.map((product, i) => (
          <TableRow key={product.sku}>
            <TableCell className="text-body-sm text-fg-secondary pl-12 font-mono">
              {i + 1}
            </TableCell>
            <TableCell>{product.sku}</TableCell>
            <TableCell>{product.location}</TableCell>
            <TableCell>{product.productHierarchyLevel1}</TableCell>
            <TableCell>{product.productHierarchyLevel2}</TableCell>
            <TableCell className="text-right">{product.salesUnits}</TableCell>
            <TableCell className="text-right">{product.productCost}</TableCell>
            <TableCell className="text-right">{product.sellingPrice}</TableCell>
            <TableCell>{product.period}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}

const products = [
  {
    sku: "SKU001",
    location: "Retail_1",
    productHierarchyLevel1: "Premium chocolate",
    productHierarchyLevel2: "Confectionary",
    salesUnits: 1000,
    productCost: 900,
    sellingPrice: 920,
    period: "31 Jan 2025",
  },
  {
    sku: "SKU002",
    location: "Retail_2",
    productHierarchyLevel1: "Dark chocolate",
    productHierarchyLevel2: "Confectionary",
    salesUnits: 800,
    productCost: 850,
    sellingPrice: 870,
    period: "31 Jan 2025",
  },
  {
    sku: "SKU003",
    location: "Retail_3",
    productHierarchyLevel1: "Milk chocolate",
    productHierarchyLevel2: "Confectionary",
    salesUnits: 1200,
    productCost: 800,
    sellingPrice: 820,
    period: "31 Jan 2025",
  },
  {
    sku: "SKU004",
    location: "Retail_4",
    productHierarchyLevel1: "White chocolate",
    productHierarchyLevel2: "Confectionary",
    salesUnits: 600,
    productCost: 700,
    sellingPrice: 720,
    period: "31 Jan 2025",
  },
  {
    sku: "SKU005",
    location: "Retail_5",
    productHierarchyLevel1: "Hazelnut chocolate",
    productHierarchyLevel2: "Confectionary",
    salesUnits: 950,
    productCost: 870,
    sellingPrice: 900,
    period: "31 Jan 2025",
  },
  {
    sku: "SKU006",
    location: "Retail_6",
    productHierarchyLevel1: "Mint chocolate",
    productHierarchyLevel2: "Confectionary",
    salesUnits: 500,
    productCost: 650,
    sellingPrice: 680,
    period: "31 Jan 2025",
  },
  {
    sku: "SKU007",
    location: "Retail_7",
    productHierarchyLevel1: "Almond chocolate",
    productHierarchyLevel2: "Confectionary",
    salesUnits: 1100,
    productCost: 880,
    sellingPrice: 910,
    period: "31 Jan 2025",
  },
  {
    sku: "SKU008",
    location: "Retail_8",
    productHierarchyLevel1: "Orange chocolate",
    productHierarchyLevel2: "Confectionary",
    salesUnits: 750,
    productCost: 720,
    sellingPrice: 750,
    period: "31 Jan 2025",
  },
  {
    sku: "SKU009",
    location: "Retail_9",
    productHierarchyLevel1: "Coconut chocolate",
    productHierarchyLevel2: "Confectionary",
    salesUnits: 900,
    productCost: 860,
    sellingPrice: 880,
    period: "31 Jan 2025",
  },
  {
    sku: "SKU010",
    location: "Retail_10",
    productHierarchyLevel1: "Raspberry chocolate",
    productHierarchyLevel2: "Confectionary",
    salesUnits: 650,
    productCost: 700,
    sellingPrice: 730,
    period: "31 Jan 2025",
  },
  {
    sku: "SKU011",
    location: "Retail_11",
    productHierarchyLevel1: "Nougat chocolate",
    productHierarchyLevel2: "Confectionary",
    salesUnits: 780,
    productCost: 790,
    sellingPrice: 810,
    period: "31 Jan 2025",
  },
  {
    sku: "SKU012",
    location: "Retail_12",
    productHierarchyLevel1: "Caramel chocolate",
    productHierarchyLevel2: "Confectionary",
    salesUnits: 970,
    productCost: 880,
    sellingPrice: 910,
    period: "31 Jan 2025",
  },
  {
    sku: "SKU013",
    location: "Retail_13",
    productHierarchyLevel1: "Sea salt chocolate",
    productHierarchyLevel2: "Confectionary",
    salesUnits: 690,
    productCost: 740,
    sellingPrice: 770,
    period: "31 Jan 2025",
  },
  {
    sku: "SKU014",
    location: "Retail_14",
    productHierarchyLevel1: "Chili chocolate",
    productHierarchyLevel2: "Confectionary",
    salesUnits: 830,
    productCost: 820,
    sellingPrice: 850,
    period: "31 Jan 2025",
  },
  {
    sku: "SKU015",
    location: "Retail_15",
    productHierarchyLevel1: "Coffee chocolate",
    productHierarchyLevel2: "Confectionary",
    salesUnits: 910,
    productCost: 890,
    sellingPrice: 930,
    period: "31 Jan 2025",
  },
];
