import React, { useEffect, useState } from 'react';

export type User = {
  id: number;
  name: string;
  email: string;
};


type UserFormProps = {
  user: User;
};

const UserForm: React.FC<UserFormProps> = (props: UserFormProps) => {
  const [user, setUser] = useState<User>(props.user);

  useEffect(() => {
    setUser(props.user);
  }, [props.user]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!user) return;
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // props.onSubmit(user);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>
          Full Name:
          <input
            name="name"
            value={user.name}
            onChange={handleChange}
            type="text"
            required
          />
        </label>
      </div>
      <div>
        <label>
          Email:
          <input
            name="email"
            value={user.email}
            onChange={handleChange}
            type="email"
            required
          />
        </label>
      </div>
      <button type="submit">Sync User</button>
    </form>
  );
};

export { UserForm };