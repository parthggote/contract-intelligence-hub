import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { FilePenLine, Trash2 } from "lucide-react";

const contracts = [
  {
    id: "CTR-001",
    name: "Master Service Agreement",
    status: "Active",
    createdBy: "John Doe",
    createdAt: "2023-01-15",
  },
  {
    id: "CTR-002",
    name: "Non-Disclosure Agreement",
    status: "Executed",
    createdBy: "Jane Smith",
    createdAt: "2023-02-20",
  },
  {
    id: "CTR-003",
    name: "Software License Agreement",
    status: "Draft",
    createdBy: "Peter Jones",
    createdAt: "2023-03-10",
  },
  {
    id: "CTR-004",
    name: "Consulting Agreement",
    status: "Terminated",
    createdBy: "Mary Johnson",
    createdAt: "2023-04-05",
  },
  {
    id: "CTR-005",
    name: "Statement of Work",
    status: "Active",
    createdBy: "David Williams",
    createdAt: "2023-05-12",
  },
];

const Repositories = () => {
  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold">Contract Repository</h1>
      <div className="rounded-lg border shadow-sm">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Contract ID</TableHead>
              <TableHead>Contract Name</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Created By</TableHead>
              <TableHead>Created At</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {contracts.map((contract) => (
              <TableRow key={contract.id}>
                <TableCell className="font-medium">{contract.id}</TableCell>
                <TableCell>{contract.name}</TableCell>
                <TableCell>
                  <Badge
                    variant={
                      contract.status === "Active"
                        ? "default"
                        : contract.status === "Executed"
                        ? "secondary"
                        : contract.status === "Draft"
                        ? "outline"
                        : "destructive"
                    }
                  >
                    {contract.status}
                  </Badge>
                </TableCell>
                <TableCell>{contract.createdBy}</TableCell>
                <TableCell>{contract.createdAt}</TableCell>
                <TableCell className="text-right">
                  <Button variant="ghost" size="icon">
                    <FilePenLine className="h-4 w-4" />
                  </Button>
                  <Button variant="ghost" size="icon">
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default Repositories;
