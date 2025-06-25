import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

export default function Table2() {
  return (
    <Table className="bg-bg-secondary">
      <TableHeader>
        <TableRow>
          <TableHead className="w-24 pl-12"></TableHead>
          <TableHead className="w-[100px]">SKU</TableHead>

          <TableHead>Product hierarchy Level 1</TableHead>
          <TableHead>Product hierarchy Level 2</TableHead>
          <TableHead>Product hierarchy Level 3</TableHead>
          <TableHead>Product type</TableHead>
          <TableHead>UOM</TableHead>
          <TableHead>Shelf life</TableHead>
          <TableHead>Unit</TableHead>
          <TableHead className="text-right">Product cost</TableHead>
          <TableHead>Currency</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {materials.map((material, i) => (
          <TableRow key={material.sku}>
            <TableCell className="text-body-sm text-fg-secondary pl-12 font-mono">
              {i + 1}
            </TableCell>
            <TableCell>{material.sku}</TableCell>
            <TableCell>{material.product_hierarchy_level1}</TableCell>
            <TableCell>{material.product_hierarchy_level2}</TableCell>
            <TableCell>{material.product_hierarchy_level3}</TableCell>
            <TableCell>{material.product_type}</TableCell>
            <TableCell>{material.uom}</TableCell>
            <TableCell>{material.shelf_life}</TableCell>
            <TableCell>{material.unit}</TableCell>
            <TableCell className="text-right">
              {material.product_cost}
            </TableCell>
            <TableCell>{material.currency}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}

const materials = [
  {
    sku: "SKU001",
    product_hierarchy_level1: "Frozen",
    product_hierarchy_level2: "Vegetables",
    product_hierarchy_level3: "Mixed",
    product_type: "Perishable",
    uom: "litre",
    shelf_life: "6 months",
    unit: "day",
    product_cost: 61.95,
    currency: "EUR",
  },
  {
    sku: "SKU002",
    product_hierarchy_level1: "Bakery",
    product_hierarchy_level2: "Bread",
    product_hierarchy_level3: "White",
    product_type: "Non-perishable",
    uom: "kg",
    shelf_life: "1 month",
    unit: "month",
    product_cost: 47.8,
    currency: "JPY",
  },
  {
    sku: "SKU003",
    product_hierarchy_level1: "Bakery",
    product_hierarchy_level2: "Bread",
    product_hierarchy_level3: "White",
    product_type: "Perishable",
    uom: "kg",
    shelf_life: "2 weeks",
    unit: "month",
    product_cost: 48.55,
    currency: "JPY",
  },
  {
    sku: "SKU004",
    product_hierarchy_level1: "Snacks",
    product_hierarchy_level2: "Cookies",
    product_hierarchy_level3: "Chocolate",
    product_type: "Non-perishable",
    uom: "unit",
    shelf_life: null,
    unit: "year",
    product_cost: 35.87,
    currency: "INR",
  },
  {
    sku: "SKU005",
    product_hierarchy_level1: "Dairy",
    product_hierarchy_level2: "Cheese",
    product_hierarchy_level3: "Cheddar",
    product_type: "Perishable",
    uom: "kg",
    shelf_life: "6 months",
    unit: "year",
    product_cost: 67.97,
    currency: "JPY",
  },
  {
    sku: "SKU006",
    product_hierarchy_level1: "Snacks",
    product_hierarchy_level2: "Cookies",
    product_hierarchy_level3: "Butter",
    product_type: "Perishable",
    uom: "pack",
    shelf_life: "2 weeks",
    unit: "day",
    product_cost: 73.04,
    currency: "USD",
  },
  {
    sku: "SKU007",
    product_hierarchy_level1: "Frozen",
    product_hierarchy_level2: "Vegetables",
    product_hierarchy_level3: "Mixed",
    product_type: "Perishable",
    uom: "kg",
    shelf_life: "12 months",
    unit: "year",
    product_cost: 89.18,
    currency: "USD",
  },
  {
    sku: "SKU008",
    product_hierarchy_level1: "Snacks",
    product_hierarchy_level2: "Nuts",
    product_hierarchy_level3: "Cashews",
    product_type: "Non-perishable",
    uom: "unit",
    shelf_life: null,
    unit: null,
    product_cost: 34.22,
    currency: "INR",
  },
  {
    sku: "SKU009",
    product_hierarchy_level1: "Dairy",
    product_hierarchy_level2: "Milk",
    product_hierarchy_level3: "Whole",
    product_type: "Perishable",
    uom: "litre",
    shelf_life: "2 weeks",
    unit: "day",
    product_cost: 49.61,
    currency: "INR",
  },
  {
    sku: "SKU010",
    product_hierarchy_level1: "Bakery",
    product_hierarchy_level2: "Cakes",
    product_hierarchy_level3: "Chocolate",
    product_type: "Perishable",
    uom: "unit",
    shelf_life: "1 month",
    unit: "day",
    product_cost: 86.5,
    currency: "EUR",
  },
  {
    sku: "SKU011",
    product_hierarchy_level1: "Frozen",
    product_hierarchy_level2: "Vegetables",
    product_hierarchy_level3: "Peas",
    product_type: "Non-perishable",
    uom: null,
    shelf_life: null,
    unit: null,
    product_cost: 4.76,
    currency: "EUR",
  },
  {
    sku: "SKU012",
    product_hierarchy_level1: "Beverages",
    product_hierarchy_level2: "Soda",
    product_hierarchy_level3: "Lemon",
    product_type: "Perishable",
    uom: "litre",
    shelf_life: "12 months",
    unit: "year",
    product_cost: 93.32,
    currency: "USD",
  },
  {
    sku: "SKU013",
    product_hierarchy_level1: "Frozen",
    product_hierarchy_level2: "Vegetables",
    product_hierarchy_level3: "Corn",
    product_type: "Perishable",
    uom: "unit",
    shelf_life: "2 weeks",
    unit: "day",
    product_cost: 39.17,
    currency: "JPY",
  },
  {
    sku: "SKU014",
    product_hierarchy_level1: "Bakery",
    product_hierarchy_level2: "Cakes",
    product_hierarchy_level3: "Chocolate",
    product_type: "Perishable",
    uom: "unit",
    shelf_life: "1 month",
    unit: "day",
    product_cost: 42.03,
    currency: "EUR",
  },
  {
    sku: "SKU015",
    product_hierarchy_level1: "Bakery",
    product_hierarchy_level2: "Bread",
    product_hierarchy_level3: "White",
    product_type: "Non-perishable",
    uom: null,
    shelf_life: null,
    unit: null,
    product_cost: 55.62,
    currency: "USD",
  },
  {
    sku: "SKU016",
    product_hierarchy_level1: "Bakery",
    product_hierarchy_level2: "Bread",
    product_hierarchy_level3: "Multigrain",
    product_type: "Non-perishable",
    uom: "kg",
    shelf_life: "2 weeks",
    unit: "month",
    product_cost: 76.9,
    currency: "JPY",
  },
  {
    sku: "SKU017",
    product_hierarchy_level1: "Dairy",
    product_hierarchy_level2: "Cheese",
    product_hierarchy_level3: "Swiss",
    product_type: "Perishable",
    uom: "pack",
    shelf_life: "12 months",
    unit: "day",
    product_cost: 82.33,
    currency: "USD",
  },
  {
    sku: "SKU018",
    product_hierarchy_level1: "Dairy",
    product_hierarchy_level2: "Cheese",
    product_hierarchy_level3: "Cheddar",
    product_type: "Non-perishable",
    uom: "kg",
    shelf_life: "2 weeks",
    unit: "month",
    product_cost: 58.96,
    currency: "INR",
  },
  {
    sku: "SKU019",
    product_hierarchy_level1: "Dairy",
    product_hierarchy_level2: "Yogurt",
    product_hierarchy_level3: "Greek",
    product_type: "Perishable",
    uom: "pack",
    shelf_life: "1 month",
    unit: "month",
    product_cost: 73.69,
    currency: "EUR",
  },
  {
    sku: "SKU020",
    product_hierarchy_level1: "Dairy",
    product_hierarchy_level2: "Milk",
    product_hierarchy_level3: "Whole",
    product_type: "Perishable",
    uom: "litre",
    shelf_life: "6 months",
    unit: "year",
    product_cost: 56.37,
    currency: "EUR",
  },
  {
    sku: "SKU021",
    product_hierarchy_level1: "Snacks",
    product_hierarchy_level2: "Chips",
    product_hierarchy_level3: "Multigrain",
    product_type: "Non-perishable",
    uom: null,
    shelf_life: null,
    unit: null,
    product_cost: 61.65,
    currency: "INR",
  },
  {
    sku: "SKU022",
    product_hierarchy_level1: "Bakery",
    product_hierarchy_level2: "Bread",
    product_hierarchy_level3: "White",
    product_type: "Non-perishable",
    uom: "kg",
    shelf_life: "2 weeks",
    unit: "month",
    product_cost: 20.7,
    currency: "USD",
  },
  {
    sku: "SKU023",
    product_hierarchy_level1: "Frozen",
    product_hierarchy_level2: "Meals",
    product_hierarchy_level3: "Pasta",
    product_type: "Perishable",
    uom: "pack",
    shelf_life: "6 months",
    unit: "month",
    product_cost: 66.58,
    currency: "INR",
  },
  {
    sku: "SKU024",
    product_hierarchy_level1: "Frozen",
    product_hierarchy_level2: "Vegetables",
    product_hierarchy_level3: "Corn",
    product_type: "Perishable",
    uom: "kg",
    shelf_life: "1 month",
    unit: "month",
    product_cost: 57.07,
    currency: "INR",
  },
  {
    sku: "SKU025",
    product_hierarchy_level1: "Frozen",
    product_hierarchy_level2: "Meals",
    product_hierarchy_level3: "Pasta",
    product_type: "Perishable",
    uom: "unit",
    shelf_life: "2 weeks",
    unit: "day",
    product_cost: 43.3,
    currency: "USD",
  },
];
