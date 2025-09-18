import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { 
  PenTool, 
  FileText, 
  Users, 
  Shield, 
  Clock,
  CheckCircle2,
  AlertCircle,
  Download,
  Eye,
  Smartphone
} from "lucide-react"

const DigitalSignature = () => {
  const [currentDocument, setCurrentDocument] = useState("service-agreement-2024")
  const [signatureStep, setSignatureStep] = useState(1) // 1: Review, 2: Sign, 3: Complete
  
  const documents = [
    {
      id: "service-agreement-2024",
      name: "Service Agreement - TechCorp",
      status: "awaiting_signature",
      signers: [
        { name: "You (John Smith)", email: "john@company.com", status: "pending", required: true },
        { name: "Sarah Johnson", email: "sarah@techcorp.com", status: "signed", required: true },
        { name: "Michael Chen", email: "michael@company.com", status: "pending", required: false }
      ],
      deadline: "2024-01-15",
      pages: 12,
      signatureFields: 3
    },
    {
      id: "nda-startupxyz",
      name: "NDA - StartupXYZ Partnership",
      status: "completed",
      signers: [
        { name: "You (John Smith)", email: "john@company.com", status: "signed", required: true },
        { name: "Alex Rodriguez", email: "alex@startupxyz.com", status: "signed", required: true }
      ],
      deadline: "2024-01-10",
      pages: 5,
      signatureFields: 2
    }
  ]

  const auditTrail = [
    {
      action: "Document created",
      user: "Sarah Johnson (Legal)",
      timestamp: "2024-01-08 10:30 AM",
      details: "Initial contract version uploaded"
    },
    {
      action: "Sent for signature",
      user: "Sarah Johnson (Legal)",
      timestamp: "2024-01-08 2:45 PM",
      details: "Document sent to all parties for signature"
    },
    {
      action: "Document viewed",
      user: "Sarah Johnson (TechCorp)",
      timestamp: "2024-01-09 9:15 AM",
      details: "Document opened and reviewed"
    },
    {
      action: "Signature completed",
      user: "Sarah Johnson (TechCorp)",
      timestamp: "2024-01-09 9:22 AM",
      details: "Digital signature applied with IP verification"
    },
    {
      action: "Document viewed",
      user: "You (John Smith)",
      timestamp: "2024-01-10 11:30 AM",
      details: "Document opened for review"
    }
  ]

  const selectedDoc = documents.find(doc => doc.id === currentDocument)
  const completedSigners = selectedDoc?.signers.filter(s => s.status === 'signed').length || 0
  const totalSigners = selectedDoc?.signers.length || 0
  const progress = (completedSigners / totalSigners) * 100

  const renderSigningInterface = () => {
    if (signatureStep === 1) {
      return (
        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Eye className="mr-2 h-5 w-5" />
                Document Review
              </CardTitle>
              <CardDescription>
                Please review the document before signing
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="bg-muted/30 border-2 border-dashed rounded-lg p-8 text-center min-h-[400px] flex items-center justify-center">
                <div>
                  <FileText className="mx-auto h-16 w-16 text-muted-foreground mb-4" />
                  <h3 className="text-lg font-medium mb-2">Document Preview</h3>
                  <p className="text-muted-foreground mb-4">
                    {selectedDoc?.name} ({selectedDoc?.pages} pages)
                  </p>
                  <Button variant="outline">
                    <Eye className="mr-2 h-4 w-4" />
                    Open Full Document
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle>Signature Fields</CardTitle>
              <CardDescription>
                {selectedDoc?.signatureFields} signature fields identified in this document
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="flex items-center justify-between p-3 border rounded-lg">
                  <div>
                    <div className="font-medium text-sm">Signature - Page 8</div>
                    <div className="text-xs text-muted-foreground">Primary signature field</div>
                  </div>
                  <Badge variant="outline">Required</Badge>
                </div>
                <div className="flex items-center justify-between p-3 border rounded-lg">
                  <div>
                    <div className="font-medium text-sm">Initials - Page 3</div>
                    <div className="text-xs text-muted-foreground">Contract terms acknowledgment</div>
                  </div>
                  <Badge variant="outline">Required</Badge>
                </div>
                <div className="flex items-center justify-between p-3 border rounded-lg">
                  <div>
                    <div className="font-medium text-sm">Date - Page 8</div>
                    <div className="text-xs text-muted-foreground">Signature date field</div>
                  </div>
                  <Badge variant="secondary">Auto-filled</Badge>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <div className="flex justify-end">
            <Button onClick={() => setSignatureStep(2)}>
              Proceed to Sign
            </Button>
          </div>
        </div>
      )
    }
    
    if (signatureStep === 2) {
      return (
        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <PenTool className="mr-2 h-5 w-5" />
                Digital Signature
              </CardTitle>
              <CardDescription>
                Apply your digital signature to complete the signing process
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid gap-4 md:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="signer-name">Full Name</Label>
                  <Input id="signer-name" value="John Smith" disabled />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="signer-email">Email Address</Label>
                  <Input id="signer-email" value="john@company.com" disabled />
                </div>
              </div>
              
              <div className="border-2 border-dashed rounded-lg p-8 text-center">
                <PenTool className="mx-auto h-12 w-12 text-muted-foreground mb-4" />
                <h4 className="font-medium mb-2">Signature Pad</h4>
                <p className="text-sm text-muted-foreground mb-4">
                  Draw your signature below or use alternative signing methods
                </p>
                <div className="bg-white border rounded-lg h-32 mb-4 flex items-center justify-center">
                  <span className="text-muted-foreground text-sm">Click and drag to sign</span>
                </div>
                <div className="flex justify-center space-x-2">
                  <Button variant="outline" size="sm">Clear</Button>
                  <Button variant="outline" size="sm">
                    <Smartphone className="mr-2 h-4 w-4" />
                    Sign on Mobile
                  </Button>
                </div>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-start space-x-2">
                  <Checkbox id="consent" />
                  <Label htmlFor="consent" className="text-sm leading-relaxed">
                    I consent to using electronic signatures and acknowledge that my electronic signature 
                    has the same legal effect as a handwritten signature.
                  </Label>
                </div>
                <div className="flex items-start space-x-2">
                  <Checkbox id="terms" />
                  <Label htmlFor="terms" className="text-sm leading-relaxed">
                    I have read, understood, and agree to the terms and conditions outlined in this document.
                  </Label>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <div className="flex justify-between">
            <Button variant="outline" onClick={() => setSignatureStep(1)}>
              Back to Review
            </Button>
            <Button onClick={() => setSignatureStep(3)}>
              Complete Signature
            </Button>
          </div>
        </div>
      )
    }
    
    if (signatureStep === 3) {
      return (
        <div className="space-y-6">
          <Card>
            <CardContent className="pt-6">
              <div className="text-center">
                <CheckCircle2 className="mx-auto h-16 w-16 text-green-600 mb-4" />
                <h3 className="text-2xl font-bold mb-2">Signature Complete!</h3>
                <p className="text-muted-foreground mb-6">
                  Your signature has been successfully applied to the document.
                </p>
                <div className="flex justify-center space-x-4">
                  <Button>
                    <Download className="mr-2 h-4 w-4" />
                    Download Signed Document
                  </Button>
                  <Button variant="outline">
                    <Download className="mr-2 h-4 w-4" />
                    Download Certificate
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle>Document Status</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {selectedDoc?.signers.map((signer, index) => (
                  <div key={index} className="flex items-center justify-between p-3 border rounded-lg">
                    <div>
                      <div className="font-medium text-sm">{signer.name}</div>
                      <div className="text-xs text-muted-foreground">{signer.email}</div>
                    </div>
                    <Badge variant={signer.name.includes('You') || signer.status === 'signed' ? 'default' : 'secondary'}>
                      {signer.name.includes('You') ? 'signed' : signer.status}
                    </Badge>
                  </div>
                ))}
              </div>
              <div className="mt-4 p-3 bg-green-50 dark:bg-green-950 border border-green-200 dark:border-green-800 rounded-lg">
                <div className="flex items-center">
                  <CheckCircle2 className="h-4 w-4 text-green-600 mr-2" />
                  <span className="text-sm font-medium text-green-800 dark:text-green-200">
                    All required signatures completed
                  </span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      )
    }
  }

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Digital Signature</h1>
        <p className="text-muted-foreground">
          Secure document signing with legal compliance
        </p>
      </div>

      {/* Document Selection */}
      <div className="grid gap-4 md:grid-cols-2">
        {documents.map((doc) => (
          <Card 
            key={doc.id}
            className={`cursor-pointer transition-colors ${
              currentDocument === doc.id ? 'ring-2 ring-primary bg-primary/5' : 'hover:bg-muted/50'
            }`}
            onClick={() => {
              setCurrentDocument(doc.id)
              setSignatureStep(1)
            }}
          >
            <CardHeader>
              <div className="flex items-start justify-between">
                <FileText className="h-6 w-6 text-primary" />
                <Badge variant={doc.status === 'completed' ? 'default' : 'secondary'}>
                  {doc.status.replace('_', ' ')}
                </Badge>
              </div>
              <CardTitle className="text-base">{doc.name}</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">Signers:</span>
                  <span>{doc.signers.filter(s => s.status === 'signed').length}/{doc.signers.length}</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">Deadline:</span>
                  <span className="flex items-center">
                    <Clock className="mr-1 h-3 w-3" />
                    {doc.deadline}
                  </span>
                </div>
                <Progress 
                  value={(doc.signers.filter(s => s.status === 'signed').length / doc.signers.length) * 100} 
                  className="h-2" 
                />
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Current Document Details */}
      {selectedDoc && (
        <div className="grid gap-6 lg:grid-cols-3">
          <div className="lg:col-span-2">
            {renderSigningInterface()}
          </div>
          
          <div className="space-y-6">
            {/* Signature Progress */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Users className="mr-2 h-5 w-5" />
                  Signature Progress
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between text-sm mb-2">
                      <span>Progress</span>
                      <span>{completedSigners}/{totalSigners} signed</span>
                    </div>
                    <Progress value={progress} className="h-2" />
                  </div>
                  <div className="space-y-2">
                    {selectedDoc.signers.map((signer, index) => (
                      <div key={index} className="flex items-center justify-between text-sm">
                        <div className="flex items-center">
                          {signer.status === 'signed' ? (
                            <CheckCircle2 className="h-4 w-4 text-green-600 mr-2" />
                          ) : (
                            <AlertCircle className="h-4 w-4 text-yellow-600 mr-2" />
                          )}
                          <span className={signer.required ? 'font-medium' : 'text-muted-foreground'}>
                            {signer.name}
                          </span>
                        </div>
                        <Badge variant={signer.status === 'signed' ? 'default' : 'secondary'}>
                          {signer.status}
                        </Badge>
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Security & Audit */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Shield className="mr-2 h-5 w-5" />
                  Security & Audit Trail
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {auditTrail.slice(0, 4).map((event, index) => (
                    <div key={index} className="border-l-2 border-muted pl-4 pb-3">
                      <div className="font-medium text-sm">{event.action}</div>
                      <div className="text-xs text-muted-foreground">{event.user}</div>
                      <div className="text-xs text-muted-foreground">{event.timestamp}</div>
                    </div>
                  ))}
                  <Button variant="outline" size="sm" className="w-full">
                    View Complete Audit Trail
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      )}
    </div>
  )
}

export default DigitalSignature