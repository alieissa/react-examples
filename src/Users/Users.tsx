import React, { useEffect, useState } from 'react';
import { UserForm, type User } from './UserForm';
import { Item, ItemContent, ItemTitle } from '@/components/ui/item';


const Users: React.FC = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [selectedUser, setSelectedUser] = useState<User | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [open, setOpen] = useState<boolean>(false);

  useEffect(() => {
    // Example fetch from placeholder API
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((res) => res.json())
      .then((data: User[]) => {
        setUsers(data);
        console.log("Fetched users:", data);
        setSelectedUser(data[0] || null);
        setLoading(false);
      });
  }, []);

  if (loading) return <div>Loading users...</div>;

  const handleUserClick = (user: User) => {
    console.log("User clicked:", user);
    setSelectedUser(user);
    setOpen(true);
  }

  const handleOnSubmit = (updatedUser: User) => {
    setUsers((prev) => prev.map((u) => u.id === updatedUser.id ? updatedUser : u));
    setOpen(false);
  }

  return (
    <div >
      <div className='p-8'>
        {selectedUser ? <UserForm key={selectedUser.id} user={selectedUser} open={open} onClose={() => setOpen(false)} onSubmit={handleOnSubmit} /> : null}
        <div className="gap-2 flex flex-col flex-1">
          {users.map((user) => (
            <Item key={user.id} variant="outline" size="sm" asChild>
              <a href="#" onClick={() => handleUserClick(user)}>
                <ItemContent >
                  <ItemTitle>{user.name}</ItemTitle>
                </ItemContent>
              </a>
            </Item>
          ))}
        </div>
      </div>
    </div>
  )
};

export { Users };