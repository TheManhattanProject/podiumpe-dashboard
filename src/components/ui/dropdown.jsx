'use client';

// import * as DropdownMenuPrimitive from "@radix-ui/react-dropdown-menu"
// import { Check, Circle } from "lucide-react"

// import { cn } from "@/lib/utils"

// const DropdownMenu = DropdownMenuPrimitive.Root
// const DropdownMenuTrigger = DropdownMenuPrimitive.Trigger
// const DropdownMenuGroup = DropdownMenuPrimitive.Group
// const DropdownMenuPortal = DropdownMenuPrimitive.Portal
// const DropdownMenuSub = DropdownMenuPrimitive.Sub
// const DropdownMenuRadioGroup = DropdownMenuPrimitive.RadioGroup

// const DropdownMenuSubTrigger = ({ className, inset, children, ...props }, ref) => (
//     <DropdownMenuPrimitive.SubTrigger
//         className={cn(
//             "flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent data-[state=open]:bg-accent",
//             inset && "pl-8",
//             className
//         )}
//         {...props}
//     >
//         {children}
//         {/* <ChevronRight className="ml-auto h-4 w-4" /> */}
//     </DropdownMenuPrimitive.SubTrigger>
// )

// DropdownMenuSubTrigger.displayName = DropdownMenuPrimitive.SubTrigger.displayName

// const DropdownMenuSubContent = ({ className, ...props }, ref) => (
//     <DropdownMenuPrimitive.SubContent
//         className={cn(
//             "z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-lg data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
//             className
//         )}
//         {...props}
//     />
// )

// DropdownMenuSubContent.displayName = DropdownMenuPrimitive.SubContent.displayName

// const DropdownMenuContent = ({ className, sideOffset = 4, ...props }, ref) => (
//     <DropdownMenuPrimitive.Portal>
//         <DropdownMenuPrimitive.Content
//             ref={ref}
//             sideOffset={sideOffset}
//             className={cn(
//                 "z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
//                 className
//             )}
//             {...props}
//         />
//     </DropdownMenuPrimitive.Portal>
// )
// DropdownMenuContent.displayName = DropdownMenuPrimitive.Content.displayName

// const DropdownMenuItem = ({ className, inset, ...props }, ref) => (
//     <DropdownMenuPrimitive.Item
//         className={cn(
//             "relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
//             inset && "pl-8",
//             className
//         )}
//         {...props}
//     />
// )
// DropdownMenuItem.displayName = DropdownMenuPrimitive.Item.displayName

// const DropdownMenuCheckboxItem = ({ className, children, checked, ...props }, ref) => (
//     <DropdownMenuPrimitive.CheckboxItem
//         className={cn(
//             "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
//             className
//         )}
//         checked={checked}
//         {...props}
//     >
//         <span className="absolute left-2 flex h-3.5 w-3.5 items-center justify-center">
//             <DropdownMenuPrimitive.ItemIndicator>
//                 <Check className="h-4 w-4" />
//             </DropdownMenuPrimitive.ItemIndicator>
//         </span>
//         {children}
//     </DropdownMenuPrimitive.CheckboxItem>
// )

// DropdownMenuCheckboxItem.displayName = DropdownMenuPrimitive.CheckboxItem.displayName

// const DropdownMenuRadioItem = ({ className, children, ...props }, ref) => (
//     <DropdownMenuPrimitive.RadioItem
//         className={cn(
//             "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
//             className
//         )}
//         {...props}
//     >
//         <span className="absolute left-2 flex h-3.5 w-3.5 items-center justify-center">
//             <DropdownMenuPrimitive.ItemIndicator>
//                 <Circle className="h-2 w-2 fill-current" />
//             </DropdownMenuPrimitive.ItemIndicator>
//         </span>
//         {children}
//     </DropdownMenuPrimitive.RadioItem>
// )

// DropdownMenuRadioItem.displayName = DropdownMenuPrimitive.RadioItem.displayName

// const DropdownMenuLabel = ({ className, inset, ...props }, ref) => (
//     <DropdownMenuPrimitive.Label
//         className={cn(
//             "px-2 py-1.5 text-sm font-semibold",
//             inset && "pl-8",
//             className
//         )}
//         {...props}
//     />
// )
// DropdownMenuLabel.displayName = DropdownMenuPrimitive.Label.displayName

// const DropdownMenuSeparator = ({ className, ...props }, ref) => (
//     <DropdownMenuPrimitive.Separator
//         className={cn("-mx-1 my-1 h-px bg-muted", className)}
//         {...props}
//     />
// )
// DropdownMenuSeparator.displayName = DropdownMenuPrimitive.Separator.displayName

// const DropdownMenuShortcut = ({
//     className,
//     ...props
// }) => {
//     return (
//         <span
//             className={cn("ml-auto text-xs tracking-widest opacity-60", className)}
//             {...props}
//         />
//     )
// }
// DropdownMenuShortcut.displayName = "DropdownMenuShortcut"

