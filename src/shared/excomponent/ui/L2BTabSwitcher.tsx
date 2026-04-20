import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"

// 1. Define the props so it can talk to the Header
interface TabSwitcherProps {
  activeTab?: string;
  onChange?: (value: string) => void; // shadcn/radix passes the value as a string
}

export function TabSwitcher({ activeTab, onChange }: TabSwitcherProps) {
  return (
    // 2. Change `defaultValue` to `value` (makes it controlled)
    // 3. Add `onValueChange={onChange}` (sends the click back up the chain!)
    <Tabs 
      value={activeTab} 
      onValueChange={onChange} 
      className="w-[170px] h-[40px] xl:w-[225px] xl:h-[48px] "
    >
      <TabsList className="w-full h-full bg-neutral-6 rounded-[8px]">
        <TabsTrigger value="Rental">
          Rental
        </TabsTrigger>
        <TabsTrigger value="Material">
          Material
        </TabsTrigger>
      </TabsList>
    </Tabs>
  )
}