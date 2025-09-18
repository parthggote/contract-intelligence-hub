import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { 
  FileText, 
  Upload, 
  Lightbulb, 
  Users, 
  Calendar,
  CheckCircle2,
  ArrowRight,
  ArrowLeft,
  Save,
  Send
} from "lucide-react"

const CreateContract = () => {
  const [currentStep, setCurrentStep] = useState(1)
  const [selectedTemplate, setSelectedTemplate] = useState("")
  
  const totalSteps = 4
  const progress = (currentStep / totalSteps) * 100

  const templates = [
    {
      id: "nda",
      name: "Non-Disclosure Agreement",
      description: "Standard NDA template for confidential business discussions",
      category: "Legal",
      estimatedTime: "5 min"
    },
    {
      id: "service",
      name: "Service Agreement",
      description: "Professional services contract template",
      category: "Commercial",
      estimatedTime: "15 min"
    },
    {
      id: "employment",
      name: "Employment Contract",
      description: "Standard employment agreement with customizable terms",
      category: "HR",
      estimatedTime: "20 min"
    },
    {
      id: "vendor",
      name: "Vendor Agreement",
      description: "Supplier and vendor relationship contract",
      category: "Procurement",
      estimatedTime: "25 min"
    }
  ]

  const aiSuggestions = [
    "Consider adding a force majeure clause for unforeseen circumstances",
    "Include specific payment terms with late fee provisions",
    "Add intellectual property protection clauses",
    "Define clear termination conditions and procedures"
  ]

  const approvers = [
    { name: "Sarah Johnson", role: "Legal Director", status: "pending" },
    { name: "Michael Chen", role: "Finance Manager", status: "not_required" },
    { name: "David Wilson", role: "Department Head", status: "pending" }
  ]

  const renderStepContent = () => {
    switch (currentStep) {
      case 1:
        return (
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold mb-4">Choose Contract Template</h3>
              <div className="grid gap-4 md:grid-cols-2">
                {templates.map((template) => (
                  <Card 
                    key={template.id} 
                    className={`cursor-pointer transition-colors ${
                      selectedTemplate === template.id ? 'ring-2 ring-primary bg-primary/5' : 'hover:bg-muted/50'
                    }`}
                    onClick={() => setSelectedTemplate(template.id)}
                  >
                    <CardHeader>
                      <div className="flex items-start justify-between">
                        <FileText className="h-6 w-6 text-primary" />
                        <Badge variant="outline">{template.category}</Badge>
                      </div>
                      <CardTitle className="text-base">{template.name}</CardTitle>
                      <CardDescription>{template.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="flex items-center justify-between text-sm text-muted-foreground">
                        <span>Est. time: {template.estimatedTime}</span>
                        {selectedTemplate === template.id && (
                          <CheckCircle2 className="h-4 w-4 text-primary" />
                        )}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
            
            <div className="border rounded-lg p-4">
              <h4 className="font-medium mb-2 flex items-center">
                <Upload className="mr-2 h-4 w-4" />
                Or Upload Existing Document
              </h4>
              <p className="text-sm text-muted-foreground mb-3">
                Upload a Word document or PDF to use as a starting point
              </p>
              <Button variant="outline" size="sm">
                <Upload className="mr-2 h-4 w-4" />
                Choose File
              </Button>
            </div>
          </div>
        )
      
      case 2:
        return (
          <div className="space-y-6">
            <h3 className="text-lg font-semibold">Contract Details</h3>
            <div className="grid gap-4 md:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="contract-title">Contract Title</Label>
                <Input id="contract-title" placeholder="Enter contract title" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="contract-type">Contract Type</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="commercial">Commercial</SelectItem>
                    <SelectItem value="employment">Employment</SelectItem>
                    <SelectItem value="vendor">Vendor</SelectItem>
                    <SelectItem value="partnership">Partnership</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="counterparty">Counterparty</Label>
                <Input id="counterparty" placeholder="Company or individual name" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="value">Contract Value</Label>
                <Input id="value" placeholder="$0.00" type="number" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="start-date">Start Date</Label>
                <Input id="start-date" type="date" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="end-date">End Date</Label>
                <Input id="end-date" type="date" />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="description">Description</Label>
              <Textarea 
                id="description" 
                placeholder="Brief description of the contract purpose and key terms"
                className="min-h-[100px]"
              />
            </div>
          </div>
        )
      
      case 3:
        return (
          <div className="space-y-6">
            <h3 className="text-lg font-semibold">Contract Terms & AI Suggestions</h3>
            
            <Tabs defaultValue="editor" className="space-y-4">
              <TabsList>
                <TabsTrigger value="editor">Document Editor</TabsTrigger>
                <TabsTrigger value="suggestions">AI Suggestions</TabsTrigger>
                <TabsTrigger value="clauses">Clause Library</TabsTrigger>
              </TabsList>
              
              <TabsContent value="editor" className="space-y-4">
                <div className="border rounded-lg p-4 min-h-[400px] bg-muted/20">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-2">
                      <Button variant="outline" size="sm">Bold</Button>
                      <Button variant="outline" size="sm">Italic</Button>
                      <Button variant="outline" size="sm">Underline</Button>
                    </div>
                    <Badge variant="outline">Version 1.0</Badge>
                  </div>
                  <div className="prose prose-sm max-w-none">
                    <p className="text-muted-foreground">
                      Document content will appear here. Web-based editor with version tracking,
                      redlining, and commenting capabilities.
                    </p>
                  </div>
                </div>
              </TabsContent>
              
              <TabsContent value="suggestions" className="space-y-4">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center text-base">
                      <Lightbulb className="mr-2 h-4 w-4" />
                      AI-Powered Suggestions
                    </CardTitle>
                    <CardDescription>
                      Smart recommendations based on contract type and best practices
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    {aiSuggestions.map((suggestion, index) => (
                      <div key={index} className="flex items-start justify-between p-3 border rounded-lg">
                        <p className="text-sm flex-1">{suggestion}</p>
                        <div className="flex space-x-2 ml-4">
                          <Button variant="outline" size="sm">Accept</Button>
                          <Button variant="ghost" size="sm">Decline</Button>
                        </div>
                      </div>
                    ))}
                  </CardContent>
                </Card>
              </TabsContent>
              
              <TabsContent value="clauses" className="space-y-4">
                <div className="grid gap-3">
                  <div className="flex items-center justify-between p-3 border rounded-lg">
                    <div>
                      <h4 className="font-medium text-sm">Payment Terms</h4>
                      <p className="text-xs text-muted-foreground">Standard 30-day payment clause</p>
                    </div>
                    <Button variant="outline" size="sm">Insert</Button>
                  </div>
                  <div className="flex items-center justify-between p-3 border rounded-lg">
                    <div>
                      <h4 className="font-medium text-sm">Confidentiality</h4>
                      <p className="text-xs text-muted-foreground">Mutual non-disclosure provisions</p>
                    </div>
                    <Button variant="outline" size="sm">Insert</Button>
                  </div>
                  <div className="flex items-center justify-between p-3 border rounded-lg">
                    <div>
                      <h4 className="font-medium text-sm">Termination</h4>
                      <p className="text-xs text-muted-foreground">Standard termination conditions</p>
                    </div>
                    <Button variant="outline" size="sm">Insert</Button>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        )
      
      case 4:
        return (
          <div className="space-y-6">
            <h3 className="text-lg font-semibold">Review & Approval Workflow</h3>
            
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center text-base">
                  <Users className="mr-2 h-4 w-4" />
                  Approval Workflow
                </CardTitle>
                <CardDescription>
                  Set up the approval process for this contract
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {approvers.map((approver, index) => (
                  <div key={index} className="flex items-center justify-between p-3 border rounded-lg">
                    <div>
                      <h4 className="font-medium text-sm">{approver.name}</h4>
                      <p className="text-xs text-muted-foreground">{approver.role}</p>
                    </div>
                    <Badge variant={approver.status === 'pending' ? 'secondary' : 'outline'}>
                      {approver.status.replace('_', ' ')}
                    </Badge>
                  </div>
                ))}
                <Button variant="outline" size="sm" className="w-full">
                  <Users className="mr-2 h-4 w-4" />
                  Add Approver
                </Button>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle className="text-base">Contract Summary</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Template:</span>
                  <span>Service Agreement</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Counterparty:</span>
                  <span>TechCorp Solutions</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Value:</span>
                  <span>$50,000</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Duration:</span>
                  <span>12 months</span>
                </div>
              </CardContent>
            </Card>
          </div>
        )
      
      default:
        return null
    }
  }

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Create New Contract</h1>
        <p className="text-muted-foreground">
          Guided contract creation with AI-powered assistance
        </p>
      </div>

      {/* Progress Bar */}
      <div className="space-y-2">
        <div className="flex justify-between text-sm font-medium">
          <span>Step {currentStep} of {totalSteps}</span>
          <span>{Math.round(progress)}% complete</span>
        </div>
        <Progress value={progress} className="h-2" />
      </div>

      {/* Step Content */}
      <Card>
        <CardHeader>
          <div className="flex items-center space-x-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground text-sm font-medium">
              {currentStep}
            </div>
            <div>
              <CardTitle className="text-lg">
                {currentStep === 1 && "Select Template"}
                {currentStep === 2 && "Contract Information"}
                {currentStep === 3 && "Terms & Clauses"}
                {currentStep === 4 && "Review & Approval"}
              </CardTitle>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          {renderStepContent()}
        </CardContent>
      </Card>

      {/* Navigation Buttons */}
      <div className="flex justify-between">
        <Button 
          variant="outline" 
          onClick={() => setCurrentStep(Math.max(1, currentStep - 1))}
          disabled={currentStep === 1}
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Previous
        </Button>
        
        <div className="space-x-2">
          <Button variant="outline">
            <Save className="mr-2 h-4 w-4" />
            Save Draft
          </Button>
          
          {currentStep < totalSteps ? (
            <Button 
              onClick={() => setCurrentStep(Math.min(totalSteps, currentStep + 1))}
              disabled={currentStep === 1 && !selectedTemplate}
            >
              Next
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          ) : (
            <Button>
              <Send className="mr-2 h-4 w-4" />
              Send for Approval
            </Button>
          )}
        </div>
      </div>
    </div>
  )
}

export default CreateContract