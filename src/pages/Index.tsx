import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { 
  FileEdit, 
  PenTool, 
  BarChart3, 
  Shield, 
  Zap, 
  Users,
  TrendingUp,
  Clock,
  DollarSign,
  Star,
  ArrowRight,
  CheckCircle2
} from "lucide-react"
import { Link } from "react-router-dom"
import heroImage from "@/assets/hero-image.jpg"

const Index = () => {
  const features = [
    {
      icon: FileEdit,
      title: "Smart Contract Creation",
      description: "AI-powered template library with guided questionnaire-driven creation flow"
    },
    {
      icon: PenTool,
      title: "Digital Signature",
      description: "Secure, legally-binding e-signatures with real-time tamper-evident audit trails"
    },
    {
      icon: BarChart3,
      title: "Advanced Analytics",
      description: "Transform contracts into business intelligence with AI-powered insights"
    },
    {
      icon: Shield,
      title: "Enterprise Security",
      description: "Bank-grade encryption with cryptographic integrity verification"
    }
  ]

  const stats = [
    { label: "Faster Contract Cycles", value: "30-50%" },
    { label: "Reduced Admin Costs", value: "25-30%" },
    { label: "Compliance Rate", value: "99.9%" },
    { label: "Customer Satisfaction", value: "4.9/5" }
  ]

  const personas = [
    {
      title: "Legal Teams",
      description: "Streamline contract creation, negotiation, and compliance management",
      icon: Shield
    },
    {
      title: "Sales Teams", 
      description: "Accelerate deal closure with faster contract turnarounds",
      icon: TrendingUp
    },
    {
      title: "Procurement",
      description: "Optimize vendor relationships and contract performance tracking",
      icon: DollarSign
    }
  ]

  const testimonials = [
    {
      quote: "ContractCLM reduced our contract processing time by 45% and eliminated manual errors.",
      author: "Sarah Johnson",
      role: "Legal Director, TechCorp",
      rating: 5
    },
    {
      quote: "The AI-powered insights helped us identify $2M in cost savings opportunities.",
      author: "Michael Chen",
      role: "Procurement Manager, Global Solutions",
      rating: 5
    }
  ]

  return (
    <div className="space-y-20">
      {/* Hero Section */}
      <section className="relative overflow-hidden rounded-2xl">
        <div className="absolute inset-0">
          <img 
            src={heroImage} 
            alt="Contract Management Platform" 
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary/70 dark:from-primary/95 dark:to-primary/80" />
        </div>
        <div className="relative px-6 py-24 sm:px-12 sm:py-32 lg:px-16">
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-primary-foreground sm:text-6xl">
              Transform Contracts into Business Intelligence
            </h1>
            <p className="mt-6 text-lg leading-8 text-primary-foreground/90">
              Data-first contract lifecycle management with digital signatures. 
              Reduce cycle times by 30-50% while unlocking contract insights.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Button size="lg" variant="secondary" asChild>
                <Link to="/dashboard">
                  Start Free Trial
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="text-primary-foreground border-primary-foreground hover:bg-primary-foreground hover:text-primary">
                Request Demo
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat, index) => (
          <Card key={index} className="text-center">
            <CardContent className="pt-6">
              <div className="text-3xl font-bold text-primary">{stat.value}</div>
              <p className="text-sm text-muted-foreground">{stat.label}</p>
            </CardContent>
          </Card>
        ))}
      </section>

      {/* Features Section */}
      <section className="space-y-12">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Complete Contract Lifecycle Management
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            From creation to analytics, manage every aspect of your contracts
          </p>
        </div>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <Card key={index} className="relative overflow-hidden">
                <CardHeader>
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                    <Icon className="h-6 w-6" />
                  </div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>{feature.description}</CardDescription>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </section>

      {/* Customer Personas */}
      <section className="space-y-12">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Built for Every Team
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Tailored solutions for legal, sales, and procurement professionals
          </p>
        </div>
        <div className="grid gap-8 lg:grid-cols-3">
          {personas.map((persona, index) => {
            const Icon = persona.icon
            return (
              <Card key={index} className="text-center">
                <CardHeader>
                  <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle>{persona.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>{persona.description}</CardDescription>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </section>

      {/* Testimonials */}
      <section className="space-y-12">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Trusted by Industry Leaders
          </h2>
        </div>
        <div className="grid gap-8 lg:grid-cols-2">
          {testimonials.map((testimonial, index) => (
            <Card key={index}>
              <CardContent className="pt-6">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <blockquote className="text-lg font-medium">
                  "{testimonial.quote}"
                </blockquote>
                <div className="mt-4">
                  <cite className="font-medium">{testimonial.author}</cite>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Integration Logos Placeholder */}
      <section className="text-center space-y-8">
        <h3 className="text-xl font-semibold">Integrates with your existing tools</h3>
        <div className="flex items-center justify-center space-x-8 opacity-60">
          <Badge variant="outline" className="px-4 py-2">Salesforce</Badge>
          <Badge variant="outline" className="px-4 py-2">HubSpot</Badge>
          <Badge variant="outline" className="px-4 py-2">SAP</Badge>
          <Badge variant="outline" className="px-4 py-2">Oracle</Badge>
          <Badge variant="outline" className="px-4 py-2">Microsoft</Badge>
        </div>
      </section>

      {/* CTA Section */}
      <section className="rounded-2xl bg-primary px-6 py-16 text-center">
        <h2 className="text-3xl font-bold tracking-tight text-primary-foreground sm:text-4xl">
          Ready to transform your contract management?
        </h2>
        <p className="mt-4 text-lg text-primary-foreground/90">
          Join thousands of companies already using ContractCLM
        </p>
        <div className="mt-8 flex items-center justify-center gap-x-6">
          <Button size="lg" variant="secondary" asChild>
            <Link to="/dashboard">
              Start Free Trial
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
          <Button size="lg" variant="outline" className="text-primary-foreground border-primary-foreground hover:bg-primary-foreground hover:text-primary">
            Contact Sales
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Index;
