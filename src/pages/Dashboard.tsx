import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { 
  FileText, 
  Clock, 
  AlertTriangle, 
  CheckCircle2, 
  Plus,
  Upload,
  PenTool,
  TrendingUp,
  Calendar
} from "lucide-react"

const Dashboard = () => {
  const stats = [
    {
      title: "Active Contracts",
      value: "247",
      change: "+12%",
      icon: FileText,
      color: "text-blue-600 dark:text-blue-400"
    },
    {
      title: "Pending Signatures",
      value: "23",
      change: "-8%",
      icon: PenTool,
      color: "text-orange-600 dark:text-orange-400"
    },
    {
      title: "Expiring Soon",
      value: "15",
      change: "+3%",
      icon: AlertTriangle,
      color: "text-red-600 dark:text-red-400"
    },
    {
      title: "Completed This Month",
      value: "89",
      change: "+23%",
      icon: CheckCircle2,
      color: "text-green-600 dark:text-green-400"
    }
  ]

  const recentContracts = [
    { name: "Software License Agreement - TechCorp", status: "pending_signature", priority: "high", daysLeft: 3 },
    { name: "Vendor Service Contract - ABC Ltd", status: "in_review", priority: "medium", daysLeft: 7 },
    { name: "Employment Agreement - John Doe", status: "completed", priority: "low", daysLeft: null },
    { name: "Partnership Agreement - StartupXYZ", status: "draft", priority: "high", daysLeft: 14 },
    { name: "NDA - Consulting Firm", status: "pending_signature", priority: "medium", daysLeft: 2 }
  ]

  const getStatusBadge = (status: string): "default" | "destructive" | "outline" | "secondary" => {
    const variants: { [key: string]: "default" | "destructive" | "outline" | "secondary" } = {
      pending_signature: "destructive",
      in_review: "secondary",
      completed: "default",
      draft: "outline"
    }
    return variants[status] || "outline"
  }

  const getPriorityColor = (priority: string) => {
    const colors = {
      high: "text-red-600 dark:text-red-400",
      medium: "text-orange-600 dark:text-orange-400",
      low: "text-green-600 dark:text-green-400"
    }
    return colors[priority as keyof typeof colors] || "text-muted-foreground"
  }

  return (
    <div className="space-y-8">
      <div className="flex flex-col space-y-4 sm:flex-row sm:items-center sm:justify-between sm:space-y-0">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
          <p className="text-muted-foreground">
            Overview of your contract lifecycle management
          </p>
        </div>
        <div className="flex space-x-3">
          <Button variant="outline" size="sm">
            <Upload className="mr-2 h-4 w-4" />
            Upload Document
          </Button>
          <Button size="sm">
            <Plus className="mr-2 h-4 w-4" />
            Create Contract
          </Button>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat, index) => {
          const Icon = stat.icon
          return (
            <Card key={index}>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">
                  {stat.title}
                </CardTitle>
                <Icon className={`h-4 w-4 ${stat.color}`} />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{stat.value}</div>
                <p className="text-xs text-muted-foreground">
                  <span className={stat.change.startsWith('+') ? 'text-green-600 dark:text-green-400' : 'text-red-600 dark:text-red-400'}>
                    {stat.change}
                  </span>
                  {' '}from last month
                </p>
              </CardContent>
            </Card>
          )
        })}
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        {/* Recent Contracts */}
        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle className="flex items-center">
              <FileText className="mr-2 h-5 w-5" />
              Recent Contracts
            </CardTitle>
            <CardDescription>
              Latest contract activity and status updates
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentContracts.map((contract, index) => (
                <div key={index} className="flex items-center justify-between p-4 border rounded-lg">
                  <div className="flex-1">
                    <h4 className="font-medium">{contract.name}</h4>
                    <div className="flex items-center mt-2 space-x-2">
                      <Badge variant={getStatusBadge(contract.status)}>
                        {contract.status.replace('_', ' ')}
                      </Badge>
                      <span className={`text-sm ${getPriorityColor(contract.priority)}`}>
                        {contract.priority} priority
                      </span>
                    </div>
                  </div>
                  {contract.daysLeft && (
                    <div className="text-right">
                      <div className="flex items-center text-sm text-muted-foreground">
                        <Clock className="mr-1 h-4 w-4" />
                        {contract.daysLeft} days left
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Quick Actions & Upcoming Renewals */}
        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <TrendingUp className="mr-2 h-5 w-5" />
                Contract Turnaround
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <div className="flex justify-between text-sm mb-2">
                  <span>Average TAT</span>
                  <span className="font-medium">12.5 days</span>
                </div>
                <Progress value={75} className="h-2" />
                <p className="text-xs text-muted-foreground mt-1">
                  25% faster than industry average
                </p>
              </div>
              <div>
                <div className="flex justify-between text-sm mb-2">
                  <span>This Month</span>
                  <span className="font-medium">8.2 days</span>
                </div>
                <Progress value={90} className="h-2" />
                <p className="text-xs text-green-600 dark:text-green-400 mt-1">
                  Excellent performance
                </p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Calendar className="mr-2 h-5 w-5" />
                Upcoming Renewals
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-sm">Next 30 days</span>
                  <Badge variant="destructive">8 contracts</Badge>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm">Next 60 days</span>
                  <Badge variant="secondary">15 contracts</Badge>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm">Next 90 days</span>
                  <Badge variant="outline">23 contracts</Badge>
                </div>
                <Button variant="outline" size="sm" className="w-full mt-4">
                  View All Renewals
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}

export default Dashboard