// export {
//     DropdownMenu, DropdownMenuCheckboxItem, DropdownMenuContent, DropdownMenuGroup, DropdownMenuItem, DropdownMenuLabel, DropdownMenuPortal, DropdownMenuRadioGroup, DropdownMenuRadioItem, DropdownMenuSeparator,
//     DropdownMenuShortcut, DropdownMenuSub,
//     DropdownMenuSubContent,
//     DropdownMenuSubTrigger, DropdownMenuTrigger
// }

import * as DropdownMenu from '@radix-ui/react-dropdown-menu';
import clsx from 'clsx';
import { ChevronDown } from 'lucide-react';
import React from 'react';
const Dropdown = ({ className = '' }) => {
  const [bookmarksChecked, setBookmarksChecked] = React.useState(true);
  const [urlsChecked, setUrlsChecked] = React.useState(false);
  const [person, setPerson] = React.useState('pedro');

  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger asChild>
        <button
          className={clsx('IconButton', className)}
          aria-label="Customise options"
        >
          <p>Formula 1</p>
          <ChevronDown />
        </button>
      </DropdownMenu.Trigger>

      <DropdownMenu.Portal>
        <DropdownMenu.Content className="DropdownMenuContent" sideOffset={5}>
          <DropdownMenu.Item className="DropdownMenuItem">
            New Tab <div className="RightSlot">⌘+T</div>
          </DropdownMenu.Item>
          <DropdownMenu.Item className="DropdownMenuItem">
            New Window <div className="RightSlot">⌘+N</div>
          </DropdownMenu.Item>
          <DropdownMenu.Item className="DropdownMenuItem" disabled>
            New Private Window <div className="RightSlot">⇧+⌘+N</div>
          </DropdownMenu.Item>
          <DropdownMenu.Sub>
            <DropdownMenu.SubTrigger className="DropdownMenuSubTrigger">
              More Tools
              <div className="RightSlot">D</div>
            </DropdownMenu.SubTrigger>
            <DropdownMenu.Portal>
              <DropdownMenu.SubContent
                className="DropdownMenuSubContent"
                sideOffset={2}
                alignOffset={-5}
              >
                <DropdownMenu.Item className="DropdownMenuItem">
                  Save Page As… <div className="RightSlot">⌘+S</div>
                </DropdownMenu.Item>
                <DropdownMenu.Item className="DropdownMenuItem">
                  Create Shortcut…
                </DropdownMenu.Item>
                <DropdownMenu.Item className="DropdownMenuItem">
                  Name Window…
                </DropdownMenu.Item>
                <DropdownMenu.Separator className="DropdownMenu.Separator" />
                <DropdownMenu.Item className="DropdownMenuItem">
                  Developer Tools
                </DropdownMenu.Item>
              </DropdownMenu.SubContent>
            </DropdownMenu.Portal>
          </DropdownMenu.Sub>

          <DropdownMenu.Separator className="DropdownMenuSeparator" />

          <DropdownMenu.CheckboxItem
            className="DropdownMenuCheckboxItem"
            checked={bookmarksChecked}
            onCheckedChange={setBookmarksChecked}
          >
            <DropdownMenu.ItemIndicator className="DropdownMenuItemIndicator">
              C
            </DropdownMenu.ItemIndicator>
            Show Bookmarks <div className="RightSlot">⌘+B</div>
          </DropdownMenu.CheckboxItem>
          <DropdownMenu.CheckboxItem
            className="DropdownMenuCheckboxItem"
            checked={urlsChecked}
            onCheckedChange={setUrlsChecked}
          >
            <DropdownMenu.ItemIndicator className="DropdownMenuItemIndicator">
              C
            </DropdownMenu.ItemIndicator>
            Show Full URLs
          </DropdownMenu.CheckboxItem>

          <DropdownMenu.Separator className="DropdownMenuSeparator" />

          <DropdownMenu.Label className="DropdownMenuLabel">
            People
          </DropdownMenu.Label>
          <DropdownMenu.RadioGroup value={person} onValueChange={setPerson}>
            <DropdownMenu.RadioItem
              className="DropdownMenuRadioItem"
              value="pedro"
            >
              <DropdownMenu.ItemIndicator className="DropdownMenuItemIndicator">
                A
              </DropdownMenu.ItemIndicator>
              Pedro Duarte
            </DropdownMenu.RadioItem>
            <DropdownMenu.RadioItem
              className="DropdownMenuRadioItem"
              value="colm"
            >
              <DropdownMenu.ItemIndicator className="DropdownMenuItemIndicator">
                A
              </DropdownMenu.ItemIndicator>
              Colm Tuite
            </DropdownMenu.RadioItem>
          </DropdownMenu.RadioGroup>

          <DropdownMenu.Arrow className="DropdownMenuArrow" />
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  );
};

export default Dropdown;
