import { Link, useLocation } from "react-router-dom"
import { ModeToggle } from "@/components/mode-toggle"
import { Button } from "@/components/ui/button"
import { 
  LayoutDashboard, 
  FileEdit, 
  PenTool, 
  Archive, 
  BarChart3, 
  Users,
  Menu,
  X
} from "lucide-react"
import { useState } from "react"
import { cn } from "@/lib/utils"

const navigation = [
  { name: "Dashboard", href: "/dashboard", icon: LayoutDashboard },
  { name: "Create Contract", href: "/create", icon: FileEdit },
  { name: "Sign Documents", href: "/sign", icon: PenTool },
  { name: "Repository", href: "/repository", icon: Archive },
  { name: "Analytics", href: "/analytics", icon: BarChart3 },
  { name: "Users", href: "/users", icon: Users },
]

export function Navigation() {
  const location = useLocation()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  
  return (
    <nav className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 justify-between items-center">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <Link to="/" className="text-2xl font-bold text-primary">
                ContractCLM
              </Link>
            </div>
            <div className="hidden sm:ml-10 sm:flex sm:space-x-8">
              {navigation.map((item) => {
                const Icon = item.icon
                const isActive = location.pathname === item.href
                return (
                  <Link
                    key={item.name}
                    to={item.href}
                    className={cn(
                      "inline-flex items-center rounded-md px-3 py-2 text-base font-medium transition-colors",
                      isActive
                        ? "bg-primary/10 text-primary"
                        : "text-muted-foreground hover:bg-accent hover:text-accent-foreground"
                    )}
                  >
                    <Icon className="mr-2 h-5 w-5" />
                    {item.name}
                  </Link>
                )
              })}
            </div>
          </div>
          
          <div className="hidden sm:ml-6 sm:flex sm:items-center space-x-4">
            <ModeToggle />
            <Button variant="ghost" size="sm">
              Sign In
            </Button>
            <Button size="sm" variant="secondary">
              Start Free Trial
            </Button>
          </div>

          <div className="flex items-center sm:hidden">
            <ModeToggle />
            <Button
              variant="ghost"
              size="icon"
              className="ml-2"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="sm:hidden">
          <div className="space-y-1 pb-3 pt-2">
            {navigation.map((item) => {
              const Icon = item.icon
              return (
                <Link
                  key={item.name}
                  to={item.href}
                  className={cn(
                    "flex items-center border-l-4 py-2 pl-3 pr-4 text-base font-medium",
                    location.pathname === item.href
                      ? "border-primary bg-primary/10 text-primary"
                      : "border-transparent text-muted-foreground hover:border-border hover:bg-muted hover:text-foreground"
                  )}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <Icon className="mr-3 h-5 w-5" />
                  {item.name}
                </Link>
              )
            })}
            <div className="border-t pt-4 pb-3">
              <div className="flex items-center px-4 space-x-3">
                <Button variant="outline" size="sm" className="flex-1">
                  Sign In
                </Button>
                <Button size="sm" className="flex-1">
                  Start Free Trial
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}