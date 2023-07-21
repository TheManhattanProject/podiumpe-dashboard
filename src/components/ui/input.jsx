import { cn } from '@/lib/utils';
import { Percent } from 'lucide-react';

const Input = ({ className, type, state, setState, id, ...props }) => {
  return (
    <input
      type={type}
      className={cn(
        'flex h-8 w-full rounded-md border border-input bg-background px-3 py-2 text-sm font-thin ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus:ring-design-thirdText disabled:cursor-not-allowed disabled:opacity-50',
        className
      )}
      value={state}
      onChange={(e) => setState(e.currentTarget.value)}
      id={id ?? ''}
      {...props}
    />
  );
};

const InputwIcon = ({ className, type, state, setState, id, ...props }) => {
  return (
    <div className="flex items-center bg-[#3F3F3F] rounded-md">
      <input
        type={type}
        className={cn(
          'flex h-8 w-full rounded-md border border-input bg-background px-3 py-2 text-sm font-thin ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus:ring-design-thirdText disabled:cursor-not-allowed disabled:opacity-50',
          className
        )}
        value={state}
        onChange={(e) => setState(e.currentTarget.value)}
        id={id ?? ''}
        {...props}
      />
      <span className="px-1 py-2 text-[#AAA]">
        <Percent />
      </span>
    </div>
  );
};

export { Input, InputwIcon };
