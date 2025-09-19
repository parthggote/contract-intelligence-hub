import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";
import { Bar, BarChart, CartesianGrid, XAxis, YAxis, Line, LineChart, Legend } from "recharts";

const contractsByStatusData = [
  { status: "Active", count: 12 },
  { status: "Executed", count: 25 },
  { status: "Draft", count: 8 },
  { status: "Terminated", count: 3 },
];

const contractsOverTimeData = [
  { month: "Jan", count: 5 },
  { month: "Feb", count: 8 },
  { month: "Mar", count: 12 },
  { month: "Apr", count: 15 },
  { month: "May", count: 20 },
  { month: "Jun", count: 22 },
];

const chartConfig = {
  count: {
    label: "Count",
    color: "hsl(var(--primary))",
  },
};

const Analytics = () => {
  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold">Analytics</h1>
      <div className="grid gap-8 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Contracts by Status</CardTitle>
            <CardDescription>A breakdown of contracts by their current status.</CardDescription>
          </CardHeader>
          <CardContent>
            <ChartContainer config={chartConfig} className="h-[300px] w-full">
              <BarChart data={contractsByStatusData}>
                <CartesianGrid vertical={false} />
                <XAxis dataKey="status" tickLine={false} axisLine={false} />
                <YAxis />
                <ChartTooltip content={<ChartTooltipContent />} />
                <Bar dataKey="count" fill="var(--color-count)" radius={4} />
              </BarChart>
            </ChartContainer>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Contracts Created Over Time</CardTitle>
            <CardDescription>The number of contracts created each month.</CardDescription>
          </CardHeader>
          <CardContent>
            <ChartContainer config={chartConfig} className="h-[300px] w-full">
              <LineChart data={contractsOverTimeData}>
                <CartesianGrid vertical={false} />
                <XAxis dataKey="month" tickLine={false} axisLine={false} />
                <YAxis />
                <ChartTooltip content={<ChartTooltipContent />} />
                <Legend />
                <Line type="monotone" dataKey="count" stroke="var(--color-count)" strokeWidth={2} dot={false} />
              </LineChart>
            </ChartContainer>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Analytics;
