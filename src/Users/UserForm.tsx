import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Field,
  FieldGroup
} from "@/components/ui/field";
import { Input } from '@/components/ui/input';
export type User = {
  id: number;
  name: string;
  email: string;
};



import { Label } from "@/components/ui/label";
// import { useState } from "react";
import { useEffect, useState } from "react";

function UserForm({ user, open, onClose, onSubmit }: { user: User; open: boolean; onClose: () => void, onSubmit: (user: User) => void }) {
  const [formUser, setFormUser] = useState<User>(user);

  useEffect(() => {
    console.log("Mounting");
    return () => {
      console.log("Unmounting");
    }
  }, [])
  // useEffect(() => {
  //   setFormUser(user);
  // }, [user])

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormUser((prev) => ({ ...prev, [name]: value }));
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formUser)
  }

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <form onSubmit={handleSubmit}>
        <DialogTrigger>
        </DialogTrigger>
        <DialogContent className="sm:max-w-sm">
          <DialogHeader>
            <DialogTitle>Edit profile</DialogTitle>
            <DialogDescription>
              Make changes to your profile here. Click save when you&apos;re
              done.
            </DialogDescription>
          </DialogHeader>
          <FieldGroup>
            <Field>
              <Label htmlFor="name-1">Name</Label>
              <Input id="name-1" name="name" value={formUser.name} onChange={handleInputChange} />
            </Field>
            <Field>
              <Label htmlFor="username-1">Username</Label>
              <Input id="username-1" name="email" value={formUser.email} onChange={handleInputChange} />
            </Field>
          </FieldGroup>
          <DialogFooter>
            <DialogClose asChild>
              <Button variant="outline">Cancel</Button>
            </DialogClose>
            <Button type="submit" onClick={handleSubmit}>Save changes</Button>
          </DialogFooter>
        </DialogContent>
      </form>
    </Dialog>
  )
}


export { UserForm };
