'use client';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useState } from 'react';

export default function Dashboard() {
  const [first, setfirst] = useState('dcsd');
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Input
        type="email"
        placeholder="Email"
        state={first}
        setState={setfirst}
      />
      <Button variant="secondary">Button</Button>
      <pre>{first}</pre>
    </main>
  );
}
