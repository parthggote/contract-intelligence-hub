import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { UserPlus } from "lucide-react";

const users = [
  {
    name: "Alice Johnson",
    email: "alice.j@example.com",
    role: "Admin",
    status: "Active",
    avatar: "/placeholder.svg",
  },
  {
    name: "Bob Williams",
    email: "bob.w@example.com",
    role: "Editor",
    status: "Active",
    avatar: "/placeholder.svg",
  },
  {
    name: "Charlie Brown",
    email: "charlie.b@example.com",
    role: "Viewer",
    status: "Inactive",
    avatar: "/placeholder.svg",
  },
  {
    name: "Diana Miller",
    email: "diana.m@example.com",
    role: "Editor",
    status: "Active",
    avatar: "/placeholder.svg",
  },
  {
    name: "Ethan Davis",
    email: "ethan.d@example.com",
    role: "Viewer",
    status: "Pending",
    avatar: "/placeholder.svg",
  },
];

const Users = () => {
  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold">User Management</h1>
        <Button>
          <UserPlus className="mr-2 h-4 w-4" />
          Add User
        </Button>
      </div>
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {users.map((user) => (
          <Card key={user.email}>
            <CardHeader>
              <div className="flex items-center gap-4">
                <Avatar>
                  <AvatarImage src={user.avatar} alt={user.name} />
                  <AvatarFallback>{user.name.charAt(0)}</AvatarFallback>
                </Avatar>
                <div>
                  <CardTitle>{user.name}</CardTitle>
                  <p className="text-sm text-muted-foreground">{user.email}</p>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-between">
                <p className="text-sm font-medium">Role: {user.role}</p>
                <Badge
                  variant={
                    user.status === "Active"
                      ? "default"
                      : user.status === "Inactive"
                      ? "outline"
                      : "secondary"
                  }
                >
                  {user.status}
                </Badge>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Users;
